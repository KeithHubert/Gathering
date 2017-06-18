import React, { Component } from 'react'
import GameTile from '../components/GameTile';
import NewGameFormContainer from './NewGameFormContainer';


class GameIndexContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      games: []
    }

    this.addNewGame = this.addNewGame.bind(this)
  }

    loadGamesFromServer() {
      fetch('api/v1/games')
      .then(response => response.json())
      .then(body => {
      this.setState({ games: body })
    })
  }

  componentDidMount() {
    this.loadGamesFromServer();
    // setInterval(this.loadGamesFromServer.bind(this), this.props.pollInterval);
  }

  addNewGame(formPayload) {

  fetch('/api/v1/games', {
    method: 'POST',
    body: JSON.stringify(formPayload)
  })
  .then(response => response.json())
  .then(responseData => {
    this.setState({ games: [...this.state.games, responseData] })
  })
}

  render() {
      let games = this.state.games.map (game => {
        return(
          <GameTile
            key={game.id}
            id={game.id}
            title={game.title}
            gametype = {game.gametype}
            city = {game.city}
          />
        )
      })

      return (
        <div className="game-tile-outer">
          <div className="game-tile-inner">
            <h4>Recently Added</h4>
            {games}
            <hr />
          </div>
        </div>
      )
    }
  }

export default GameIndexContainer;
