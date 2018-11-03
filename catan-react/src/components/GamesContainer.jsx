import React, { Component } from 'react';
import axios from 'axios'
import Game from './Game'
import { List } from 'antd'


class GamesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3002/api/v1/games/')
    .then(response => {
      console.log(response)
      this.setState({games: response.data})
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div>
        {this.state.games.map((game) => {
          return (
            <div className="game">
                <Game game={game} key={game.id} />
            </div>
          )
        })}
      </div>
    );
  }
}



export default GamesContainer
