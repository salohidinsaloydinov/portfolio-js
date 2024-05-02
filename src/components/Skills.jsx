import React from 'react'
import { skills } from '../data'
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useInView} from "react-intersection-observer"


const Skills = () => {
  const {ref:mySkills, inView:MySkillsElement} =useInView()

  return (
    <>
    {skills.map(({title,percentage},index)=>{
        return(
            <div className="progress__box" key={index}>
                <div className={MySkillsElement ? "progress__circle Skills__anime" : "progress__circle"} ref={mySkills}>
                    <CircularProgressbar 
                    strokeWidth={7.5}
                    text={`${percentage}%`} 
                    value={percentage} />
                </div>
                <h3 className="skills__title">{title}</h3>
            </div>
        )
    })}
    </>
  )
}

export default Skills
