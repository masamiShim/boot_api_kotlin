import React from 'react';
import {Redirect, SwitchProps} from 'react-router-dom';

const Auth: React.FC = (props: SwitchProps) => {
    const user = {
        signIn: true
    };
    return (
        <span>
            {
                user.signIn ? props.children : <Redirect to={'/login'} />
            }
        </span>
    )
};

export default Auth;