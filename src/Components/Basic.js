import { useState } from "react"

/* This example requires Tailwind CSS v2.0+ */
export default function Category() {

  const [difficult, setDifficult] = useState();
  const [type, setType] = useState();
  const url = 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple';

  return (
    <span id="Mainer" className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        type="button"
        onClick={UnHide}
        id='Myth'
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Mythology Quiz
      </button>
      <div id="after" className="hidden items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <select
        onChange={e => setDifficult(e.target.value)}
        >
        <option value="easy" >Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </select>
        <select>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="true.false">True/False</option>
        </select>
        <button onClick={UnMain}>Start Quiz</button>
      </div>
      <button
        type="button"
        id='Animal'
        onClick={UnHide1}
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Animals Quiz
        <h1 className="class1"></h1>
      </button>
      <div id="after1" className="hidden items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <select
        onChange={e => setDifficult(e.target.value)}
        >
        <option value="easy" >Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </select>
        <select>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="true.false">True/False</option>
        </select>
        <button onClick={UnMain}>Start Quiz</button>
      </div>
      <button
        type="button"
        id='Politic'
        onClick={UnHide2}
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Politics Quiz
        <h1 className="class2"></h1>
      </button>
      <div id="after2" className="hidden items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <select
        onChange={e => setDifficult(e.target.value)}
        >
        <option value="easy" >Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </select>
        <select>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="true.false">True/False</option>
        </select>
        <button onClick={UnMain}>Start Quiz</button>
      </div>
      <button
        type="button"
        id='Art'
        onClick={UnHide3}
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Art Quiz
        <h1 className="class3"></h1>
      </button>
      <div id="after3" className="hidden items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <select
        onChange={e => setDifficult(e.target.value)}
        >
        <option value="easy" >Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </select>
        <select>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="true.false">True/False</option>
        </select>
        <button onClick={UnMain}>Start Quiz</button>
      </div>
      <button
        type="button"
        id='History'
        onClick={UnHide4}
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        History Quiz
        <h1 className="class4"></h1>
      </button>
      <div id="after4" className="hidden items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <select
        onChange={e => setDifficult(e.target.value)}
        >
        <option value="easy" >Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </select>
        <select>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="true.false">True/False</option>
        </select>
        <button onClick={UnMain}>Start Quiz</button>
      </div>
      <button
        type="button"
        id='Sport'
        onClick={UnHide5}
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Sports Quiz
        <h1 className="class5"></h1>
      </button>
      <div id="after5" className="hidden items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
        <select
        onChange={e => setDifficult(e.target.value)}
        >
        <option value="easy" >Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
        </select>
        <select>
          <option value="any">Any Type</option>
          <option value="multiple">Multiple Choice</option>
          <option value="true.false">True/False</option>
        </select>
        <button onClick={UnMain}>Start Quiz</button>
      </div>
    </span>
  )
  function UnHide(){
    document.getElementById('Myth').classList.add('hidden')
    document.getElementById('after').classList.remove('hidden')
  }
  function UnHide1(){
    document.getElementById('Animal').classList.add('hidden')
    document.getElementById('after1').classList.remove('hidden')
  }
  function UnHide2(){
    document.getElementById('Politic').classList.add('hidden')
    document.getElementById('after2').classList.remove('hidden')
  }
  function UnHide3(){
    document.getElementById('Art').classList.add('hidden')
    document.getElementById('after3').classList.remove('hidden')
  }
  function UnHide4(){
    document.getElementById('History').classList.add('hidden')
    document.getElementById('after4').classList.remove('hidden')
  }
  function UnHide5(){
    document.getElementById('Sport').classList.add('hidden')
    document.getElementById('after5').classList.remove('hidden')
  }
  function UnMain(){
    document.getElementById('Main').classList.remove('hidden')
    document.getElementById('Mainer').classList.add('hidden')
  }
}
