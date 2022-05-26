import React from 'react';
import { useState } from 'react';

function QuestionCard({ questionObj }) {
    const [clicked,  setClicked] = useState(true);
    return (
        <div className=' border-2 border-black rounded-lg flex flex-col'>
            <p>{questionObj.question}</p>
             <ul>
                {
                    [...questionObj.incorrect_answers , questionObj.correct_answer].map((el, index) => (
                        <li key={index}><button
                        onClick={() => {
                          setClicked(false);
                        }}
                        className={
                            clicked
                            ? "h-5 w-5 mt-1 mr-2 border-black border-2 rounded-full"
                            : "h-5 w-5  mr-2 border-black mt-1 border-2 rounded-full bg-blue-500"
                        }
                      ></button> { el }</li>
                    ))
                }
             </ul>
        </div>
    );
}

export default QuestionCard;