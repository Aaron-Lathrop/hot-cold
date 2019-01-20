import React from 'react';
import './feedback.css';

export default function Feedback(props) {
    return (
        <div className="feedback__container">
            <h3>{props.feedback}</h3>
        </div>
    );
}