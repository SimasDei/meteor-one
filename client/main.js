import './main.html';
import React from 'react';
import ReactDOM from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';

import Players from '../imports/api/players';

import TitleBar from '../imports/ui/TitleBar';
import AddPlayer from '../imports/ui/AddPlayer';
import PlayerList from '../imports/ui/PlayerList';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let players = Players.find().fetch();

    let jsx = (
      <div>
        <TitleBar title="Scorify" subtitle="Players" />
        <PlayerList players={players} />
        <AddPlayer />
      </div>
    );
    ReactDOM.render(jsx, document.querySelector('#app'));
  });
});
