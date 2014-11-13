class VisitorsController < ApplicationController
	include OnethingApiWrapper

	# plot the charts for the api from json data
	def report
    start_date = '04/13/2014'
    period = 12
    interval = 'month'
    @company_info = all_companies_information
    binding.pry
    @json = company_onethings(start_date,period,interval)
	end
end
