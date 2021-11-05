import React from "react";
import PropTypes from "prop-types";

function Display({ name, greeting }) {
  return <h1>{`${greeting} ${name}`}</h1>;
}

Display.propTypes = {
  name: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
};

export default Display;
