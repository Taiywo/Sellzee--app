import React from 'react'
import Nav from './Nav'
import Headcontent from './Headcontent'

function Header() {
    return (
        <div className=" bg-gradient-to-l from-blue-700 to-indigo-400 ">
            <Nav />
            <Headcontent/>
            </div>
    )
}

export default Header