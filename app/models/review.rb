class Review < ApplicationRecord
  belongs_to :user

  validates :name, presence: true
  validates :rating, presence: true, numericality: { only_integer: true, greater_than: 0, less_than_or_equal_to: 5 }
  validates :review, presence: true
  validates :service, presence: true
  validates :price, presence: true
  validates :atmosphere, presence: true
  validates :store_name, presence: true
end