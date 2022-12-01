class Contact < ApplicationRecord
  belongs_to :user
  
  accepts_nested_attributes_for :user

  validates :message, length: { maximum: 500 }
end
