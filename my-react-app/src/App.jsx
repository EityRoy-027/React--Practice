import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


 

function App() {

   const [count, setCount] = useState(0);
  return(
    
  <>

  <Basics></Basics>
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

function Developer(singer){

return(

<div style={{
  fontSize:"1.2rem",
  color:"marron",
  border:"4px solid orange",
  borderRadius:"5px"

  

}}>

  <h3> Developer: {singer.name}</h3>
  <p>country: {singer.country}</p>

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