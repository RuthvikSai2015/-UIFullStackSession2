import React, { Fragment } from 'react'
import { useState } from 'react';
import axios  from 'axios';
export default function Productadd() {

  const initialValues = { studentId:"",studentName:"",studentMarks:""};
  const [formValues,setFormValues] = useState(initialValues);
  const handleInputChange = (event) => {
      console.log(event.target);
      const { name, value} = event.target;
      setFormValues({
        ...formValues, [name] : value
      })
      console.log(formValues);
    //  alert(document.getElementById("studentId").value);
  }
  const submitForm=() => {
  //  event.preventDefault();
    axios({
      url:"http://localhost:3002/addStudent",
      method:"POST",
      data : formValues // no conversion
    })
  }
  return (
    <Fragment>
      <form>
        <label>Student Id</label><input style={{"width":"50%"}} className="form-control" type="text" name="studentId" id="studentId" onChange={handleInputChange}/>
        <label>Student Name</label><input  style={{"width":"50%"}} className="form-control"type="text" name="studentName" onChange={handleInputChange}/>
        <label>Student Marks</label><input   style={{"width":"50%"}} className="form-control" type="text" name="studentMarks" onChange={handleInputChange}/>
        <button onClick={submitForm}>Submit</button>
      </form>
    </Fragment>

  )
}
