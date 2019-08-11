import React, { Component } from "react";
import "./RuleRow.css";

class RuleRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: true,
    };
  }

  disableRow = () => {
    this.setState({
      active: false,
    });
  };

  onClick = () => {
    this.disableRow();
    this.props.doScore();
  };

  render() {
    return (
      <tr
        className={`RuleRow ${
          this.state.active ? "RuleRow-active" : "RuleRow-disabled"
        }`}
        onClick={this.onClick}
      >
        <td className="RuleRow-name">{this.props.name}</td>
        <td className="RuleRow-score">{this.props.score}</td>
      </tr>
    );
  }
}

export default RuleRow;
