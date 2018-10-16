class AddColorToPlayerGames < ActiveRecord::Migration[5.2]
  def change
    add_column :player_games, :color, :string
  end
end
