import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
    const [showMenu,setShowMenu] = useState(false);
    const handleButtonToggle = () => {
        setShowMenu(!showMenu);
    }

  return (
<header>
    <div className='container'>
        <div className='grid navbar-grid'>
            <div className='logo'>
                <h1>SJS Techinical</h1>
            </div>
            <nav className={showMenu ? "menu-mobile" : "menu-web"}> 
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Services</a>
                    </li>
                    <li>
                        <a target ="_blank" href="https://ig.me/m/sjs">Contact </a>
                    </li>
                </ul>
            </nav>
            <div className='ham-menu'>
                <button onClick={handleButtonToggle}>
                     <GiHamburgerMenu />
                </button>
            </div>
        </div>
    </div>
</header>
  )
}

export default Navbar