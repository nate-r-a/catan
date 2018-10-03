class AddScoreToPlayerGames < ActiveRecord::Migration[5.2]
  def change
    add_column :player_games, :score, :integer
  end
end
