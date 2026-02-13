export default function Singer(){
    


const singers=["Arijit Singh","Salena Gomez", "Taylor Swift","Justin Bieber","Shawn Mondals"];
<>
return(
    <h1>My favourite Singers:-</h1>
   
  {
     singers.map(singer => <Singer singer={singer}></Singer>)
  }
  
)
</>

}