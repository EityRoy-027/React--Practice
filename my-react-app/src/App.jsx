import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import List from './Destructure';
import Singer from './Loop';
import Libarary from './Libarray';
 

function App() {

   const [count, setCount] = useState(0);
  return(
    
  <>

{/* app.jsx */}

  {/* <Basics></Basics>
  <Person></Person>
  <Name></Name>
  <Age></Age>
  <Learn></Learn>
  <Developer name="Salena" country="USA"></Developer>
  <Developer name="Justin" country="Canada"></Developer>
  <Developer name="Taylor" country="USA"></Developer>
   <Food name="Biriyani" place="Handy"></Food>
   <Food name="Rezela" place="home/restaurant"></Food>
   <Food name="Roast" place="home/event"></Food>
   <List></List>


   //Destructur.jsx

<List task="react app" isDone={true} month="February"></List>
<List task="HTML completed" isDone={true} month="May"></List>
<List task="CSS completed" isDone={true} month="June"></List>
<List task="JS completed" isDone={true} month="November"></List>
<List task="React completed" isDone={false} month="Starting from February 10, 2026."> </List> */}

{/* loop.jsx

<Singer></Singer> */}

{/* part1summary.jsx */}
<Libarary ></Libarary>


</>  
  )
}

function Person(){

  const date="11/2/20026";
  return(
    <p>This is my first React Code:{date}</p>
  )
}

function Basics(){
  const html="HTML";
  const css="CSS";
  const js="JS";

  return(
    <h2>Basics need to know before start React:{html}, {css}, {js}.</h2>
  )
}

//css first method

function Name(){

return (
  <div className='name'>My name is-Eity</div>
)

}

//css second method
const ageStyle={
  fontSize:"bold",
  color:"red",
  border:"4px solid pink",
  borderRadius:"5px"
}
function Age(){
  return(
    <p style={ageStyle}>10 years old</p>
  )
}

//css third method
function Learn(){
  <h3>Web Development</h3>

  return(
    <div style={{
      border:"4px solid pink",
      borderRadius:"5px"
    }}>

  <h3>Web Development</h3>

    </div>
  )
}

//specific

function Developer(props){

return(

<div style={{
  fontSize:"1.2rem",
  color:"marron",
  border:"4px solid orange",
  borderRadius:"5px"

  

}}>

  <h3> Developer: {props.name}</h3>
  <p>country: {props.country}</p>

</div>

)

}

//destructuring:-

function Food({name, place}){

return(

<div style={{
    fontSize:"1.2rem",
  color:"orange",
  border:"4px solid green",
  borderRadius:"5px"
}}>

<h4> Food Name:{name}</h4>
<p>place:{place}</p>

</div>

)

}






export default App