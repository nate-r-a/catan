import React from 'react';
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';

import PlayerGames from './PlayerGames'
import HexGrid from './HexGrid'
import BlankHexGrid from './BlankHexGrid'
import RollChart from './RollChart'
import ResourceChart from './ResourceChart'


const Game = ({game}) =>
  <div key={game.id}>
    <Row gutter={5}>
      <Row>{"Game" + game.id}</Row>
      <Col xs={12} sm={24} md={24} lg={6} xl={6} className="scores">
        <PlayerGames player_games={game.player_games} className />
      </Col>
      <Col xs={12} sm={8} md={8} lg={6} xl={6}>
        <HexGrid layout={game.layout} />
      </Col>
      <Col xs={12} sm={8} md={8} lg={6} xl={6}>
        <RollChart
          dice_rolls={game.dice_rolls}
          rolls_by_player={game.rolls_by_player}
          phantom_sevens={game.phantom_sevens} />
      </Col>
      <Col xs={12} sm={8} md={8} lg={6} xl={6}><ResourceChart expected_resources={game.expected_resources} /></Col>
    </Row>
  </div>

export default Game
