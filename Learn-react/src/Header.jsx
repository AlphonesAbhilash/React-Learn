
function Header(props){
    return(
        <header>
            <h1>Welcome to the {props.filename}</h1>
            {/* <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav> */}
            <hr />
        </header>
    );
}

export default Header;