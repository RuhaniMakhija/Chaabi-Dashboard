import React from 'react'
// import "../App.css"
import { SideBarData } from './SideBarData'
import logo from "../images/logo.png";
import Styles from "../CSS/SideBar.module.css";

const SideBar = () => {
  return (
    <div className={Styles.sidebar}>
        <div className={Styles.logo}>
            <img src={logo} alt='logo'/>
        </div>
        <ul  className={Styles.sidebarlist}>
        {SideBarData.map((val,key)=>{
            return <li key={key} className={Styles.row}>
                {" "}
                <div className={Styles.icon}>{val.icon}</div>
                {" "}
                <div className={Styles.title}>{val.title}</div>
            </li>
        })}
        </ul>
    </div>
  )
}

export default SideBar
