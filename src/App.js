import React from 'react';
import Buttons from './Components/Basic';
import Check from './Components/List with description';

function App() {

 return(
    <div className='w-screen h-screen flex justify-center items-center align-center'>
     <div className='ml-auto'><Check/></div>
     <div className='ml-auto mt-auto'><Buttons/></div>
     </div>
 )
}

export default App;
