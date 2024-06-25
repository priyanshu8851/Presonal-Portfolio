import React from 'react'
import "./header.css"
    const logo="< Priyanshu />";
const Header = (props) => {
  return (
    <>
      <header className='main'>
        <div className="contain">
            <span>{logo}</span>
            <button className='navBtn' onClick={()=>props.navFn(!props.navState)}>
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
