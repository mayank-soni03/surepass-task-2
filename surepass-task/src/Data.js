import {useEffect, useState, } from "react";
import './App.css';
import Modal from "./Modal";


function Data() {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("https://hub.dummyapis.com/employee?noofRecords=200&idStarts=1001").then((result)=>{
      result.json().then((resp)=> {
        // console.log('result',resp)
        setMyData(resp)
      })
    })
  },[])
  console.log(myData)
  return (
    <div>
      <h1>get api call </h1>
      <table border="1px">
        <tr>
          <td>ID</td>
          <td>Name</td>
          <td>Contact Number</td>
          <td>email</td>
          <td>Age</td>
          <td>DOB</td>
          <td>Image</td>
        </tr>
        {
          myData.map((item)=>
          <tr>
          <td>{item.id}</td>
          <td>{item.firstName} {item.lastName}</td>
          <td>{item.contactNumber}</td>
          <td>{item.email}</td>
          <td>{item.age}</td>
          <td>{item.dob}</td>
          <td><img src={item.imageUrl} /></td>
        </tr>
          )
        }
      </table>
    </div>
  );
}

export default Data;
