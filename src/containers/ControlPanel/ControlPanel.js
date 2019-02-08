import React, { Component } from 'react';

import Button from '../../components/Button/Button';

class ControlPanel extends Component {
  render() {
    return (
      <div>
        {this.props.buttons.map((button, index) => <Button key={index} clicked={this.props.clicked}>{button}</Button>)}
      </div>
    );
  }
}

export default ControlPanel;
