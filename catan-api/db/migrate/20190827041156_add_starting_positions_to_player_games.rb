class AddStartingPositionsToPlayerGames < ActiveRecord::Migration[5.2]
  def change
    add_column :player_games, :starting_positionsm, :string, array: true, default: []
  end
end
