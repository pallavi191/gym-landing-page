import React, {useEffect, useRef} from 'react'
import '../../styles/header.css'
import logo from '../../assets/img/dumble.png'
import { useWindowWidthAndHeight } from './CustomHooks';

const Header = () => {
    const [width, height] = useWindowWidthAndHeight();
    console.log(height)

    const headerRef = useRef(null)
    const headerFunc = () => {
        console.log("document: " ,document.documentElement.scrollTop)

        if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
            headerRef.current.classList.add("sticky__header")
        }
        else{
            headerRef.current.classList.remove("sticky__header")
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", headerFunc)

        return  () => window.removeEventListener("scroll", headerFunc)
    }, [])

    const handleClick = e => {
        e.preventDefault()

        const targetAttr = e.target.getAttribute('href')
        const location = document.querySelector(targetAttr).offsetTop

        window.scrollTo({
            left: 0,
            top: location - 80,
        })
    }

    const nav_links = [
        {
            path: "#home",
            display: "Home"
        },
        {
            path: "#schedule",
            display: "Schedule"
        },
        {
            path: "#classes",
            display: "Classes"
        },
        {
            path: "#pricing",
            display: "Pricing"
        },
    ]
  return (
        <header className='header' ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                    {/* ========= LOGO ==========*/}
                    <div className="logo">
                        <div className="logo__img">
                            <img src={logo} alt="" />
                        </div>
                            <h2>Fitbody</h2>
                    </div>

                    {/* ========= NAVIGATION ==========*/}
                    <div className="navigation">
                        <ul className="menu">
                            {
                                nav_links.map((item) => (
                                    <li className="nav__item">
                                        <a onClick={handleClick} href={item.path}>{item.display}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    {/* ========= NAVIGATION ==========*/}
                    <div className="nav__right">
                        <button className="register__btn">Register</button>
                        <span className="mobile__menu">
                            <i class="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header