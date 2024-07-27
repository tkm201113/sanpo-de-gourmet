class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  validates :name, presence: true
  validates :email, presence: true, uniqueness: { message: "このメールアドレスはすでに使用されています" }

  has_many :reviews, dependent: :destroy
end