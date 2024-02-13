import React from 'react'
import { Students } from '../types/Students'
import StudentItem from './StudentItem';



export default function StudentsList() {
   const students: Students[] = [
    {firstName: "Alex", lastName: "Klein", age: 21},
        {firstName: "Julia", lastName: "Jung", age: 25},
        {firstName: "Marie", lastName: "Bott", age: 20},
        {firstName: "Max", lastName: "Schneider", age: 24}
   ];
  return (
    <div>
        {
            students.map((student) => <StudentItem key={student.lastName} {...student}/>)
        }

    </div>
  )
}