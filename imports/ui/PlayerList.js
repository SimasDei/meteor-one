import React, { Component } from 'react';
import Player from './Player';

export class PlayerList extends Component {
  playerList = () =>
    this.props.players.map(player => (
      <Player key={player._id} player={player} />
    ));

  render() {
    return <ul>{this.playerList()}</ul>;
  }
}

export default PlayerList;
