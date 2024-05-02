import React from 'react'
import { FaEnvelopeOpen,FaPhoneSquareAlt ,FaTelegram, FaFacebookF,FaGithub,FaYoutube} from 'react-icons/fa'
import { FiSend } from 'react-icons/fi'
import './contact.css'
import {useInView} from "react-intersection-observer"


const Contact = () => {
  const {ref:myRef, inView:MyElement} =useInView()
  const {ref:myLinkAnim, inView:MyElem} =useInView()

  return (
    <div className="nav_container">
      <section className='contact section'>
      <h2 className={MyElement ? "title-left section__title" : "section__title"} ref={myRef}>
        Aloqa <span>qiling</span>
      </h2>
      <div className="contact__container container">
        <div className="contact__data">
          <h3 className={MyElem ? "contact__title contact__title-anim":"contact__title"} ref={myLinkAnim}>Ma'lumot uchun!</h3>
          <div className={MyElem ? "contact__info contact__info-anim":"contact__info"} ref={myLinkAnim}>
            <div className="info__item">
              <FaEnvelopeOpen className='info__icon'/>
              <div>
                <span className="info__title">Mening elektron pochtam</span>
                <h4 className="info__desc">thesalohidin@gmail.com</h4>
              </div>
            </div>
            <div className="info__item">
              <FaPhoneSquareAlt className='info__icon'/>
              <div>
                <span className="info__title">Telefon raqamim bemalol telfon qiloraslar</span>
                <h4 className="info__desc">+998 97-995-02-32</h4>
              </div>
            </div>
          </div>
          <div className={MyElem ? "contact__socials contact__socials-anim":"contact__socials"} ref={myLinkAnim}>
            <a href="https://www.facebook.com/thesalohidin@gmail.com" className='contact__social-link'>
              <FaFacebookF/>
            </a>
            <a href="https://t.me/salokhidinov09" className='contact__social-link'>
              <FaTelegram/>
            </a>
            <a href="https://github.com/salohidinsaloydinov" className='contact__social-link'>
              <FaGithub/>
            </a>
          </div>
        </div>

        <form className="contact__form">
          <div className="form__input-group">
            <div className="form__input-div">
              <input type="text" placeholder='Ismingiz' className={MyElem ? "form__control form__control-anim1":"form__control"} ref={myLinkAnim}/>
            </div>
            <div className="form__input-div">
              <input type="email" placeholder='Email' className={MyElem ? "form__control form__control-anim2":"form__control"} ref={myLinkAnim} />
            </div>
            <div className="form__input-div">
              <input type="text" placeholder='Mavzu' className={MyElem ? "form__control form__control-anim3":"form__control"} ref={myLinkAnim} />
            </div>
          </div>
          <div className="form__input-div">
              <textarea placeholder='Xabar...' className={MyElem ? "form__control textarea form__control-anim4":"form__control textarea"} ref={myLinkAnim}></textarea>
          </div>
          <button className="button">
          Xabar Yuborish
            <span className="button__icon contact__button-icon">
              <FiSend/>
            </span>
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contact
