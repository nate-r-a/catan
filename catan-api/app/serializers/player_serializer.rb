class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :rating, :wins, :games_played
  has_many :player_games
end
