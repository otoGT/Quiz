import React, { useState } from 'react';
import Category from './Components/Basic';



function App() {
 return(
    <div className='w-screen h-screen flex justify-center items-center align-center'>  
    <div className='m-auto' id='Hide' onClick={HideIt}><Category/></div>
    <div className='flex m-auto hidden gap-4' id='show'>
    <h1>What is mars?</h1><br/>
    <button className='border-2 border-black rounded-lg'>Ball</button>
    <button className='border-2 border-black rounded-lg'>Planet</button>
    <button className='border-2 border-black rounded-lg'>Nothing</button>
    </div>
    </div>
 )
}

function HideIt(){
    document.getElementById('Hide').classList.add('hidden')
    document.getElementById('show').classList.remove('hidden')
}

export default App;
