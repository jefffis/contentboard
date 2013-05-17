class AddBodyFontFamily < ActiveRecord::Migration
  def up
  	add_column :contents, :body_font_family, :string
  end

  def down
  end
end
