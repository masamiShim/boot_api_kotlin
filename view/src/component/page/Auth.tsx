import React, {PropsWithChildren, ReactNode} from 'react';
import {Redirect, SwitchProps} from 'react-router-dom';

const Auth: React.FC = (props: SwitchProps) => {
    const user = {
        signIn: true
    };
    return (
        <div>
            {
                user.signIn ? props.children : <Redirect to={'/login'} />
            }
        </div>
    )
};

export default Auth;