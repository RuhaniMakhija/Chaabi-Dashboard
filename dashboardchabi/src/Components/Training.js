import React from 'react'
import Styles from '../CSS/Training.module.css'
import { BiUpArrowAlt,BiCircle } from "react-icons/bi";
import { FaCircle } from "react-icons/fa";
import PieChart from './PieChart';
import TrainingChart from './TrainingChart';

const Training = () => {
  return (
    <div>
        <div className={Styles.grid}>
            <div className={Styles.colone}>
                <span className={Styles.heading}>Monthly Training Activity</span>
                <p className={Styles.light}><BiUpArrowAlt className={Styles.icon}/> 16% more enrollees this month </p>
                <span className={Styles.bold}><BiCircle className={Styles.icons}/> course a</span><br/>
                <span className={Styles.margingrey}>23 workers took this course this week</span>
                <br/>
                <br/>
                <span className={Styles.bold}><BiCircle className={Styles.icons}/> course b</span><br/>
                <span className={Styles.margingrey}>253 workers took this course this week</span>
                <br/>
                <br/>
                <span className={Styles.bold}><BiCircle className={Styles.icons}/> course c</span><br/>
                <span className={Styles.margingrey}>253 workers took this course this week</span>
                <br/>
                <br/>
                <span className={Styles.bold}><BiCircle className={Styles.icons}/> course d</span><br/>
                <span className={Styles.margingrey}>253 workers took this course this week</span>
            </div>


            <div className={Styles.coltwo}>
                <span className={Styles.heading}>Quiz Passing %</span>

                <div className={Styles.flex} >
                        <div style={{width:"50%"}}>
                        <PieChart/>
                        </div>

                        <div className={Styles.margintop}>
                            <span className={Styles.bold}><FaCircle className={Styles.green}/> passed</span><br/>
                            <span className={Styles.margingrey}>1423 Workers</span>
                            <br/>
                            <br/>
                            <span className={Styles.bold}><FaCircle className={Styles.red}/>failed</span><br/>
                            <span className={Styles.margingrey}>134 Workers</span>
                        </div>
                </div>

            </div>

            <div className={Styles.coltwo}>
                    <span className={Styles.heading}>Daily Training Completions    </span>
                    <span className={Styles.heading}>Last 7 Days</span>
                    <TrainingChart/>

            
            </div>
        </div>
    </div>
  )
}

export default Training
