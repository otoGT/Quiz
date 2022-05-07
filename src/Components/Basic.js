/* This example requires Tailwind CSS v2.0+ */
export default function Category() {
  return (
    <span className="relative z-0 inline-flex shadow-sm rounded-md">
      <button
        type="button"
        onClick={ClickDaButton}
        id='rame'
        className="relative inline-flex items-center px-4 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Mythology Quiz
      </button>
      <button
        type="button"
        id='rame1'
        onClick={ClickDaButton1}
        className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        History Quiz
      </button>
      <button
        type="button"
        id='rame2'
        onClick={ClickDaButton2}
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Sports Quiz
      </button>
      <button
        type="button"
        id='rame2'
        onClick={ClickDaButton2}
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Art Quiz
      </button>
      <button
        type="button"
        id='rame2'
        onClick={ClickDaButton2}
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Sports Quiz
      </button>
      <button
        type="button"
        id='rame2'
        onClick={ClickDaButton2}
        className="-ml-px relative inline-flex items-center px-4 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
      >
        Sports Quiz
      </button>
    </span>
  )
  function ClickDaButton(){
    document.getElementById('rame').innerHTML = "Start Quiz";

  }
  function ClickDaButton1(){
    document.getElementById('rame1').innerHTML = "Start Quiz";
  }
  function ClickDaButton2(){
    document.getElementById('rame2').innerHTML = "Start Quiz";
  }
}
