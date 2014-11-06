require 'net/http'
module MagentoApiWrapper
	extend ActiveSupport::Concern

	# Pull user's items from API
	# Pass user and date as params date should be in YYYY-MM-DD format
	# user is our application current user
	def item_feed(date,vendor_code)
		begin	
	    url = URI.parse(Rails.application.secrets[:api_endpoints]['day_view']['url'])
		  url_params = {"vendorcode" => vendor_code, "date" => date}#fitbit date range
		  path = "#{url.path}?#{url_params.collect { |k,v| "#{k}=#{CGI::escape(v.to_s)}"}.join('&')}"
		  request = Net::HTTP::Get.new(path, {"Cookie" => "SessionID=#{session['user_cookie']}"}) 
		  response = Net::HTTP.start(url.host, url.port, :use_ssl => true, :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http| 
		    http.request(request)
		  end  
		  json_data = JSON.parse(response.body) rescue nil
		  if json_data.present? && json_data['NormalizedDailySleepSession']['SleepDetails'].blank?
		  	return {}
		  else
		    return json_data
		  end
	  rescue => e
	  	return {:message => 'Error in fetchng API data. Please try again.'}	
	  end
	end

	# Pull member's data using cookie 
	# Get member's details as json response
	def member_details(token)
  	session_id = token
  	url = URI.parse(Rails.application.secrets[:api_endpoints]['member_details']['url'])

		req = Net::HTTP::Get.new(url.path, {
		  "Cookie" => "SessionID=#{session_id}"
		})
		res = Net::HTTP.start(url.host, url.port, :use_ssl => true, :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http| 
  		http.request(req)
		end
	  session['user_cookie'] = token
	  return JSON.parse(res.body) rescue nil
	end

	# Pull user's weekly sleep details 
	# Pass vendor_code, startDate and endDate as params date should be in YYYY-MM-DD format
	# Vendor code should be 'FITBT' or 'MISFT', default 'FITBT'
	def weekly_feed(week_start, week_end, vendor_code)
		begin
			week_start = week_start.strftime('%Y-%m-%d')
			week_end = week_end.strftime('%Y-%m-%d')
	    url = URI.parse(Rails.application.secrets[:api_endpoints]['week_view']['url'])
		  url_params = {"vendorcode" => vendor_code, "startDate" => week_start, "endDate" => week_end}#fitbit date range
		  path = "#{url.path}?#{url_params.collect { |k,v| "#{k}=#{CGI::escape(v.to_s)}"}.join('&')}"
		  request = Net::HTTP::Get.new(path, {"Cookie" => "SessionID=#{session['user_cookie']}"})
		  response = Net::HTTP.start(url.host, url.port, :use_ssl => true, :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http|
		    http.request(request)
		  end
		  json_data = JSON.parse(response.body) rescue nil
		  if json_data['SleepSummaries'].blank?
				return {}
		  else
		    return json_data
		  end
	  rescue => e
			return {:message => 'Error in fetchng API data. Please try again.'}
	  end
	end
end