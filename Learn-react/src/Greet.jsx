function Greet(props){
    const welcomeMessage=<h2 className="welcome">Welcome {props.name}</h2>;
    const loginMessage=<h2 className="login">Please Login to Continue</h2>;
    // console.log(props);
    return(
        props.isLoggedin?welcomeMessage:loginMessage
    );
}

export default Greet