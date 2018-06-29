import React from 'react'
import { Link } from 'react-router-dom';
import MobileBtn from './MobileBtn';
import Logo from './Logo';
import Paginator from './Paginator'

const numbers = ['Top One', 'Top Two', 'Top Three', 'Top Four', 'Top Five']

const Nav = () => {
  return (
    <nav className="nav-flex p-6">
      <div className="flex items-center flex-no-shrink text-white mr-6 -ml-8">
        <Link to="./index">
          <Logo 
            width="138"
            height="58"
          />
        </Link>
        <span className="font-semibold text-xl">Reddit Client</span>
      </div>
      <div className="block lg:hidden">
        <MobileBtn />
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
        </div>
        <div className="z-10">
          <Paginator 
            numbers={numbers}
            className="btn-link hover:border-transparent hover:text-teal hover:bg-white lg:mt-0" 
          />
        </div>
      </div>
    </nav>
  );
}

export default Nav   