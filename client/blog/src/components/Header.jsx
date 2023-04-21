import React from "react";
import './header.css'


const Header = () => {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Forum</span>
      </div>
      <img
        src="/assets/headerpic.jpg"
        alt=""
        className="headerImg"
      />
    </div>
  );
}

export default Header