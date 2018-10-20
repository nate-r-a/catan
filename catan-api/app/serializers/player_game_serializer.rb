class PlayerGameSerializer < ActiveModel::Serializer
  attributes :id, :score, :player_name, :before_rating, :after_rating, :color, :position

  belongs_to :player
  belongs_to :game
end
