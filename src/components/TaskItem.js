import React from "react";
import PropTypes from "prop-types";

export default function TaskItem(props) {


  return (
    <a href="#" className="list-group-item">
      <span className="badge">{props.date}</span>
      <i className="fa fa-fw fa-calendar" /> {props.task}
    </a>

  );
}

// TaskItem.propTypes = {
//   task: PropTypes.isRequired
// }
