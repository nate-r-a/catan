import React from 'react';

const PlayerGame = ({player_game}) =>
  <h4>
    {player_game.player_name}
    <span>{player_game.score}</span>
  </h4>

export default PlayerGame
