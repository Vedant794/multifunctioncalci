import React from "react";
import {Link} from "react-router-dom"

export default function Navbar(props) {
  return (
    <div>
      <nav className="bg-gray-400 h-16 flex items-center justify-between" style={{backgroundColor:props.mode==='light'?'rgba(156,163,175,1) ':'black',color:props.mode==='light'?'black':'white'}}>
        <div className="items-cont ml-4">
          <ul className="items flex space-x-7 items-center">
            <li className="section">
              <Link to="/">Standard</Link>
            </li>
            <li className="section">
              <Link to="/scientific">Scientific</Link>
            </li>
            <li className="section">
              <Link to="/">Programmer</Link>
            </li>
            <li className="section">
              <Link to="/dateCalc">Date Calculation</Link>
            </li>
            <li className="section">
              <Link to="/">Converter</Link>
            </li>
          </ul>
        </div>
        <div className="form-check form-switch mr-5">
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {props.mode==='light'?'Dark':'Light'} Mode</label>
</div>
      </nav>
    </div>
  );
}
