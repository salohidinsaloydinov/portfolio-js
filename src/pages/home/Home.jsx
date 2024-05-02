import React from 'react'
import Portfolio from "../../assets/gul.jpg"
import { Link } from 'react-router-dom'
import {FaArrowRight} from "react-icons/fa"
import {useInView} from "react-intersection-observer"
import './home.css'


const Home = () => {
  const {ref:myRef, inView:MyElement} =useInView()
  return (
    <div className="nav_container">
      <section className='home container'>
      <div  className={MyElement ? "img__left home__img" : "home__img"} ref={myRef}>
        <img src={Portfolio} alt="glavniy.jpg" />
      </div>
      <div className="home__container">
        <div className="home__data">
          <h1 className={MyElement ? "home__title title__right" : "home__title"} ref={myRef}>
            Salohidin Saloydinov.<br />
            <span>Front End</span><br />
            <span className="home__title-before"> Web Developer</span>
          </h1>

          <p className = {MyElement ? "home__description description__right" : "home__description rrrr"} ref={myRef}>
            Men hozirda Web texnologiyalarini chuqur o'rganib va doimiy ravishda o'z ustimda ishlab, yangi ko'nikmalarni o'rganmoqdaman. Shaxsiy loyihalar orqali tajribamni oshirishga harakat qilyabman.
           <br /> Hozirda ishlayotgan texnologiyalarim: JavaScript va uning React JS kutubxonasi.<br/>
            → Kuchli va tajribali Web Dasturchi bo'lish uchun bor kuchim bilan harakat qilyapman.
          </p>
          <Link to={'/about'} className='button'>
            Men haqimda ko'proq {''}
            <span className='button__icon' >
              <FaArrowRight/>
            </span>
          </Link>

        </div>
      </div>
    </section>
    </div>
  )
}

export default Home