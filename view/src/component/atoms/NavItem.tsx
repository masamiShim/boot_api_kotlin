import React from 'react';
import {Link} from 'react-router-dom';

type Props = {
    text: string;
    linkTo: string;
}

const NavItem:React.FC<Props> = (props) => {
    return (
        <Link to={props.linkTo}
              className='pl-8 pr-8 pt-10 pb-10 hover:bg-gray-200'
              style={{lineHeight: '55px'}}>{props.text}</Link>
    )
};

export default NavItem;