import { Meteor } from 'meteor/meteor';
import { Players } from '../imports/api/players';

Meteor.startup(() => {
  // Players.insert({
  //   name: 'Joey',
  //   score: 1
  // });
  console.log({
    players: Players.find().fetch()
  });
});
