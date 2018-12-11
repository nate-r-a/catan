module Api
  module V1
    class GamesController < ApplicationController
      before_action :set_game, only: [:show, :update, :destroy]

      # GET /games
      def index
        # @games = Game.all.sort
        @games = [Game.first]

        # render json: @games, :include => [{ :player_games => { :except => [:created_at, :updated_at] }, ['player_games.players'] }]
        # render json: @games, include: :players

        render json: @games#, include: ['player_games.players']
      end

      # GET /games/1
      def show
        puts @game
        render json: @game, :include => { :player_games => { :except => [:created_at, :updated_at] } }
      end

      # POST /games
      def create
        puts "!!!"
        puts game_params
        puts game_params[:layout_string]
        game_params[:layout] = game_params.delete(:layout_string).scan(/../)
        puts "@@@@"
        puts game_params

        new_params = game_params.except(:layout_string)
        new_params[:layout] = game_params[:layout_string].scan(/../)

        @game = Game.new(new_params)

        if @game.save!
          render json: @game#, status: :created, location: @game
        else
          render json: @game.errors, status: :unprocessable_entity
        end
      end

      # PATCH/PUT /games/1
      def update
        if @game.update(game_params)
          render json: @game
        else
          render json: @game.errors, status: :unprocessable_entity
        end
      end

      # DELETE /games/1
      def destroy
        @game.destroy
      end

      private
        # Use callbacks to share common setup or constraints between actions.
        def set_game
          @game = Game.find(params[:id])
        end

        # Only allow a trusted parameter "white list" through.
        def game_params
          params.require(:game).permit(:dice_rolls, :layout, :layout_string, player_games_attributes: [:player_id, :game_id, :win, :score, :position, :largest_army, :longest_road, :victory_point_cards])
        end
    end
  end
end
