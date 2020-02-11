import React from 'react'

export default function Header() {
    return (
        <header>
            <h1 style={headerStyle}>To-Do List</h1>
        </header>
    )
}

const headerStyle = {
    background: 'black',
    color: 'white',
    textAlign: 'center',
    padding: '10px'
}
