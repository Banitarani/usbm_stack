import React from "react";

const Form = () => {
  function showDisplay() {
    alert("hii user");
  }
  return (
    <div className="flex justify-center mt-5 flex-col items-center ">
      <input type="text" placeholder="username" className="bg-green-200 " />
      <br />
      <input
        type="email"
        placeholder="enter e-mail"
        className="bg-green-200 text-white  "
      />
      <br />
      <button
        className="bg-red-500 text-white "
        onClick={showDisplay}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};

export default Form;
