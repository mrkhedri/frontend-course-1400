import React from 'react'

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    // console.log('constructor -> ', this.props.name)
  }

  // componentDidMount() {
  //   console.log('componentDidMount -> ', this.props.name)
  // }
  //
  // componentWillUnmount() {
  //   console.log('componentWillUnmount -> ', this.props.name)
  // }

  render() {
    return <div>Hello, {this.props.name}</div>;
  }
}

export default Welcome;
