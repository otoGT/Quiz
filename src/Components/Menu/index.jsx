import { useState } from 'react';

function QuestionMenu(props) {
    const [category, setCategory] = useState();
    const [difficulty, setDifficulty] = useState();

    const handleStart = async () => {
        let url;
        if(category && difficulty){
            url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;
            const response = await fetch(url);
            const result = await response.json();
            props.insertQuestion(result);
        }
        document.getElementById('menu').classList.add('hidden')
    }

    return (
        <div id='menu' className='flex justify-center items-center'>
            <div>
                <select name="category" className='border-2 border-black rounded-md hover:border-purple-500' onChange={e => setCategory(e.target.value)}>
                    <option value="any">Chose Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="21">Sports</option>
                    <option value="23">History</option>
                    <option value="20">Mythology</option>
                    <option value="10">Entertainment: Books</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musicals &amp; Theatres</option>
                    <option value="14">Entertainment: Television</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    
                </select>
            </div>
            <div>
                <select name="difficulty" className='border-2 border-black rounded-md hover:border-purple-500'  onChange={e => setDifficulty(e.target.value)}>
                    <option value="any">Chose Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div>
                <button className='border-2 border-black rounded-md hover:border-purple-500' onClick={handleStart}>Start</button>
            </div>
        </div>
    );
}

export default QuestionMenu;