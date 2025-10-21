function Lists(){
    const fruits=[{name:"Apple", calories:25 },
                {name:"Orange", calories:53},
                {name:"Banana", calories:111},
                {name: "Mango", calories:99},
                {name:"Guava", calories:31}
                                            ]
    fruits.sort((a,b)=>a.name.localeCompare(b.name))
    const fruitsList=fruits.map(fruit=><li>{fruit}</li>)

    const lowCalFruits=fruits.filter(fruit=> fruit.calories<100);
    const lowCallist=lowCalFruits.map(fruit=><li>{fruit.name}: <b>{fruit.calories}</b></li>)

    return(<ol>{lowCallist}</ol>);
}

export default Lists