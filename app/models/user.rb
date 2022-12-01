class User < ApplicationRecord
    has_many :contacts, dependent: :destroy

    validates :email, presence: true, uniqueness: true
    validates :name, presence: true
end
