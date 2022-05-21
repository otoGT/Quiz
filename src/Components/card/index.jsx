import React from 'react';

function QuestionCard({ questionObj }) {
    return (
        <div className=' border-2 border-black rounded-lg border-dashed flex flex-col'>
            <p>{questionObj.question}</p>
            <ul>
                {
                    [...questionObj.incorrect_answers , questionObj.correct_answer].map((el, index) => (
                        <li key={index}>{ el }</li>
                    ))
                }
            </ul>
            
        </div>
    );
}

export default QuestionCard;