# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_19_034021) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "games", force: :cascade do |t|
    t.integer "dice_rolls", default: [], array: true
    t.integer "red_dice_rolls", default: [], array: true
    t.integer "yellow_dice_rolls", default: [], array: true
    t.string "barbarian_dice_rolls", default: [], array: true
    t.string "layout", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "phantom_sevens", default: 0
  end

  create_table "player_games", force: :cascade do |t|
    t.bigint "player_id"
    t.bigint "game_id"
    t.integer "position"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "score"
    t.integer "before_rating", default: 1000
    t.integer "after_rating", default: 1000
    t.boolean "longest_road", default: false
    t.boolean "largest_army", default: false
    t.integer "victory_point_cards", default: 0
    t.string "color"
    t.integer "wins_at_time"
    t.integer "games_played_at_time"
    t.boolean "win"
    t.index ["game_id"], name: "index_player_games_on_game_id"
    t.index ["player_id"], name: "index_player_games_on_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "wins"
    t.integer "games_played"
  end

  add_foreign_key "player_games", "games"
  add_foreign_key "player_games", "players"
end
