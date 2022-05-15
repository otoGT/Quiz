import React from 'react';
import Category from './Components/Basic';
import Questions from './Components/Questions';
import Example from './Components/Simple table';

function App() {

 return(
    <div className='w-screen h-screen flex justify-center items-center align-center'>  
     <div className='m-auto'><Category/></div>
     <div><Questions/></div>
     </div>
 )
}

export default App;
