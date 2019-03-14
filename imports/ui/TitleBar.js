import React from 'react';

class TitleBar extends React.Component {
  render() {
    const { title, subtitle } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        {subtitle ? <h3>{subtitle}</h3> : null}
      </div>
    );
  }
}

export default TitleBar;
