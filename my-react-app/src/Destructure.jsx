
export default function List({task,isDone,month}){
  
    
if(isDone===true){
    return(
        <li>Done:{task}</li>
    )
}    
else{
    return(
          <li>Processing:{task} Starting-month:{month}</li>
    )
}

}