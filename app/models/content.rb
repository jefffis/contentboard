class Content < ActiveRecord::Base

	before_create :generate_unique_string
	
	def generate_unique_string
		self.unique_string = SecureRandom.urlsafe_base64(6, padding=false)
	end

	def to_param
		self.unique_string
	end

	attr_accessible :content, :name, :title, :layout_type, :background_color, :header_background_color, :header_font_color, :main_background_color, :font_color, :link_color, :image_to_main, :add_font_family, :secondary_content, :unique_string, :body_font_family

end