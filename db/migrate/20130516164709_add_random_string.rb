class AddRandomString < ActiveRecord::Migration
  def up
  	add_column :contents, :unique_string, :string
  end

  def down
  end
end
