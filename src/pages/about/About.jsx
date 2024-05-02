import React from 'react'
import Info from '../../components/Info'
import Stats from '../../components/Stats'
import Skills from '../../components/Skills'
import { resume } from '../../data'
import ResumeItem from '../../components/ResumeItem'
import {useInView} from "react-intersection-observer"

import "./about.css"



const About = () => {
  const {ref:myRef, inView:MyElement} =useInView()
  const {ref:myAnim, inView:Element} =useInView()
  const {ref:myItem, inView:ResumeAnim} =useInView()
  
  return (
    <div className="nav_container">

      <main className="section container">

        <section className="about">
          <h2 className={MyElement ? "title-left section__title" : "section__title"} ref={myRef}>
            Men <span>haqimda</span>
          </h2>

          <div className="about__container">
            <div className={MyElement ? "about__info-anim about__info" : "about__info"} ref={myRef}>
              <h3 className="section__subtitle subtitle__center">
                Front End Web Developer
              </h3>

              <ul className="info__list">
                <Info/>
              </ul>
            </div>

            <div className={MyElement ? "stats-anim stats" : "stats"} ref={myRef}>
              <Stats />
            </div>
          </div>
        </section>

        <div className="separator"></div>

        <section className='skills'>
          <h3 className='section__subtitle subtitle__center '>Mening mahoratim</h3>
          <div className={Element ? "skills__container-anim skills__container" : "skills__container"} ref={myAnim}>
            <Skills/>
          </div>
        </section>

        <div className="separator"></div>

        <h3 className='section__subtitle subtitle__center'>Tajriba & Ta'lim</h3>

        <div className="resume__container">

          <div className={ResumeAnim ? "resume__date resume__anim":"resume__date"} ref={myItem}>
            {resume.map((val)=>{
              if(val.category === 'experience'){
                return <ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>

          <div className={ResumeAnim ? "resume__date resume__anim":"resume__date"} ref={myItem}>
            {resume.map((val)=>{
              if(val.category === 'education'){
                return <ResumeItem key={val.id} {...val}/>
              }
            })}
          </div>

        </div>
      
      </main>
    </div>
  )
}

export default About
