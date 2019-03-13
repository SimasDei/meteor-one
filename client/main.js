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

Meteor.startup(() => {
  const name = 'Simas';
  let jsx = (
    <div>
      <h1>Scorify</h1>
      <p>Lol {name}</p>
      {[<p>1</p>, <p>2</p>]}
    </div>
  );
  ReactDOM.render(jsx, document.querySelector('#app'));
});
