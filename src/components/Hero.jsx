import React from "react";
import Button from "./Button";

export default function Hero() {
  let text = 'Accept & Login'
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center">
      <div  className="flex flex-col gap-4">
      <p>IT'S TIME TO DO</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-7xl lg:text-8xl ">
        Hit <span className="text-blue-400">Hard</span>
      </h1>
      </div>
      <p className="text-sm md:text-base font-light   sm:text-2xl md:text-2xl lg:text-3xl mx-8 " >
        Lorem ipsum dolor sit amet consectetur <span className="text-blue-400 font-medium">adipisicing elit.</span>{" "}
        Sapiente qui consectetur, excepturi magni nobis quibusdam voluptas,
        adipisci culpa ea iusto omnis perspiciatis veniam velit! Ullam saepe
        impedit ipsam aperiam excepturi esse veniam iure quos similique.
      </p>
      <Button func={()=>{
        window.location.href = '#generate'
      }} text={text}/>
    </div>
  );
}
