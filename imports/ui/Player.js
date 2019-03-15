import React, { Component } from 'react';
import Players from '../api/players';

export class Player extends Component {
  render() {
    const { player } = this.props;
    return (
      <div className="item">
        <div className="player">
          <div>
            <h3 className="player__name">{player.name}</h3>
            <p className="player__stats">Score: {player.score}</p>
          </div>
          <div className="player__actions">
            <button
              className="button button--round"
              onClick={() => Players.update(player._id, { $inc: { score: 1 } })}
            >
              +1
            </button>
            <button
              className="button button--round"
              onClick={() =>
                Players.update(player._id, { $inc: { score: -1 } })
              }
            >
              -1
            </button>
            <button
              className="button button--round"
              onClick={() => Players.remove({ _id: player._id })}
            >
              X
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Player;
