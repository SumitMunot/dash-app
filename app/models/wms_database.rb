class WmsDatabase < ActiveRecord::Base
	WmsDatabase.establish_connection :mssql
	@data_connection = WmsDatabase.connection
	
	# get user data
	def self.users
		@data_connection.select_all("select * from TBLMUSER")
	end

	# get vendor data
	def self.vendors
		@data_connection.select_all("select * from TBLMVENDOR")
	end

	# get customer data
	def self.customers
		@data_connection.select_all("select * from TBLTCUSTOMER")
	end

	# get comapny data
	def self.companies
		@data_connection.select_all("select * from TBLMCOMPANY")
	end
end
