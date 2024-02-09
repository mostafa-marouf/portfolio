import React from 'react';
import  './home.css';
import me from '../../assets/portofile.jpg'
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';
export default function Home() {
  return <>
    <section className='home container' id='home'>
      <div className="intro">
        <img src={me} alt="portofile-photo" className="home__img" />
        <h1 className="home__name">Mostafa Marouf</h1>
        <span className="home__education">I'm a Front-End developer</span>
      <HeaderSocials />
      
      <a href="#contact" className="btn">Hire Me</a>
      <ScrollDown />
      </div>

      <Shapes />
    </section>
  </>
}
