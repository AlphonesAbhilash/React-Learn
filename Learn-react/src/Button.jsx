
function Button(){
    let count=0;
    const reaction=()=>{
        count++;
        if(count<=3) console.log(`You Clicked me ${count} times`);
        else console.log("Stop Clicking me bloody Hell..");
    };

    const reaction2=()=>{
        console.log("I'll Kill you for god sake dude..");
    }
    return(
        <button onClick={reaction} onDoubleClick={reaction2}>Click Me</button>
    );
}

export default Button