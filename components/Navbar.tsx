import * as React from 'react';
import Logo from './Logo';

type Props = {

};

const Navbar = (props: Props) => {
  return (
    <header>
      <div className='p-4 mx-auto max-w-screen-xl'>
        <div className='flex items-center justify-between space-x-4 lg:space-x-10'>
          <div className='flex lg:w-0 lg:flex-1'>
            <Logo />
          </div>

          <nav className='hidden text-sm font-medium space-x-8 md:flex'>
            <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
              About
            </a>
            <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
              Projects
            </a>
            <a href='#' className='font-medium text-gray-500 hover:text-gray-900'>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
