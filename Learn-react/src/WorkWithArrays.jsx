import { useState } from "react";


function WorkWithArrays(){

    const [fruits, setFruits] = useState(["Apple", "Banana", "Orange"])

    function handleAddFruit(){
        const newFruit = document.getElementById("append").value;
        document.getElementById("append").value="";
        setFruits([...fruits, newFruit]);
    }

    function handleRemoveFruit(index){
        setFruits(fruits.filter((_,i)=> i!==index));
    }
    return(<>
        <div className="container">
            <ul>
                {fruits.map((fruit, index)=>
                <li key={index} onClick={()=>handleRemoveFruit(index)}>{fruit}</li>
                )}
            </ul>
            <input type="text" id="append" placeholder="Enter a fruit:" on={handleAddFruit}/>
            <button onClick={()=>handleAddFruit()}>Add</button>
        </div>
        </>
    );
}

export default WorkWithArrays