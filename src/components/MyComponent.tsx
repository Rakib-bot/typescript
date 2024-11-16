import React from 'react';
import { useValue } from '../context_api/myContext';
const MyComponent:React.FC = () => {

   const {value,increment,decrement} = useValue();
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            
        </div>
    );
};

export default MyComponent;
