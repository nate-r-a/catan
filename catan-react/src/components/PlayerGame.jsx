import React from 'react';

const PlayerGame = ({player_game}) =>
  <h6>
    {player_game.player_name}
    <span>{player_game.score}</span>
  </h6>

export default PlayerGame
