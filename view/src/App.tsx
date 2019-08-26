import React, {useState} from 'react';
import './App.css';
import Increment from './component/stateless/Increment';

const App: React.FC = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <h1>{count}</h1>
            <Increment count={count} setCount={setCount}>INCLEMENT</Increment>
        </div>
    );
};

export default App;
