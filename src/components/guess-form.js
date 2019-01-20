import React, {Component} from 'react';
import './guess-form.css';

export default class GameForm extends Component {

    onSubmit(e) {
        e.preventDefault();
        
        if(this.props.onMakeGuess) {
            const guess = this.guess.value;
            this.props.onMakeGuess(guess)
        }
        this.guess.value = '';
        this.guess.focus();
    }

    render() {
        return (
            <form className="guessform" onSubmit={e => this.onSubmit(e)}>
                <label htmlFor="guess" className="guessform__label">Guess</label>
                <input type="number" 
                       name="guess" 
                       ref={input => this.guess = input} 
                       placeholder="Guess a number" 
                       required />
                <input type="submit" value="Guess" disabled={this.props.disabled} />
            </form>
        );
    }
    
}