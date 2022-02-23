class Song < ApplicationRecord
  has_many :favorites
  has_many :users, through: :favorites
  belongs_to :user
  validates :lyrics, uniqueness: true
end
