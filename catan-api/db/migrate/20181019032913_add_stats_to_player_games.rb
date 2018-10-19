class AddStatsToPlayerGames < ActiveRecord::Migration[5.2]
  def change
    add_column :player_games, :wins_at_time, :integer
    add_column :player_games, :games_played_at_time, :integer
  end
end
