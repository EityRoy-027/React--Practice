
export default function List({task,isDone,month}){
  

// if/else:    
    
if(isDone===true){
    return(
        <li>Done:{task}</li>
    )
}    
// else{
//     return(
//           <li>Processing:{task} Starting-month:{month}</li>
//     )
// }

//return=null:-

if(isDone===true){
    return(
        null
    )
}   

//ternary:-

return(
    isDone?  <li>Done:{task}</li> :<li>Processing:{task} Starting-month:{month}</li>
)

//conditional randaring:-

 isDone && <li>Done:{task} month:{month}</li>//only when true


 isDone || <li>Done:{task} month:{month}</li>//only when false



 //using variable:-

let listItem;


if(isDone===true){
    return(
      listItem=  <li>Done:{task}</li>
    )
}

else{
    listItem=<li>Pending:{task}</li>
}

return(
    listItem
)


}