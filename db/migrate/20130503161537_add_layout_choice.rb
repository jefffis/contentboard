class AddLayoutChoice < ActiveRecord::Migration
  def up
  	add_column :contents, :layout_type, :boolean
  end

  def down
  end
end
