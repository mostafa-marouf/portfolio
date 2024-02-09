import React, { useState } from 'react';
import './SideBar.css';
import logo from '../../assets/2.png'

export default function SideBar() {

  const [toggle, showMenu] = useState(false)
  return <>
    <aside className={toggle?'aside show-menu':'aside'}>
    

      <nav className="nav">
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a 
              onClick={()=>showMenu(false)}
              href="#home" className="nav__link">
                <i className="fa-solid fa-house"></i>
              </a>
            </li>

            <li className="nav__item">
              <a 
              onClick={()=>showMenu(false)}
              href="#about" className="nav__link">
                <i className="fa-solid fa-user"></i>
              </a>
            </li>

            <li className="nav__item">
              <a 
              onClick={()=>showMenu(false)}
              href="#services" className="nav__link">
                <i className="fa-solid fa-briefcase"></i>
              </a>
            </li>

            <li className="nav__item">
              <a 
              onClick={()=>showMenu(false)}
              href="#resume" className="nav__link">
                <i className="fa-solid fa-graduation-cap"></i>
              </a>
            </li>

            <li className="nav__item">
              <a 
              onClick={()=>showMenu(false)}
              href="#work" className="nav__link">
                <i className="fa-solid fa-layer-group"></i>
              </a>
            </li>

            <li className="nav__item">
              <a 
              onClick={()=>showMenu(false)}
              href="#contact" className="nav__link">
                <i className="fa-solid fa-message"></i>
              </a>
            </li>

          </ul>
        </div>
      </nav>

      <div className="nav___footer">
        <span className="copyright">&copy; 2023 - 2024.</span>
      </div>
      
    </aside>

    <div 
    onClick={()=>showMenu(!toggle)}
    className={!toggle?'nav__toggle':'nav__toggle nav__toggle-open'}
    >
    <i className="fa-solid fa-bars"></i>    
    </div>
  </>
}
