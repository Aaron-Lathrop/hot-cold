import React, {Component} from 'react';
import './game.css';

import Nav from './nav';
import Feedback from './feedback';
import GuessForm from './guess-form';
import GuessList from './guess-list';

export default class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            guess: null,
            guessList: [],
            feedback: "Guess a number between 0 and 100...",
            correctAnswer: Math.floor(Math.random() * 100),
            gameWon: false
        };
        this.setFeedBack = this.setFeedBack.bind(this);
        this.addToGuessList = this.addToGuessList.bind(this);
        this.makeGuess = this.makeGuess.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.winGame = this.winGame.bind(this);
    }

    setFeedBack(feedback) {
        this.setState({
            feedback
        })
    }

    addToGuessList(guess) {
        this.setState({
            guessList: [...this.state.guessList, guess]
        })
    }

    resetGame() {
        this.setState({
            guess: null,
            guessList: [],
            feedback: "Guess a number between 0 and 100...",
            correctAnswer: Math.floor(Math.random() * 100),
            gameWon: false
        })
    }

    winGame() {
        this.setState({
            gameWon: true
        })
    }

    makeGuess(guess) {
        guess = parseInt(guess, 10);

        if(guess < 0 || guess > 100) {
            this.setFeedBack("Guesses must be between 0 and 100");
            return null;
        }

        if(this.state.guessList.includes(guess)) {
            this.setFeedBack("You already guessed that number, please guess a new number.")
            return null;
        }

        const correctAnswer = this.state.correctAnswer;
        const difference = Math.abs(correctAnswer - guess);

        if(guess === correctAnswer) {
            this.setFeedBack(`You did it! The correct answer was ${correctAnswer}`);
            this.winGame();
        } else if(difference <= 10) {
            this.setFeedBack("HOT");
        } else if(difference <=20) {
            this.setFeedBack("WARM");
        } else if(difference <=30) {
            this.setFeedBack("LUKE WARM");
        } else if(difference <=60) {
            this.setFeedBack("COLD");
        } else {
            this.setFeedBack("ICE COLD")
        }

        this.addToGuessList(guess);

    }


    render() {
        return (
            <div className="game__container">
                <Nav newGame={this.resetGame} />
                <h1 className="game__header">{"Hot & Cold Guessing Game"}</h1>
                <Feedback feedback={this.state.feedback} />
                <GuessForm onMakeGuess={this.makeGuess} disabled={this.state.gameWon} />
                <GuessList guessList={this.state.guessList} feedback={this.state.feedback} />
            </div>
        )
    }
}