import React from 'react';
import Styles from "../CSS/Heading.module.css";


const Heading = () => {
  return (
    <div className={Styles.container}>
        
        <div className={Styles.heading}>
            <h1>Hello, Punnet Dhiman</h1>
            <h3>Following Is Your Organization's Performance Summary</h3>
        </div>
      
    </div>
  )
}

export default Heading
