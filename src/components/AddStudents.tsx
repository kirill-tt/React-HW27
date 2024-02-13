import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react'



export default function AddStudents() {
    type StudentData = {
        firstName: string,
        lastName: string,
        age: string
    };
    const [studentData, setStudentData] = useState<StudentData>({firstName:"",lastName:"",age:""});
    const changeHandler = (event: ChangeEvent<HTMLInputElement>):void => {
        const {value, name} = event.target;
        console.log(`value: ${value} name: ${name}`);
        const newData: StudentData = {...studentData, [name]: value};
        setStudentData(newData);
        console.log(newData);
    }
    const submitHandler:FormEventHandler = (e:FormEvent):void => {
        e.preventDefault();
    }
  return (
    <div>
        <p>Forma dobavleniya studentov</p>
        <form onSubmit={submitHandler}>
            <input value={studentData.firstName} type="text"  name='firstName' placeholder='firsName' onChange={changeHandler}  />
       <input value={studentData.lastName} type="text" name='lastName' placeholder='lastName' onChange={changeHandler} />
       <input value={studentData.age} type="text" name='age' placeholder='age' onChange={changeHandler} />
       <button>Dobavity</button>
        </form>
    </div>
  )
}