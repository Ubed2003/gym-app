import React from "react";

export default function Button({text, func}) {

  
  return (
    <button onClick={func} className=" mx-auto my-10 px-8 py-4 rounded-md border-[2px] text-2xl border-blue-400 border-solid blueShadow duration-100">
      <p>{text}</p>
    </button>
  );
}
