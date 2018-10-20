class Game < ApplicationRecord
  has_many :player_games, -> { order(:position) }
  has_many :players, through: :player_games

  NUMBER_TILES = [5,2,6,3,8,10,9,12,11,4,8,10,9,4,5,6,3,11].freeze
  RESOURCES = %w[wo sh wh br st]
  RESOURCE_NAMES = {
    wo: "Wood",
    sh: "Sheep",
    wh: "Wheat",
    br: "Brick",
    st: "Stone"
  }

  # def initialize
  #   @errors = ActiveModel::Errors.new(self)
  # end

  # attr_accessor :rolls

  validate :validate_dice_rolls, :validate_barbarian_rolls

  def rolls
    dice_rolls
  end

  def validate_dice_rolls
    if dice_rolls.any? { |r| !(2..12).include?(r) }
      errors.add(:invalid_roll, message: "All dice rolls must be between 2 and 12")
    end
  end

  def validate_barbarian_rolls
    if barbarian_dice_rolls.any? { |r| !%w[s y b g].include?(r) }
      errors.add(:invalid_roll, message: "All barbarian rolls must be between 1 and 4")
    end
  end

  def rolls_by_player
    pgs = player_games.sort_by(&:position)
    dice_rolls_by_player = []
    pgs.each.with_index do |pg, i|
      rolls = (i..dice_rolls.count).step(pgs.count).map { |r| dice_rolls[r] }.compact
      dice_rolls_by_player.append({ name: pg.player.name, rolls: rolls })
    end

    dice_rolls_by_player
  end

  def expected_resources
    number_tiles = NUMBER_TILES.dup
    desert_index = layout.index("de")
    number_tiles.insert(desert_index, 7)

    resource_counts = {}
    RESOURCES.each do |resource|
      # Grabs indexes of resource tiles to compare to corresponding number tiles
      resource_indexes = layout.each_index.select { |i| layout[i] == resource }

      resource_numbers = []
      resource_indexes.each do |ri|
        # Numbers that have that resource
        resource_numbers << number_tiles[ri]
      end



      resource_counts[resource] = 0
      dice_rolls.each do |roll|
        resource_counts[resource] += resource_numbers.count(roll)
      end
    end
    # puts resource_counts
    # resource_counts

    data = []
    puts "!!!!!!!!!!!!!!!"
    puts resource_counts
    resource_counts.each do |resource_name, value|
      puts resource_name
      puts RESOURCE_NAMES[resource_name.to_sym]
      data.push({resource_name: RESOURCE_NAMES[resource_name.to_sym], value: value})
    end
    puts data
    data
  end
end
