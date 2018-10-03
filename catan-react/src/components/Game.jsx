import React from 'react';
import PlayerGame from './PlayerGame'

const Game = ({game}) =>
  <div className="game" key={game.id}>
    <h3>Game {game.id}</h3>
    {game.player_games.map((pg) => {
      return(
        <PlayerGame player_game={pg} key={pg.id}/>
      )
    })}
  </div>


export default Game
