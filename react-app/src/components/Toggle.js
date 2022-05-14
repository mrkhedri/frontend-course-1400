import React from "react";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    const { isToggleOn } = this.state

    if (!isToggleOn) return null

    return (
      <button onClick={this.handleClick}>
        {isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle