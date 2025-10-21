import React, {useState} from 'react';

function MyComponent(){
    const [name, setName]=useState("Default");

    const updateName=()=>{
        setName("Alphones");
    }

    return(
        <div className="myCompo">
            <h2>Demonstration of React Hook via useState:</h2>
            <p><strong>Name: </strong> {name}</p>
            <button id="btn-comp" onClick={updateName}>Update</button>
        </div>
    );
}

export default MyComponent