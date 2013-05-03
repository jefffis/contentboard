class Content < ActiveRecord::Base
  attr_accessible :content, :name, :title, :layout_type
end