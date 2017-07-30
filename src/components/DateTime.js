import React from "react";

export default function DateTime(props) {
  return (
    <p className="small text-muted"><i className="fa fa-clock-o"></i>{props.date}</p>
  );


}