import React, { useState,useEffect } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    //Mounting phase
    useEffect(() => {
        console.log("in mounting phase");
    },[]);

    //updating phase
    useEffect(() => {
        console.log("on update phase");
    },[count]);


    useEffect(() => {
    //    WebSocket.OPEN()
    //       console.log("count state variable has been modified ");
    // return() => WebSocket.disconnect();
    },[count]);
  return (
    <>
      <p> You Clicked {count} times</p>
      <button onClick={() => setCount(count+1)}>Click Me!</button>
    </>
  )
}
