class AddFlagsToPlayerGames < ActiveRecord::Migration[5.2]
  def change
    add_column :player_games, :longest_road, :boolean, default: false
    add_column :player_games, :largest_army, :boolean, default: false
    add_column :player_games, :victory_point_cards, :integer, default: 0
  end
end
