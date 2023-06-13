import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component{
    render(){
       return(
        <nav className="NavbarItems">
           <h1 className="navbar-logo">SkyScanner</h1>
           <ul className="nav-menu">
              {MenuItems.map((item, index) =>{
                return(
                    <li key={index}>
                       <a className={item.cname} href={item.url}>
                        <i className={item.icon}></i>{item.title}
                       </a>
                    </li>
                );
              })}
           </ul>
        </nav>
       );

    }
        
}

export default Navbar;