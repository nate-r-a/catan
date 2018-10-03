class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating
  has_many :player_games
end
