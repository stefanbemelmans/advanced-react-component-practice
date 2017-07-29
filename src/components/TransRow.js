import React from "react";
import PropTypes from "prop-types"
export default function TransRow(props) {
  return (
    <tr>
      <td>{props.order.id}</td>
      <td>{props.order.orderDate}</td>
      <td>{props.order.orderTime}</td>
      <td>{props.order.amount}</td>
    </tr>

  );


}

TransRow.propTypes = {
  order: PropTypes.object.isRequired
}
