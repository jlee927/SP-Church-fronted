import "../assets/styles/navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Dropdown(props) {
   const linkNames = props.linkData || [{}];

   let links = linkNames.map((link, index) => {
      return (
         <NavLink className="navLink" key={index} to={link.routerLink}>
            {link.linkName}
         </NavLink>
      );
   });
   return (
      <div>
         <div className="dropdown">
            <button>
               {props.dropdownName} <i className="fa fa-caret-down"></i>
            </button>

            <div className="dropdown-content">{links}</div>
         </div>
      </div>
   );
}
