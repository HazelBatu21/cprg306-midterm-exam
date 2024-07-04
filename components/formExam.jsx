"use client";
import React, { useEffect, useState } from "react";

const FormExam = () => {
  const [firstname, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [fullname, setFullname] = useState("");

  const handleChange1 = (event) => {
    setName(event.target.value);
  };

  const handleChange2 = (event) => {
    setSurname(event.target.value); //q12 event handler that updates the surname state variable
  };

  const handleSubmit = (event) => { //q4 default behavior
    event.preventDefault(); // prevent default form submission behavior
    if (fullname === "") {
      setFullname(firstname + " " + surname); //q9 set variable fullname with firstname and surname
    } else {
      setFullname(""); //q14 when fullname is not an empty string, it is set to an empty string
    }

    console.log("name: ", firstname, surname);
  };

  return (
    <div>
      {fullname && (
        <div className="bg-blue-200 border border-blue-600 w-fit p-2 m-2 rounded-md">
          Name is: {fullname}
        </div>
      )}
      <div className="">
        <form onSubmit={handleSubmit} className="">
          <div className="p-2 bg-blue-100">
            <label className="px-2">Enter your firstname</label>
            <input
              type="text"
              placeholder="Enter your firstname"
              value={firstname}
              onChange={handleChange1}
              className="text-center"
            />
          </div>
          <div className="p-2 bg-blue-100">
            <label className="px-2">Enter your Surname</label>
            <input
              type="text"
              placeholder="Enter you surname"
              value={surname}
              onChange={handleChange2}
              className="text-center" //q5 applied in the input fields
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
    </div>
  );
};

export default FormExam;
