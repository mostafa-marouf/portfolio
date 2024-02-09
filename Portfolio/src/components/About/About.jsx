import React from 'react';
import  './about.css';
import me from '../../assets/about.jpg'
import cv from '../../assets/Resume.pdf'
import toast, { Toaster } from 'react-hot-toast';



export default function About() {
  const notify = () => toast.success('downloud sucsess.');

  return <>
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>
      <div className="about__container grid">
        <img src={me} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              Hi! I'm Mostafa Marouf, a 23-year-old web developer from Egypt. I'm passionate about crafting exceptional user experiences and constantly learning new technologies. Let's connect and create something amazing together!            </p>
            <a href={cv} onClick={notify} download='Mostafa-Marouf-cv' className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>




            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>




            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Problem-Solving</h3>
                <span className="skills__number">70%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>
          </div>



        </div>
      </div>
    </section>
  </>
}
