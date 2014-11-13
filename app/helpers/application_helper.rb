module ApplicationHelper
	def is_active(controller, action)
	 	begin
	 		"active" if (params[:controller] == controller) && (params[:action] == action) 
	 	rescue
	 		""
	 	end
	end

	def parse_json(json)
		@data_provider = Array.new
		hash = {}
		begin
			if json["graph_date"]
				json["graph_date"].each do |data|
					hash[:year] = data.keys
					hash.merge(data.values)
				end
			end
		rescue Exception => e
			return e
		end
	end
end
