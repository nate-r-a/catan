%w[Alpaca Bear Cat Dog Elephant Ferret].each do |name|
  Player.create(name: name)
end

# 10.times do
#   game = Game.create
#   player_count = rand(3..6)
#   all_players = Player.all.shuffle
#   player_count.times do |i|
#     PlayerGame.create(game: game, player: all_players.delete_at(0), position: i+1)
#   end
# end


### Real game stats
## Game 1
dice_rolls = [11,6,5,9,6,8,12,10,6,6,8,7,11,6,8,8,12,10,8,2,5,8,7,9,11,6,4,7,8,10,4,6,7,5,7,4,11,7,9,7,8,8,6,7,9,6,2,11,11,7,7,5,8,8,12,7,11,7,3,10,5,6]

# "s" = Ship (barbiarians)
barb_rolls = %w[g g s y s b y y s s s g g g y g g b g s s y g s s s s s y s g y s s s g g s s s y y s y b b b g g s y g s s b y]

layout = %w[br st sh wh br de br sh wo st wo wo sh st sh wh wh wh wo]

game = Game.create(dice_rolls: dice_rolls, barbarian_dice_rolls: barb_rolls, layout: layout)

PlayerGame.create(player: Player.first, score: 9, position: 1, game: game, win: false)
PlayerGame.create(player: Player.second, score: 13, position: 2, game: game, win: true)
PlayerGame.create(player: Player.third, score: 10, position: 3, game: game, win: false)

## Game 2
dice_rolls = [11,6,7,3,6,11,10,5,11,6,8,5,6,5,6,3,6,8,2,6,5,11,4,8,3,8,11,6,11,10,6]

layout = %w[sh br wo sh br wo de wh st st st wh sh wo sh wo wh br wh]

game = Game.create(dice_rolls: dice_rolls, phantom_sevens: 2, layout: layout)

PlayerGame.create(player: Player.first, score: 10, position: 1, game: game, win: true)
PlayerGame.create(player: Player.second, score: 4, position: 2, game: game, win: false)
PlayerGame.create(player: Player.third, score: 4, position: 3, game: game, win: false)
