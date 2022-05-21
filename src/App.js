import { useState } from 'react';
import QuestionCard from './Components/card';
import QuestionMenu from './Components/Menu';

function App() {
    const [questions, setQuestions] = useState()

 return(
    <div className=''>  
        <QuestionMenu insertQuestion={setQuestions}/>
        {
            questions && questions.results.map((item, index) => <QuestionCard key={index} questionObj={item} />)
        }
    </div>
 )
}

export default App;
