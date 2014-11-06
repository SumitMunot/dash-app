module ApplicationHelper
	def is_active(controller, action)
	 	begin
	 		"active" if (params[:controller] == controller) && (params[:action] == action) 
	 	rescue
	 		""
	 	end
	end
end
