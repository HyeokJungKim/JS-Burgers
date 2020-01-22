class BurgerOrderSerializer < ActiveModel::Serializer
  attributes :id
  has_many :burgers
end
