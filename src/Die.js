import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = {
    numberWords: ["one", "two", "three", "four", "five", "six"],
  };
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    const { numberWords, val, locked, disabled } = this.props;
    const classes = `${locked ? "Die-locked" : "Die"} fas fa-dice-${
      numberWords[val - 1]
    } fa-5x `;
    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    );
  }
}

export default Die;
