class PlayerGame < ApplicationRecord
  belongs_to :player
  belongs_to :game

  validates :position, inclusion: 1..6

  def player_name
    player.name
  end
end
