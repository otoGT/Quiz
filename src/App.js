import React from 'react';
import Category from './Components/Basic';
//https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=boolean

function App() {

 return(
    <div className='w-screen h-screen flex justify-center items-center align-center'>
     <div className='m-auto'><Category/></div>
     </div>
 )
}

export default App;
