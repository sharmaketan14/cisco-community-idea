import React from 'react'
import "./header.css"

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>CISCO COMMUNITY</span>
            <span className='headerTitleLg'>VIT BHOPAL</span>
        </div>
        <img className='headerImage' src="https://assets-global.website-files.com/5ff3926f03b3ba043ed639d1/601f3c5e9b255f5047ad9750_5eeaad60ad09a630220e9742_cisco.jpeg" alt="" />
    </div>
  )
}
