import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Top from './component/page/Top';
import Header from './component/container/Header';
import Contact from "./component/page/Contact";
import Footer from "./component/container/Footer";
import Login from "./component/page/Login";
import SignIn from "./component/page/SignIn";
import Auth from "./component/page/Auth";

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='h-16 sticky'>
                    <Header/>
                </div>
                <div>
                    <Switch>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/signIn' component={SignIn}/>
                        <Auth>
                            <Switch>
                                <Route exact path='/top' component={Top}/>
                                <Route exact path='/contact' component={Contact}/>
                            </Switch>
                            <Footer/>
                        </Auth>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
