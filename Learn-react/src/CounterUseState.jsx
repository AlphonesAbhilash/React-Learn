import React, {useState} from 'react';

function CounterUseState(){
    const [count, setCount]=useState(0);

    const increment=()=>{
        setCount(count+1);
    }
    const decrement=()=>{
        setCount(count-1);
    }
    const reset=()=>{
        setCount(0);
    }
    
    return(
        <div className="counter">
            <h1>The Counter</h1>
            <p className="display">{count}</p>
            <div className="btns">
                <button id='inc' onClick={increment}>Update</button>
                <button id='res' onClick={reset}>Reset</button>
                <button id='dec' onClick={decrement}>Downdate</button>
            </div>
        </div>
    );
}

export default CounterUseState