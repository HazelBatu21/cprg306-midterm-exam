"use client";
import React, { useEffect, useState } from "react";

const InteractivityExam = ({ list }) => {
  const [word, setWord] = useState("");
  const [newWord, setNewWord] = useState(word);// q8 inital value of "newWord" is an empty string

  useEffect(() => {
    setWord((prevName) => prevName.toUpperCase());
  }, [word]); // q15 add the variable name to the depency array

  const handleNameChange = (event) => {
    setWord(event.target.value);
    getWord();
  };

  const handleSubmit = (event) => {
    //event.preventDefault();    //----- q3 remove to resolve the error
  };

  const getWord = () => {
    setNewWord(word + "t"); //adjust conditional logit to word length
  };

  return (
    <div>
      {word.length >= 3 && <div>{word}</div>} {/*q13: { replaced this {word && <div>{word}</div>}- adjusted conditional render logic*/}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-green-200">
            <label className="px-2">Enter a word</label>
            <input
              type="text"
              placeholder="Enter a word"
              value={word}
              onChange={handleNameChange}
              className="text-center"
            />
          </div>
          <div className="flex item-center justify-center py-2">
            <button
              className="bg-red-100 p-2 rounded-md border border-red-500"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {word === "show list" && (
        <div>
          {list.map((item) => (  //q19: use item.id as the key attribute
            <div key={item.id}>{item.name}</div> // change index to item.id
          ))}
        </div>
      )}
    </div>
  );
};

export default InteractivityExam;
