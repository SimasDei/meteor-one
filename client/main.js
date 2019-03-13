import './main.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';

const players = [
  {
    _id: 1,
    name: 'Joe',
    score: 99
  },
  {
    _id: 2,
    name: 'Bob',
    score: -1
  },
  {
    _id: 3,
    name: 'Susan',
    score: -12
  }
];

const playerList = players =>
  players.map(player => (
    <li key={player._id}>
      Player: {player.name} Score: {player.score}
    </li>
  ));

Meteor.startup(() => {
  let jsx = (
    <div>
      <h1>Scorify</h1>
      <h3>Players</h3>
      <ul>{playerList(players)}</ul>
    </div>
  );
  ReactDOM.render(jsx, document.querySelector('#app'));
});
