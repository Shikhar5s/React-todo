import {useState} from 'react'
 

function App3(){
 
  
  
    
  return(


    <div>
         <Headerbutton/>
        <Header title='Coder'></Header>
        <Header title='Shikhar2'></Header>
    </div>
  )
  




}
function Headerbutton(){


    const[title,setTitle]=useState('My name is Shikhar');

  function change(){
  setTitle("My name is"+ Math.random());

  }
return(

    <div>
         <button onClick={change}>Click me to change the title</button>
         <Header title={title}></Header>
         
    </div>
)  
}


function Header({title}){
    return <div>
    {title} 
    </div>
}

export default App3

//minimising the number of rendering