class AddNewContentBlock < ActiveRecord::Migration
  def up
  	add_column :contents, :secondary_content, :text
  end

  def down
  end
end
