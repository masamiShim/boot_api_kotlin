import React from 'react';
import {Link} from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className='h-32 mt-40 border-t flex justify-between'>
            <span className='w-1/4 p-3 bg-blue-900 text-gray-100'>
                logo
            </span>
            <ul className='w-3/4 bg-blue-900 text-gray-100'>
                <li className='p-3'>
                    <Link to='/' className='pl-8 pr-8'>Home</Link>
                    <Link to='/contact'>Contact</Link>
                </li>
            </ul>
        </footer>
    )
};

export default Footer;
