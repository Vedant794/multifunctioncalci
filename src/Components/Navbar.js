import React from "react";

export default function Navbar(props) {
  return (
    <div>
      <nav className="bg-gray-400 h-16 flex items-center justify-between" style={{backgroundColor:props.mode==='light'?'rgba(156,163,175,1) ':'black',color:props.mode==='light'?'black':'white'}}>
        <div className="items-cont ml-4">
          <ul className="items flex space-x-7 items-center">
            <li className="section">
              <a href="/">Standard</a>
            </li>
            <li className="section">
              <a href="/">Scientific</a>
            </li>
            <li className="section">
              <a href="/">Programmer</a>
            </li>
            <li className="section">
              <a href="/">Date Calculation</a>
            </li>
            <li className="section">
              <a href="/">Converter</a>
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
