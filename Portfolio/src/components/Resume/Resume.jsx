import React from 'react';
import style from './resume.css';
import Data from './Data';
import Card from './Card';
export default function Resume() {
  return <>
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>
      <div className="resume__container grid">

        <div className="timeline grid">
          {Data.map((val) => {
            if (val.category == 'education') {
              return (

                <div className="timeline__item" key={val.id}>
                  <Card
                    id={val.id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                </div>
              )
            }
          })}
        </div>

        <div className="timeline grid">
          {Data.map((val) => {
            if (val.category == 'experience') {
              return (

                <div className="timeline__item" key={val.id}>
                  <Card
                    id={val.id}
                    icon={val.icon}
                    title={val.title}
                    year={val.year}
                    desc={val.desc}
                  />
                </div>
              )
            }
          })}
        </div>

      </div>
    </section>
  </>
}
