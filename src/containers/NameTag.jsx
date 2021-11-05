import React, { Component } from "react";
import Controls from "../components/name-tag/Controls";
import Display from "../components/name-tag/Display";

export default class NameTag extends Component {
  state = {
    greeting: "",
    name: "",
  };

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  render() {
    const { greeting, name } = this.state;
    return (
      <>
        <Controls
          handleChange={this.handleChange}
          greeting={greeting}
          name={name}
        />
        <Display greeting={greeting} name={name} />
      </>
    );
  }
}
