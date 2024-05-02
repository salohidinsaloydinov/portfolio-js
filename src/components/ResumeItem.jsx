import React from 'react'
import parse from 'html-react-parser'
import {useInView} from "react-intersection-observer"



const ResumeItem = ({icon, year, title, desc}) => {

  const {ref:itemAnim, inView:myAnim} =useInView()

  return (
    <div className={myAnim ? 'resume__item resume__item-anim': "resume__item"} ref={itemAnim}>
        <div className="resume__icon">{icon}</div>
        <span className="resume__date">{year}</span>
        <h3 className="resume__subtitle">{parse(title)}</h3>
        <p className="resume__description">{desc}</p>
    </div>
  )
}

export default ResumeItem
