import React, { useState } from 'react';
import './portfolio.css';
import Menu from './Menu';
export default function Portfolio() {

  const [items, setItems] = useState(Menu);
  const filterItems = (categoryItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categoryItem;
    })
    setItems(updateItems);
  }
  return <>
    <section className='work container section  ' id='work'>


      <h2 className=' section__title'>Recent Works</h2>

     
      <div className="work__filters">
          <span className="work__item" onClick={() => setItems(Menu)}>Everything</span>
          <span className="work__item" onClick={() => filterItems('CSS')}>CSS</span>
          <span className="work__item" onClick={() => filterItems('JavaScript')}>JavaScript</span>
          <span className="work__item" onClick={() => filterItems('React')}>React</span>
        </div>

      <div className="work__container grid">
        {items.map((ele) => {
          const { id, image, title, category , link } = ele;
          return (
            <div className="work__card" key={id}>
              <div className="work__thumbnail">
                <img src={image} alt="" className="work__img" />
                <div className="work__mask"></div>
              </div>
              <span className="work__category">{category}</span>
              <h3 className="work__title">{title}</h3>
              <a href={link} target='_blank' className="work__button">
                <i className="icon-link work__button-icon"></i>
              </a>
            </div>
          )
        })}
      </div>
    </section>

  </>
}
