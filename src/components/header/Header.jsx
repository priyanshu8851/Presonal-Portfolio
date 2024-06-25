import React from 'react'
import "./header.css"
    const logo="< Priyanshu />";
const Header = () => {
  return (
    <>
      <header className='main'>
        <div className="container">
            <span>{logo}</span>
            <button className='navBtn'>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
      </header>
    </>
  )
}

export default Header
