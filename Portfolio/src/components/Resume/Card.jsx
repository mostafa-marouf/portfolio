import React from 'react'

export default function Card(props) {
  return <div>
        <i className={props.icon}></i>
        <span className="timeline__date">{props.year}</span>
        <h3 className="timeline__title">{props.title}</h3>
        <p className="timeline__text">{props.desc}</p>
    </div> 
  
}
