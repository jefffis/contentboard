class AddFontFamily < ActiveRecord::Migration
  def up
  	add_column :contents, :add_font_family, :string
  end

  def down
  end
end
