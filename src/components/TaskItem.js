import React from "react";
import PropTypes from "prop-types";

export default function TaskItem(props) {


  return (
    <a href="#" className="list-group-item">
      <span className="badge">{props.tasks[0].date}</span>
      <i className="fa fa-fw fa-calendar" /> {props.tasks[0].task}
    </a>

  );
}

TaskItem.propTypes = {
  tasks: PropTypes.array.isRequired
}
