class AddRatingsToPlayerGames < ActiveRecord::Migration[5.2]
  def change
    add_column :player_games, :before_rating, :integer, default: 1000
    add_column :player_games, :after_rating, :integer, default: 1000
  end
end
