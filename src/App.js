import React from "react";
import Navs from "./components/Navs";
import Comments from "./components/Comments";
import Tasks from "./components/Tasks";
import Orders from "./components/Orders";
import DashBoard from "./components/DashBoard";
import Tickets from "./components/Tickets";
import AreaChart from "./components/AreaChart";
import DonutChart from "./components/DonutChart";
import TaskPanel from "./components/TaskPanel";
import TransPanel from "./components/TransPanel";
import PropTypes from "prop-types";
function App(props) {

  return (
    <div>
      <div id="wrapper">
        <Navs />

        <div id="page-wrapper">

          <div className="container-fluid">

            <DashBoard />

            <div className="row">

              {/*   </Comments>   */}
              <Comments newComments={props.newComments} />
              {/*   </Comments>   */}

              {/*   <Tasks>   */}
              <Tasks newTasks={props.newTasks} />
              {/*   </Tasks>   */}

              {/*   <Orders>   */}
              <Orders newOrders={props.newOrders} />
              {/*   </Orders>   */}


              {/*   <Tickets>   */}
              <Tickets tickets={props.tickets} />
              {/*   </Tickets>   */}




            </div>

            {/*   <AreaChart>   */}
            <AreaChart />
            {/*   </AreaChart>   */}

            <div className="row">


              {/*   <DonutChart>   */}
              <DonutChart />
              {/*   </DonutChart>   */}


              <div className="col-lg-4">
                {/*   <TasksPanel>   */}
                <TaskPanel tasks={props.tasks} />
                {/*   </TasksPanel>   */}


              </div>
              <div className="col-lg-4">


                {/*   </TransactionsPanel>   */}
                <TransPanel />
                {/*   </TransactionsPanel>   */}

              </div>
            </div>


          </div>


        </div>


      </div>
    </div>

  );
}

App.propTypes = {
  
  newComments: PropTypes.number,
  newTasks: PropTypes.number,
  newOrders: PropTypes.number,
  tickets: PropTypes.number,
  taskItem: PropTypes.string,
  tasks: PropTypes.array,
  messages: PropTypes.array,
  orders: PropTypes.array

};

export default App;
