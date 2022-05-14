import { useState } from "react";
import Question from "./Question";

/* This example requires Tailwind CSS v2.0+ */
export default function Categories({
  name,
  index,
  setButton,
  setQuestions,
  url,
  category,
}) {
  let [number, setNumber] = useState(true);
  async function fetchData(url) {
    const data = await fetch(url);
    if (data.status == 200) {
      const res = await data.json();
      setQuestions(res.results);
      setButton(true);
    } else {
      setQuestions([]);
      return [];
    }
  }

  function hide(index) {
    setNumber(false);
    document.getElementById(index).innerHTML = ` <select id="999">
 <option value="easy">Easy</option>
 <option value="medium">Medium</option>
 <option value="hard">Hard</option>
</select>
<select id="888" name="trivia_type" class="form-control">&gt;
	<option value="multiple">Any Type</option>
	<option value="multiple">Multiple Choice</option>
	<option value="boolean">True/False</option>
</select>
`;
    document.getElementById(index + "button").classList.remove("hidden");
  }
  return (
    <button
      onClick={() => {
        number && hide(index);
      }}
      type="button"
      className={`bg-${url} bg-cover border-2 text-black border-gray-300 border-dashed rounded-lg p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black`}
    >
      <div id={index}>
        <span className="mt-2 block text-sm font-medium text-black">
          {name}
        </span>
      </div>
      <button
        id={index + "button"}
        onClick={() => {
          document.querySelector(".categories").classList.add("hidden");
          const difficulty = document.getElementById("999").value;
          const type = document.getElementById("888").value;
          fetchData(
            `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=${type}`
          );
        }}
        className="-ml-1 mr-2 hidden start text-black"
      >
        Start Test
      </button>
    </button>
  );
}
