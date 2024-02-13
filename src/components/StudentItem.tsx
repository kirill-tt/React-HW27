import React from 'react'
import { Students } from '../types/Students'



export default function StudentItem({firstName, lastName, age}: Students) {
  return (
    <div>
        <p>{firstName}</p>
        <p>{lastName}</p>
        <p>{age}</p>
        </div>
  )
}