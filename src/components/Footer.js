import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo';
import Paginator from './Paginator'

const numbers  = [1, 2, 3, 4, 5]

const Footer = (props) => { 
  return (
    <nav className="nav-flex p-2">
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto font-cali">
        <div className="text-sm lg:flex-grow">
          <Link to="./index">
            <Logo 
              width="118"
              height="48"
            />
          </Link>  
        </div>
        <div className="text-sm lg:flex-grow"></div>
        <div className="text-sm lg:flex-grow"></div>
        <div className="text-sm lg:flex-grow z-10">
        <Paginator 
          numbers={numbers}
          className="btn-footer hover:bg-grey" 
        />
        </div>
      </div>
    </nav>
  )
}

export default Footer    