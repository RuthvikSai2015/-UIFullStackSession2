import React, { useState } from 'react'

export default function Useeffecthook() {

    const [content, setContent] = useState([]);

    function fetchData() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setContent(data))
            .catch();
    }
    return (
        <>
            <ul>
                {
                    content.map((user) => {
                        return (
                                <li><p>{user.id}</p>
                                <p>{user.name}</p>
                               </li>
                        )
                    })
                }
            </ul>
            {/* <ul><li></li></ul> */}
            <button onClick={() => fetchData()}>Fetch the Data </button>
        </>
    )
}
