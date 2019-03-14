import React, { Component } from 'react';

import Players from '../api/players';

export class AddPlayer extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let playerName = e.target.playerName.value;
    if (playerName) {
      e.target.playerName.value = '';
      Players.insert({
        name: playerName,
        score: 0
      });
    }
  };

  render() {
    return (
      <div className="item">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="playerName" placeholder="Player Name" />
          <button>Add Player</button>
        </form>
      </div>
    );
  }
}

export default AddPlayer;
