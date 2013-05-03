class AddCssUpdates < ActiveRecord::Migration
  def up
  	add_column :contents, :background_color, :string
  	add_column :contents, :header_background_color, :string
  	add_column :contents, :header_font_color, :string
  	add_column :contents, :main_background_color, :string
  	add_column :contents, :font_color, :string
  	add_column :contents, :link_color, :string
  	add_column :contents, :image_to_main, :boolean
  end

  def down
  end
end
