require 'net/http'
module OnethingApiWrapper extend ActiveSupport::Concern

	# Pull user's items from API
	# Pass period and start_date and interval as params date should be in MM/DD/YYYY format
	# interval should be day, week & month
	# period shoud be any integer number
	def company_onethings(start_date,period,interval)
		begin
	    url = URI.parse(Rails.application.secrets[:api_endpoints]['onething']['url_all_company'])
		  url_params = {"period" => period, "start_date" => start_date, "interval" => interval}
		  path = "#{url.path}?#{url_params.collect { |k,v| "#{k}=#{CGI::escape(v.to_s)}"}.join('&')}"
		  request = Net::HTTP::Get.new(path) 
		  response = Net::HTTP.start(url.host, url.port, :use_ssl => false, :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http| 
		    http.request(request)
		  end  
		  json_data = JSON.parse(response.body) rescue nil
		  if !json_data.present?
		  	return {}
		  else
		    return json_data
		  end
	  rescue => e
	  	return {:message => 'Error in fetchng API data. Please try again.'}	
	  end
	end

	# Pull user's items from API
	# Pass interval amd company id
	# interval should be week, month and quater
	def each_company_onethings(company_id, interval)
		begin
	    url = URI.parse(Rails.application.secrets[:api_endpoints]['onething']['url_indvidual_company'])
		  url_params = {"comapny_id" => company_id, "interval" => interval}
		  path = "#{url.path}?#{url_params.collect { |k,v| "#{k}=#{CGI::escape(v.to_s)}"}.join('&')}"
		  request = Net::HTTP::Get.new(path) 
		  response = Net::HTTP.start(url.host, url.port, :use_ssl => false, :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http| 
		    http.request(request)
		  end  
		  json_data = JSON.parse(response.body) rescue nil
		  if !json_data.present?
		  	return {}
		  else
		    return json_data
		  end
	  rescue => e
	  	return {:message => 'Error in fetchng API data. Please try again.'}	
	  end
	end

	# Pull all comapny information from onrthing
	def all_companies_information
		begin
	    url = URI.parse(Rails.application.secrets[:api_endpoints]['onething']['url_company_info'])
		  url_params = {}
		  path = "#{url.path}?#{url_params.collect { |k,v| "#{k}=#{CGI::escape(v.to_s)}"}.join('&')}"
		  request = Net::HTTP::Get.new(path) 
		  response = Net::HTTP.start(url.host, url.port, :use_ssl => false, :verify_mode => OpenSSL::SSL::VERIFY_NONE) do |http| 
		    http.request(request)
		  end  
		  json_data = JSON.parse(response.body) rescue nil
		  if !json_data.present?
		  	return {}
		  else
		    return json_data
		  end
	  rescue => e
	  	return {:message => 'Error in fetchng API data. Please try again.'}	
	  end
	end
end