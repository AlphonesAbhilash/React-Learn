import React, {useState} from 'react';

function CounterUseState(){
    const [count, setCount]=useState(0);

    const incrementFun=()=>{
        setCount(count+1);
    }
    const decrementFun=()=>{
        setCount(count-1);
    }
    const resetFun=()=>{
        setCount(0);
    }
    
    return(
        <div className="counter">
            <h1>The Counter</h1>
            <p className="display">{count}</p>
            <div className="btns">
                <button id='inc' onClick={incrementFun}>Update</button>
                <button id='res' onClick={resetFun}>Reset</button>
                <button id='dec' onClick={decrementFun}>Downdate</button>
            </div>
        </div>
    );
}

export default CounterUseState