class GameSerializer < ActiveModel::Serializer
  attributes :id, :dice_rolls, :barbarian_dice_rolls, :red_dice_rolls, :yellow_dice_rolls, :rolls_by_player, :expected_resources, :layout

  has_many :player_games
end
