import React from "react";
import PropTypes from "prop-types"
export default function TransRow(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.orderDate}</td>
      <td>{props.orderTime}</td>
      <td>{props.amount}</td>
    </tr>

  );


}

TransRow.propTypes = {
id: PropTypes.number.isRequired,
orderDate: PropTypes.string.isRequired,
orderTime: PropTypes.string.isRequired,
}
