import React from 'react'
import PieChartPercentage from './PieChartPercentage'
import Styles from "../CSS/ChatWise.module.css";
import BarChart from './BarChart';


const ChatWise = () => {
  return (
    <div className={Styles.grid}>
        <div className={Styles.container}>
        <span className={Styles.heading}>Chapter Wise Status</span>
        <PieChartPercentage/>
        <div className={Styles.fulllist}>
        <ul>
            <li>Finished Training</li>
            <li>Chapter B</li>
            <li>Haven't Started Yet</li>
            
        </ul>
        <ul>
        <li>Chapter A</li>
            <li>Chapter C</li>
        </ul>
        </div>
        </div>


        <div className={Styles.containerr}>
            <span className={Styles.heading}>Last 14 Days Active Workers in Training</span>
            <span className={Styles.ml}>Last 14 days</span>
            <BarChart className={Styles.mt} />
            

        </div>
    </div>
    



  )
}

export default ChatWise
