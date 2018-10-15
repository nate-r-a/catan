import React from 'react'
import { Avatar } from 'antd'

const PlayerGame = ({player_game}) =>
  <h6>
    <Avatar>{player_game.player_name}</Avatar>
    <span>{player_game.score}</span>
  </h6>

export default PlayerGame
