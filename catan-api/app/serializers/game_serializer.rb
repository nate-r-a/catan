class GameSerializer < ActiveModel::Serializer
  # TODO: Uncomment these when forms are figured out
  attributes :id, :dice_rolls, :barbarian_dice_rolls, :red_dice_rolls, :yellow_dice_rolls, :rolls_by_player, :layout, :phantom_sevens #, :number, :expected_resources

  has_many :player_games
  has_many :players
end
