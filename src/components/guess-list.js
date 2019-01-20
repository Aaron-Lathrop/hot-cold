import React from 'react';
import './guess-list.css';

export default function GuessList(props) {

    const guesses = props.guessList.map((guess,index) => 
        <li key={index} className="guesslist__item">{guess}</li>
    )

    return (
        <div className="guesslist__container">
            <h2>You've made {guesses.length} so far:</h2>
            <ul className="guesslist__list">{guesses}</ul>
        </div>
    );
}