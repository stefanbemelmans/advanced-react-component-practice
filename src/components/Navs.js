import React from "react";
import TopNav from "./TopNav";
import SideNav from "./SideNav";

export default function Navs(props){
  return (
    <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
      {/*   <TopNav>   */}
      <TopNav messages={props.messages} />
      {/*   </TopNav>   */}


      {/*   <SideNav>   */}
      <SideNav />
      {/*   </SideNav>   */}
    </nav>

  );

}
