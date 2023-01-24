import React from 'react'

export default function Button() {
    function onButtonClick() {
        alert("button is clicked");
    }
    return (
        <>
            <button onClick={onButtonClick}> Click Me </button>
        </>
    )
}
