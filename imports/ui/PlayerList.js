import React, { Component } from 'react';
import Player from './Player';

export class PlayerList extends Component {
  playerList = () => {
    if (this.props.players.length === 0) {
      return <p>No Current Players</p>;
    } else
      return this.props.players.map(player => (
        <Player key={player._id} player={player} />
      ));
  };

  render() {
    return <ul>{this.playerList()}</ul>;
  }
}

export default PlayerList;
