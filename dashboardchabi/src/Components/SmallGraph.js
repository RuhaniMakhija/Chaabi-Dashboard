import React from 'react'

import { HiOutlineTrendingUp } from "react-icons/hi";
import Styles from "../CSS/SmallGraph.module.css"

const SmallGraph = ({title,total,num,img}) => {
  return (
    <div className={Styles.container}>
       
        <div className={Styles.box}>
            <p>{title}</p>
            <div className={Styles.flexBig}>
                
                <div >
                    <div><h1 className={Styles.heading}>{total}</h1></div>
                    <div className={Styles.number}>
                        <div className={Styles.flex}><span className={Styles.borderGraph}><HiOutlineTrendingUp/></span>20%</div>
                        <div className={Styles.num}>{num}</div>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div>
                    <img src={img} alt='graph1'/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SmallGraph
