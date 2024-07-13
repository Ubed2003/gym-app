import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCard from './ExcerciseCard'

export default function Workout(props) {
  const {workout} = props
  console.log(workout)
  return (
    <SectionWrapper id={'workout'}
    header={"Welcome to"}
    title={["The", "Danger", "Zone"]}>
      <div className='flex flex-col gap-4'>
       {
        workout.map((excercise, i) =>{
    return (
      <ExcerciseCard excercise={excercise} i={i}/>
    )
        })
       }
      </div>
      
       </SectionWrapper>
  )
}
