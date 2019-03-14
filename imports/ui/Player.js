import React, { Component } from 'react';
import Players from '../api/players';

export class Player extends Component {
  render() {
    const { player } = this.props;
    return (
      <div className="item">
        <p>
          Player: {player.name} Score: {player.score}
        </p>
        <button
          onClick={() => Players.update(player._id, { $inc: { score: 1 } })}
        >
          +
        </button>
        <button
          onClick={() => Players.update(player._id, { $inc: { score: -1 } })}
        >
          -
        </button>
        <button onClick={() => Players.remove({ _id: player._id })}>X</button>
      </div>
    );
  }
}

export default Player;
