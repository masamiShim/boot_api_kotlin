import React from 'react';
import {Switch} from 'react-router-dom';
import NavItem from "../atoms/NavItem";
import Auth from "../page/Auth";

const Header: React.FC = () => {
    return (
        <header className='pr-5 pl-5 flex justify-between'>
            <span className='w-1/4 p-3'>
                logo
            </span>
            <nav className='w-3/4'>
                <Switch>
                    <ul className="justify-end flex">
                        <li className="align-middle">
                            <NavItem text="Login" linkTo="/login"/>
                        </li>
                        <li>
                            <NavItem text="SignIn" linkTo="/signIn"/>
                        </li>
                        <Auth>
                            <Switch>
                                <li className="align-middle">
                                    <NavItem text="Home" linkTo="/"/>
                                </li>
                                <li>
                                    <NavItem text="Contact" linkTo="/contact"/>
                                </li>
                            </Switch>
                        </Auth>
                    </ul>
                </Switch>
            </nav>
        </header>
    )
};

export default Header;
