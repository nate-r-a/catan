import React from 'react';
import PlayerGame from './PlayerGame'
import HexGrid from './HexGrid'


const Game = ({game}) =>
  <div className="game" key={game.id}>
    <h3>Game {game.id}</h3>
    {game.player_games.map((pg) => {
      return(
        <PlayerGame player_game={pg} key={pg.id}/>
      )
    })}
    <HexGrid layout={game.layout} />
  </div>


export default Game
