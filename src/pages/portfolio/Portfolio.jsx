import React from 'react'
import { portfolio } from '../../data'
import './portfolio.css'
import { Link } from 'react-router-dom'
import {useInView} from "react-intersection-observer"
import { motion } from 'framer-motion'


const Portfolio = () => {
  const {ref:myRef, inView:MyElement} =useInView()

  return (
    <div className="nav_container">
      <section className="portfolio section">
        <h2 className = {MyElement ? "title-left section__title" : "section__title"} ref={myRef}><span >Portfolio</span></h2>
        <div className="poftfolio__container container">
          {portfolio.map((item)=>{
            return(
              <div key={item.id}>
              <motion.div className='portfolio__item' 
              animate={{
                x: [0, 0, 0, 0],
                y: [0, 0, 0, 0],
                scale: [1, 1.2, 1.4, 1, 1],
                rotate: [0, 0, 18, -18, 0],
                transition: {
                  duration: 2,
                },
              }}>
                <Link to={item.app} target="_blank"><img src={item.img} alt="" className="portfolio__img" /></Link>
              </motion.div>
                <div className="portfolio__hover">
                    <h3 className="portfolio__title">{item.title}</h3>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}

export default Portfolio
