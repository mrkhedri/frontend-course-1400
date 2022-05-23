import React from "react";
import { v4 as uuidv4 } from 'uuid';

const numbers = [1, 1, 2, 3, 4, 5];

class Numbers extends React.Component {
  render() {
    const listItems = numbers.map((number,index) => <li key={index}>{number}</li>)

    return <ul className="numbers-list">{listItems}</ul>;
  }
}

export default Numbers