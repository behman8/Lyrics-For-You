class User < ApplicationRecord
    has_secure_password
    has_many :songs
    has_many :favorites
    has_many :songs, through: :favorites
    valitdates :username, presence: true, length: { minimum: 5 }, uniqueness: true
end
