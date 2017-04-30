import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import store from "./store";

const {
dateTime,
newComments,
newTasks,
newOrders,
tickets,
orders,
taskItem,
tasks,
messages,
} = store;

ReactDOM.render(
  <App 
    taskItem={taskItem}
    dateTime={dateTime}
    newComments={newComments}
    newTasks={newTasks}
    newOrders={newOrders}
    tickets={tickets}
    orders={orders} 
    tasks={tasks}
    messages={messages}
    />,
  document.getElementById("root")
);
