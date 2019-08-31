import React, {MouseEvent} from 'react';
import InputText from "../atoms/InputText";
import {RouteComponentProps, withRouter} from "react-router";

type InputForm = {
    label: string;
    val: string;
}

type LoginForm = {
    username: InputForm;
    password: InputForm;
}
const Login: React.FC<RouteComponentProps> = (props) => {
    const form = {
        username: {
            label: 'UserName',
            val: '',
        },
        password: {
            label: 'Password',
            val: '',
        },
    };

    const setUserName = (val: string) => {
        form.username.val = val
    };
    const setPassword = (val: string) => {
        form.password.val = val
    };

    const handleLogin = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!form.username) {
            return;
        }
        if (!form.password) {
            return;
        }

        props.history.push('/top')
    };

    return (
        <div className='w-1/2 mx-auto my-auto shadow p-8'>
            <form className='flex-wrap justify-center'>
                <h1 className="text-center text-gray-600 text-2xl">ログイン</h1>
                <div className="mt-6">
                    <InputText label={form.username.label} handleChange={setUserName}/>
                </div>
                <div className="mt-6">
                    <InputText label={form.password.label} handleChange={setPassword}/>
                </div>
                <div className="mt-10">
                    <ul className="flex justify-between align-middle">
                        <li>
                            <button className='py-2 px-10 bg-blue-600 text-gray-100 rounded hover:bg-blue-400'
                                    onClick={handleLogin}>ログイン
                            </button>
                        </li>
                        <li>
                            <a href='#' className='text-blue-600' style={{lineHeight: '35px'}}>Forgot Password?</a>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
};

export default withRouter(Login);