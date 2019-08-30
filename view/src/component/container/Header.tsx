import React from 'react';
import {Link} from 'react-router-dom';
import NavItem from "../atoms/NavItem";

const Header: React.FC = () => {
    return (
        <header className='pr-5 pl-5 flex justify-between'>
            <span className='w-1/4 p-3'>
                logo
            </span>
            <nav className='w-3/4'>
                <ul className="justify-end flex">
                    <li className="align-middle">
                        <NavItem text="Home" linkTo="/" />
                    </li>
                    <li>
                        <NavItem text="Contact" linkTo="/contact" />
                    </li>
                </ul>
            </nav>
        </header>
    )
};

export default Header;
