class Content < ActiveRecord::Base
  attr_accessible :content, :name, :title, :layout_type, :background_color, :header_background_color, :header_font_color, :main_background_color, :font_color, :link_color, :image_to_main, :add_font_family, :secondary_content
end