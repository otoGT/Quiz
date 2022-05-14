import "./App.css";
import { useState } from "react";

import Categories from "./components/Categories";
import Question from "./components/Question";

function App() {
  const [questions, setQuestions] = useState([]);
  const [startButton, setButton] = useState(false);
  const categoryArr = [
    "General Knowledge",
    "Entertainment: Books",
    "Entertainment: Film",
    "Entertainment: Music",
    "Entertainment: Musicals & Theatres",
    "Entertainment: Television",
    "Entertainment: Video Games",
  ];

  return (
    <div className="min-h-screen bg-0 bg-transparent min-w-screen bg-no-repeat bg-cover background">
      <div className="categories ">
        <div className="flex justify-between m-2 text-black" id="categories">
          {categoryArr.slice(0, 4).map((el, index) => (
            <div className="">
              <Categories
                questions={questions}
                setQuestions={setQuestions}
                name={el}
                index={index}
                setButton={setButton}
                url={index + 1}
                category={index + 9}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-2 text-black">
          {console.log(questions)}
          {categoryArr.slice(4, 7).map((el, index) => (
            <Categories
              questions={questions}
              setQuestions={setQuestions}
              name={el}
              index={index + 4}
              setButton={setButton}
              url={index + 5}
              category={index + 13}
            />
          ))}
        </div>
      </div>
      {startButton &&
        questions.map((el) => {
          return <Question el={el} />;
        })}
      {startButton && (
        <div className="w-full">
          <button
            onClick={() => {
              const nodes = document.querySelectorAll(".bg-blue-500");
              console.log(questions);
              [...nodes].map((el, index) => {
                el.classList.remove("bg-blue-500");
                el.parentElement.querySelector("h1").innerText ==
                questions[index].correct_answer
                  ? el.classList.add("bg-green-500")
                  : el.classList.add("bg-red-500");
              });
            }}
            className="h-10 w-40 rounded-full bg-green-500 text-black"
          >
            see results
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
