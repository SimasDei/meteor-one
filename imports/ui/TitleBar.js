import React from 'react';

class TitleBar extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div className="title-bar">
        <div className="wrapper">
          <h1>{title}</h1>
          {subtitle ? <h3>{subtitle}</h3> : null}
        </div>
      </div>
    );
  }
}

export default TitleBar;
