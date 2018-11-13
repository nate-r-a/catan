class AddStatsToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :wins, :integer, default: 0
    add_column :players, :games_played, :integer, default: 0
  end
end
