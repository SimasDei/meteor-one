import React, { Component } from 'react';
import Players from '../api/players';

export class Player extends Component {
  render() {
    const { player } = this.props;
    return (
      <li>
        Player: {player.name} Score: {player.score}
        <span style={{ marginLeft: '20px' }}>
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
        </span>
      </li>
    );
  }
}

export default Player;
