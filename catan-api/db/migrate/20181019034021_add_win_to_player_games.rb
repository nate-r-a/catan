class AddWinToPlayerGames < ActiveRecord::Migration[5.2]
  def change
    add_column :player_games, :win, :boolean
  end
end
