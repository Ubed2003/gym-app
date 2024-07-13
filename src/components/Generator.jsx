import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { SCHEMES, WORKOUTS } from "../utils/data";
import Button from "./Button";

function Header({ index, title, description }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-center gap-4">
        <p className="text-3xl sm:text-4xl md:text-5xl  lg:text-6xl font-semibold text-slate-400">
          {index}
        </p>
        <h4 className="text-xl sm:text-4xl md:text-5xl lg:text-6xl">
          {" "}
          {title}
        </h4>
      </div>
      <p className="text-sm sm:text-1xl  md:text-1xl  lg:text-2xl  mx-auto ">
        {description}
      </p>
    </div>
  );
}

export default function Generator({
  muscles,
  setMuscles,
  poison,
  setPoison,
  goals,
  setGoals,
  updateWorkout,
}) {
  let [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }

  function updateMuscles(muscleGroup) {
    if (muscles.includes(muscleGroup)) {
      setMuscles(muscles.filter((val) => val !== muscleGroup));
      return;
    }

    if (muscles.length > 2) {
      return;
    }

    if (poison !== "individual") {
      setMuscles([muscleGroup]);
      setModal(false);
      return;
    }
    setMuscles([...muscles, muscleGroup]);
    if (muscles.length === 2) {
      setModal(false);
    }
  }
  let text = "Formulate";

  return (
    <SectionWrapper id={'generate'}
      header={"generate your workout"}
      title={["It's", "Huge", "o'clock"]}
    >
      <Header
        index={"01"}
        title={"Pick your Poison"}
        description={"Select the workout you want to enjoin"}
      />

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 px-4  ">
        {Object.keys(WORKOUTS).map((type, typeIndex) => {
          return (
            <button
              onClick={() => {
                setMuscles([]);
                setPoison(type);
              }}
              key={typeIndex}
              className={
                "bg-slate-950 border   duration-200 hover:border-blue-600  rounded-lg py-2 px-4 sm:mx-6 " +
                (type === poison ? "border-blue-600" : "border-blue-1000")
              }
            >
              <p className=" sm:px-2 lg:text-1xl lg:py-3  lg:px-10 xl:px-10  xl:py-4 xl:py-2 sm:text-xl md:py-2 capitalize font-normal ">
                {type.replaceAll("_", " ")}
              </p>
            </button>
          );
        })}
      </div>
      <Header
        index={"02"}
        title={"Lock your targets"}
        description={"Select the muscles judged for anhilation."}
      />

      <div className="bg-slate-950 border border-solid border-blue-400 rounded-lg mx-8 flex flex-col">
        <button
          onClick={toggleModal}
          className="relative flex  p-3 items-center justify-center  "
        >
          <p className="capitalize">
            {muscles.length === 0 ? "Select muscle groups" : muscles.join(" ")}
          </p>
          <i className="fa-solid fa-caret-down absolute right-3 top1/2 -translate-1/2 "></i>
        </button>
        {modal && (
          <div className="flex flex-col">
            {(poison === "individual"
              ? WORKOUTS[poison]
              : Object.keys(WORKOUTS[poison])
            ).map((muscleGroup, muscleGroupIndex) => {
              return (
                <button
                  onClick={() => {
                    updateMuscles(muscleGroup);
                  }}
                  key={muscleGroupIndex}
                  className={
                    "hover:text-blue-400 duration-200 " +
                    (muscles.includes(muscleGroup) ? "text-blue-400" : "")
                  }
                >
                  <p className=" uppercase my-0.5">{muscleGroup}</p>
                </button>
              );
            })}
          </div>
        )}
      </div>
      <Header
        index={"03"}
        title={"Become Judgement"}
        description={"Select your ultimate objective."}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 px-4  ">
        {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
          return (
            <button
              onClick={() => {
                setGoals(scheme);
              }}
              key={schemeIndex}
              className={
                "bg-slate-950 border   duration-200 hover:border-blue-600  rounded-lg py-2 px-4 sm:mx-6 " +
                (scheme === goals ? "border-blue-600" : "border-blue-1000")
              }
            >
              <p className=" sm:px-2 lg:text-1xl lg:py-3  lg:px-10 xl:px-10  xl:py-4 xl:py-2 sm:text-xl md:py-2 capitalize font-normal ">
                {scheme.replaceAll("_", " ")}
              </p>
            </button>
          );
        })}
      </div>
      <Button func={updateWorkout} text={text}></Button>
    </SectionWrapper>
  );
}
