import React, { Component } from 'react';
import Player from './Player';

export class PlayerList extends Component {
  playerList = () => {
    if (this.props.players.length === 0) {
      return (
        <div className="item">
          <p className="item__message">No Current Players, Add some !</p>
        </div>
      );
    } else
      return this.props.players.map(player => (
        <Player key={player._id} player={player} />
      ));
  };

  render() {
    return this.playerList();
  }
}

export default PlayerList;
