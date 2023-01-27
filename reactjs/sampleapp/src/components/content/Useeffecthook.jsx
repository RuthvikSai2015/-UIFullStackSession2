import axios from 'axios';
import React, { useState } from 'react'

export default function Useeffecthook() {

    const [content, setContent] = useState([]);

    function fetchData() {
        // fetch('http://localhost:3002/students')
        //     .then(response => response.json())
        //     .then(data => setContent(data))
        //     .catch(error => console.log(error));

      
        axios.get('http://localhost:3002/students')
       // .then(response => response.json())
        .then(data => setContent(data))
        .catch(error => console.log(error));

    }
    return (
        <>
        <button onClick={() => fetchData()}>Fetch Data </button>
           
        </>
    )
}
