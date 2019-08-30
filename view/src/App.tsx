import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Top from './component/page/Top';
import Header from './component/container/Header';
import Contact from "./component/page/Contact";
import Footer from "./component/container/Footer";

const App: React.FC = () => {
    return (
        <div>
            <BrowserRouter>
                <div className='h-16 sticky'>
                    <Header/>
                </div>
                <div>
                    <Route exact path='/' component={Top}/>
                    <Route exact path='/contact' component={Contact}/>
                </div>
                <Footer/>
            </BrowserRouter>
        </div>
    );
};

export default App;
