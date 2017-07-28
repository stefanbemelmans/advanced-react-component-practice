import React from "react";
import PropTypes from "prop-types";

export default function TaskItem(props) {
  return (
    <a href="#" className="list-group-item">
      <span className="badge">just now</span>
      <i className="fa fa-fw fa-calendar" /> Calendar updated
    </a>

  );
}

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
}
