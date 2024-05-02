import React, { useEffect, useState } from 'react'
import { BsMoon, BsSun} from 'react-icons/bs';

import "./SunMoon.css"

const SunMoon = () => {

    const[showSun, setShowSun] = useState('nav__sun')

    const toggleTheme = ()=>{
        if (showSun==='nav__sun') {
            setShowSun('nav__dark');
        }
        else{
            setShowSun('nav__sun');
        }
    }
    useEffect(()=>{
        document.documentElement.className = showSun;
    }, [showSun])
    return (
        <div className="theme__toggler" onClick={toggleTheme}>
            {showSun === 'nav__sun' ? <BsSun className='sun'/> :<BsMoon className='moon'/>}
        </div>
    )
}

export default SunMoon
