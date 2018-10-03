class CreateGames < ActiveRecord::Migration[5.2]
  def change
    create_table :games do |t|
      t.integer :dice_rolls,            array: true, default: []
      t.integer :red_dice_rolls,        array: true, default: []
      t.integer :yellow_dice_rolls,     array: true, default: []
      t.string :barbarian_dice_rolls,   array: true, default: []
      
      t.string :layout, array: true, default: []

      t.timestamps
    end
  end
end
