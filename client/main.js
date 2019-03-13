import './main.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import { Players } from '../imports/api/players';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();

    const playerList = players =>
      players.map(player => (
        <li key={player._id}>
          Player: {player.name} Score: {player.score}
        </li>
      ));

    let jsx = (
      <div>
        <h1>Scorify</h1>
        <h3>Players</h3>
        <ul>{playerList(players)}</ul>
      </div>
    );
    ReactDOM.render(jsx, document.querySelector('#app'));
  });
});
