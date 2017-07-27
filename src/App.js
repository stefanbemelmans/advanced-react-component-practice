import React from "react";
import TopNav from "./components/TopNav";
import SideNav from "./components/SideNav";
import Comments from "./components/Comments";

function App(props) {
 
  return (
    <div> 
      <div id="wrapper">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
          {/*   <TopNav>   */}
          <TopNav />
          {/*   </TopNav>   */}


          {/*   <SideNav>   */}
          <SideNav />
          {/*   </SideNav>   */}
        </nav>

        <div id="page-wrapper">

          <div className="container-fluid">

                
              <div className="row">
                  <div className="col-lg-12">
                      <h1 className="page-header">
                            Dashboard <small>Statistics Overview</small>
                        </h1>
                      <ol className="breadcrumb">
                          <li className="active">
                              <i className="fa fa-dashboard"></i> Dashboard
                            </li>
                        </ol>
                    </div>
                </div>
              <div className="row">

                  {/*   </Comments>   */}
                <Comments />
                  {/*   </Comments>   */}

                {/*   <Tasks>   */}
                  <div className="col-lg-3 col-md-6">
                      <div className="panel panel-green">
                          <div className="panel-heading">
                              <div className="row">
                                  <div className="col-xs-3">
                                      <i className="fa fa-tasks fa-5x"></i>
                                    </div>
                                  <div className="col-xs-9 text-right">
                                      <div className="huge">12</div>
                                      <div>New Tasks!</div>
                                    </div>
                                </div>
                            </div>
                          <a href="#">
                              <div className="panel-footer">
                                  <span className="pull-left">View Details</span>
                                  <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                  <div className="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                  {/*   </Tasks>   */}

                  {/*   <Orders>   */}
                  <div className="col-lg-3 col-md-6">
                      <div className="panel panel-yellow">
                          <div className="panel-heading">
                              <div className="row">
                                  <div className="col-xs-3">
                                      <i className="fa fa-shopping-cart fa-5x"></i>
                                    </div>
                                  <div className="col-xs-9 text-right">
                                      <div className="huge">124</div>
                                      <div>New Orders!</div>
                                    </div>
                                </div>
                            </div>
                          <a href="#">
                              <div className="panel-footer">
                                  <span className="pull-left">View Details</span>
                                  <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                  <div className="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                  {/*   </Orders>   */}


                  {/*   <Tickets>   */}
                  <div className="col-lg-3 col-md-6">
                      <div className="panel panel-red">
                          <div className="panel-heading">
                              <div className="row">
                                  <div className="col-xs-3">
                                      <i className="fa fa-support fa-5x"></i>
                                    </div>
                                  <div className="col-xs-9 text-right">
                                      <div className="huge">13</div>
                                      <div>Support Tickets!</div>
                                    </div>
                                </div>
                            </div>
                          <a href="#">
                              <div className="panel-footer">
                                  <span className="pull-left">View Details</span>
                                  <span className="pull-right"><i className="fa fa-arrow-circle-right"></i></span>
                                  <div className="clearfix"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                  {/*   </Tickets>   */}




                </div>
                
              {/*   <AreaChart>   */}
              <div className="row">
                  <div className="col-lg-12">
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h3 className="panel-title"><i className="fa fa-bar-chart-o fa-fw"></i> Area Chart</h3>
                            </div>
                          <div className="panel-body">
                              <div id="morris-area-chart"></div>
                            </div>
                        </div>
                    </div>
                </div>
              {/*   </AreaChart>   */}

              <div className="row">


                  {/*   <DonutChart>   */}
                  <div className="col-lg-4">
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h3 className="panel-title"><i className="fa fa-long-arrow-right fa-fw"></i> Donut Chart</h3>
                            </div>
                          <div className="panel-body">
                              <div id="morris-donut-chart"></div>
                              <div className="text-right">
                                  <a href="#">View Details <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                  {/*   </DonutChart>   */}


                  <div className="col-lg-4">
                      {/*   <TasksPanel>   */}
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h3 className="panel-title"><i className="fa fa-clock-o fa-fw"></i> Tasks Panel</h3>
                            </div>
                          <div className="panel-body">
                              <div className="list-group">
                                  {/*   <TaskItem>    */}
                                  <a href="#" className="list-group-item">
                                      <span className="badge">just now</span>
                                      <i className="fa fa-fw fa-calendar"></i> Calendar updated
                                    </a>
                                  {/*   </TaskItem>    */}
                                    
                                </div>
                              <div className="text-right">
                                  <a href="#">View All Activity <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
                      {/*   </TasksPanel>   */}


                    </div>
                  <div className="col-lg-4">


                      {/*   </TransactionsPanel>   */}
                      <div className="panel panel-default">
                          <div className="panel-heading">
                              <h3 className="panel-title"><i className="fa fa-money fa-fw"></i> Transactions Panel</h3>
                            </div>
                          <div className="panel-body">
                              <div className="table-responsive">
                                  <table className="table table-bordered table-hover table-striped">
                                      <thead>
                                          <tr>
                                              <th>Order #</th>
                                              <th>Order Date</th>
                                              <th>Order Time</th>
                                              <th>Amount (USD)</th>
                                            </tr>
                                        </thead>
                                      <tbody>
                                          {/*   <TransactionRow>   */}
                                          <tr>
                                              <td>3326</td>
                                              <td>10/21/2013</td>
                                              <td>3:29 PM</td>
                                              <td>$321.33</td>
                                            </tr>
                                          {/*   </TransactionRow>   */}
                                        </tbody>
                                    </table>
                                </div>
                              <div className="text-right">
                                  <a href="#">View All Transactions <i className="fa fa-arrow-circle-right"></i></a>
                                </div>
                            </div>
                        </div>
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
