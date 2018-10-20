class AddStatsToPlayers < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :wins, :integer
    add_column :players, :games_played, :integer
  end
end
