import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Student from './Student.jsx'

function App(){
  return(
    <>
      <Header filename="Students List:"></Header>
      <Student name="Abhilash" age="22"></Student>
      <Student name="Raja" age={22}></Student>
      <Student></Student>
    </>
  );  
}


export default App