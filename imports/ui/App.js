import React, { Component } from 'react';
import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

export class App extends Component {
  render() {
    const { players } = this.props;
    return (
      <div>
        <TitleBar title="Scorify" subtitle="First Meteor App" />
        <div className="wrapper">
          <PlayerList players={players} />
          <AddPlayer />
        </div>
      </div>
    );
  }
}

export default App;
