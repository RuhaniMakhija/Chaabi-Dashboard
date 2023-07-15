import React from 'react'
import Styles from "../CSS/Main.module.css";
import Heading from "../Components/Heading"
import SmallGraph from './SmallGraph';
import Group from "../images/Group.png";
import Group2 from "../images/Group2.png";
import BarChart from './BarChart';
import PieChart from './PieChart';
import CourseProgress from './CourseProgress';
import PieChartPercentage from './PieChartPercentage';
import ChatWise from './ChatWise';
import Training from './Training';


const MainComponent = () => {
  return (
    <div className={Styles.container}>
        <Heading/>
        <div className={Styles.main}>
          <div className={Styles.grid}>
              <SmallGraph 
                  title="In Training Workers"
                  total="3,354"
                  num="234"
                  img={Group}
                />
              <SmallGraph
                title="Video Watch-Time (Hrs)"
                  total="2,433"
                  num="435"
                  img={Group2}
              />
              <SmallGraph
                title="% Workers Passing Quiz"
                  total="95%"
                  num="24%"
                  img={Group}
              />
              <SmallGraph
                title="Avg. Days Taken"
                  total="6"
                  num="3"
                  img={Group}
              />
          </div>
          <div className={Styles.grid}>
            <ChatWise/>
            
        </div>
        <div>
          <Training/>
        </div>
        </div>
        
        
        {/* <BarChart/>
        <PieChart/>
        <CourseProgress/>
        <PieChartPercentage/> */}
        

        

       
    </div>
  )
}

export default MainComponent
