import React from 'react';
import { Row, Col } from 'antd'
import 'antd/dist/antd.css';

import PlayerGame from './PlayerGame'
import HexGrid from './HexGrid'
import RollChart from './RollChart'
import ResourceChart from './ResourceChart'


const Game = ({game}) =>
  <div key={game.id}>
    <Row gutter={15}>
      <Col xs={24} sm={24} md={24} lg={6} xl={6} className="scores">
        <h3>Game {game.id}</h3>
        {game.player_games.map((pg) => {
          return(
            <PlayerGame player_game={pg} key={pg.id}/>
          )
        })}
      </Col>
      <Col xs={24} sm={8} md={8} lg={6} xl={6}><HexGrid layout={game.layout} /></Col>
      <Col xs={24} sm={8} md={8} lg={6} xl={6}><RollChart dice_rolls={game.dice_rolls} /></Col>
      <Col xs={24} sm={8} md={8} lg={6} xl={6}><ResourceChart expected_resources={game.expected_resources} /></Col>
    </Row>
  </div>


export default Game
