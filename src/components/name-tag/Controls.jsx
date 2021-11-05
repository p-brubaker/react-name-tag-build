import React from "react";
import PropTypes from "prop-types";

function Controls(props) {
  const { greeting, name, handleChange } = props;
  return (
    <form>
      <label htmlFor="name">name</label>
      <input
        id="name"
        name="name"
        value={name}
        onChange={(e) => handleChange(e, "name")}
      />
      <label htmlFor="greeting">greeting</label>
      <input
        id="greeting"
        name="greeting"
        value={greeting}
        onChange={(e) => handleChange(e, "greeting")}
      />
    </form>
  );
}
Controls.propTypes = {
  greeting: PropTypes.string,
  name: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
};

export default Controls;
