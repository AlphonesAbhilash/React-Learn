import PropTypes from 'prop-types'

function Student(props){
    return(
        <div className="students">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );  
}

Student.defaultProps={
    name: "Guest",
    age: 20
}

Student.propTypes={
    name:PropTypes.string,
    age: PropTypes.number
}


export default Student