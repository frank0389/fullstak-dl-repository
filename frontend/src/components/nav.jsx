import React from 'react';
import Search from './search';

const Nav = ({title}) => {

    return ( 
        <nav className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4 sticky top-0 z-50">
            <div className="flex w-full flex-wrap items-center justify-between px-3">
                <span className="ms-2 text-xl text-black dark:text-white">{title}</span>
                <div className="ms-5 flex w-[30%] items-center justify-between">
                <Search/>
                </div>
            </div>
        </nav>
    );
}

export default Nav;