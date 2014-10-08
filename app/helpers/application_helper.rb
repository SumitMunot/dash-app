module ApplicationHelper
	def is_active?(controller="", action="")
  	"active" if (params[:controller] == controller) && (params[:action] == action)
	end
end
