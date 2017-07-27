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
              <Comments />
              {/*   </Comments>   */}

              {/*   <Tasks>   */}
              <Tasks />
              {/*   </Tasks>   */}

              {/*   <Orders>   */}
              <Orders /> 
              {/*   </Orders>   */}


              {/*   <Tickets>   */}
              <Tickets />
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
                <TaskPanel />
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

};

export default App;
