import React from 'react';
import Question from './Question';
class Quiz extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {           
            cursor: 0,
            score: 0,
            lastAnswerCorrect: false
        };
    };
    goToNext = () => {
        if (this.state.cursor < this.props.location.state.quiz.questions.length - 1) {
            let newScore = this.state.score;
            if (this.state.lastAnswerCorrect) {
                newScore = newScore + 1; 
            }
            this.setState({cursor : this.state.cursor + 1, score: newScore});
        }
    }
    goBack = () => {
        if (this.state.cursor > 0) {
            this.setState({cursor: this.state.cursor - 1});
        }
    }
    updateScore = (correct) => {
        this.setState({lastAnswerCorrect: correct});
    }
    render(){
        let quiz = {};
        const location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.quiz) {
                    quiz = location.state.quiz;
                }
            }
        };
        return(<div>
                <Question item={quiz.questions[this.state.cursor]} cursor={this.state.cursor}
                    onAnswer={this.updateScore}></Question>
                <button onClick = {this.goBack}>Back</button>
                <button onClick = {this.goToNext}>Next</button>
                <div>Score: {this.state.score}</div>
            </div>
        );
    }
}
export default Quiz;