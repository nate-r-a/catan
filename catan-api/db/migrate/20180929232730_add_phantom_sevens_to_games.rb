class AddPhantomSevensToGames < ActiveRecord::Migration[5.2]
  def change
    add_column :games, :phantom_sevens, :integer, default: 0
  end
end
