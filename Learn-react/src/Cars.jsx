import React, {useState} from 'react';

function Cars(){
    const [car, setCar] = useState([])
    const [carYear, setYear] = useState(new Date().getFullYear())
    const [carMake, setMake] = useState("")
    const [carModel, setModel] = useState("")

    function handleAddCar(){
        const newCar = {year: carYear,
                        make: carMake,
                        model: carModel
                        };
        setCar(c => [...c, newCar])
    }

    function handleYearChange(event){
        // keep year as a number
        setYear(Number(event.target.value))
    }

    function handleMakeChange(event){
        setMake(event.target.value)
    }

    function handleModelChange(event){
        setModel(event.target.value)
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent form from submitting normally
        handleAddCar();
    }

    return(
    <div>
        <ul>
                {car.map((c, index)=>
                    <li key={index}>
                        {c.year} {c.make} {c.model}
                    </li>
                )}
        </ul>
        <form onSubmit={handleSubmit}>
            <input type="number" value={carYear} onChange={handleYearChange}/>
            <input type="text" value={carMake} onChange={handleMakeChange}/>
            <input type="text" value={carModel} onChange={handleModelChange}/>
            <button type="submit">Add Car</button>
        </form>
    </div>
    )
}

export default Cars