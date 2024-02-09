import React from 'react'

export default function ScrollDown() {
  return <>
    <div className="scroll__down">
        <a href="#about" className="mouse__wrapper">
          <p>Scroll Down</p>
            <span className="mouse">
                <span className="wheel"></span>
            </span>
        </a>
    </div>
  </>
}
