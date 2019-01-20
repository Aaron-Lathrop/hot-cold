import React from 'react';
import './nav.css';

export default function Nav(props) {

    return (
        <nav className="navbar">
            <button onClick={() => props.newGame()}>+ New Game</button>
            <button>About</button>
        </nav>
    );
}