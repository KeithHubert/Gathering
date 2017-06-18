import React from 'react';
import { Link } from 'react-router';
import CommentField from './CommentField'

class GameShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current_user: '',
      game: {},
      gameId: '',
      game: ''
    }
  }

  componentDidMount() {
    this.getUserData()
  }

  getUserData() {
    fetch(`/api/v1/users`, {credentials: 'same-origin'})
    .then(response => response.json())
    .then(responseData => {
      this.setState({
        current_user: responseData.current_user
      });
    });
  }

  handleUpdate(site) {
  let gameId = this.props.params.id;
  fetch(`/api/v1/games/${gameId}`, {
    method: "PUT",
    data: { game: game }
  })
}

handleDelete() {
  let gameId = this.props.params.id;
  fetch(`/api/v1/games/${gameId}`, {
    credentials: "same-origin",
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
  })
}

  render() {

  return(
  <div>
    <div className="row">

      <div className="columns small-12 site-tile">
        <h3 className= 'games-title'>{this.props.title}</h3>
        <p> {this.props.description} </p>

      </div>
    </div>

  <div className="game-show row">
    <div className='columns small-3 medium-3'>
      <h6> Title </h6>
      <ul>{this.props.title}</ul>
    </div>

    <div className='columns small-3 medium-3'>
      <h6> Format </h6>
      <ul>{this.props.gametype}</ul>
    </div>

    <div className='columns small-3 medium-3'>
      <h6> Time </h6>
      <ul>{this.props.time}</ul>
    </div>

    <div className='columns small-3 medium-3'>
      <h6> Date </h6>
      <ul>{this.props.date}</ul>
    </div>
  </div>

  <div className="game-show row">
    <div className='columns small-3 medium-3'>
      <h6> Address </h6>
      <ul>{this.props.address}</ul>
    </div>

    <div className='columns small-3 medium-3'>
      <h6> City </h6>
      <ul>{this.props.city}</ul>
    </div>

    <div className='columns small-3 medium-3'>
      <h6> Zip </h6>
      <ul>{this.props.zip}</ul>
    </div>

    <div className='columns small-3 medium-3'>
      <h6> Players </h6>
      <ul>{this.props.number_of_players}</ul>
    </div>
  </div>
  <div>

    <button type="button" onClick={this.props.handleDelete} id="delete-button">Delete Game</button>
  </div>

  <div className='row'>
    <form id={this.props.game_Id} onSubmit={this.props.handleSubmit}>
      <CommentField
        form = {this.props.user_id}
        user_id = {this.props.user_id}
        handlerFunction = {this.props.handlerFunction}
        handleFormClear = {this.props.handleFormClear}
        content = {this.props.comment_content}
      />
    </form>
  </div>
</div>

  )
  }
}

export default GameShow;
