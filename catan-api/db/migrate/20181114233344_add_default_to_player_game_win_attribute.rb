class AddDefaultToPlayerGameWinAttribute < ActiveRecord::Migration[5.2]
  def change
    change_column :player_games, :win, :boolean, default: false
  end
end
