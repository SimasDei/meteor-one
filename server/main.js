import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(() => {
  Players.insert({
    name: 'Billy',
    score: 55
  });
  console.log({
    players: Players.find().fetch()
  });
});
