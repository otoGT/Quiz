import { useState } from "react";

export default function Question({ el }) {
  console.log();
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(true);
  const [clicked3, setClicked3] = useState(true);
  return (
    <div className="text-center">
      <div>
        <div className=" h-20">
          <h1 className="mt-2 text-xl ml-auto mr-auto font-medium text-black w-2/4 border-black border-2 rounded-full">{el.question}</h1>
        </div>
        <div className="mt-6 flex justify-between ml-auto mr-auto w-3/4 border-black border-2">
          <div className="w-1/4 flex ">
            <div
              onClick={() => {
                setClicked(false);
                setClicked1(true);
                setClicked2(true);
                setClicked3(true);
              }}
              className={
                clicked
                  ? "h-5 w-5 mt-1 border-black border-2"
                  : "h-5 w-5 border-black mt-1 border-2 bg-blue-500"
              }
            ></div>
            <h1 className="text-lg text-black"> {el.correct_answer}</h1>
          </div>
          <div className="w-1/4 flex  ">
            <div
              onClick={() => {
                setClicked1(false);
                setClicked(true);
                setClicked2(true);
                setClicked3(true);
              }}
              className={
                clicked1
                  ? "h-5 w-5 mt-1 border-black border-2"
                  : "h-5 w-5 mt-1 border-black border-2 bg-blue-500"
              }
            ></div>
            <h1 className="text-lg text-black">{el.incorrect_answers[0]}</h1>
          </div>
          {el.type != "boolean" && (
            <>
              <div className="w-1/4 flex ">
                <div
                  onClick={() => {
                    setClicked2(false);
                    setClicked(true);
                    setClicked1(true);
                    setClicked3(true);
                  }}
                  className={
                    clicked2
                      ? "h-5 w-5 mt-1  border-black border-2"
                      : "h-5 w-5 mt-1  border-black border-2 bg-blue-500"
                  }
                ></div>
                <h1 className="text-lg text-black">
                  {el.incorrect_answers[1]}
                </h1>
              </div>
              <div className="w-1/4 flex ">
                <div
                  onClick={() => {
                    setClicked3(false);
                    setClicked(true);
                    setClicked1(true);
                    setClicked2(true);
                  }}
                  className={
                    clicked3
                      ? "h-5 w-5 mt-1 border-black border-2"
                      : "h-5 w-5 mt-1 border-black border-2 bg-blue-500"
                  }
                ></div>
                <h1 className="text-lg text-black">
                  {el.incorrect_answers[2]}
                </h1>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
