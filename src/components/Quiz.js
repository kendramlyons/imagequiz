import React from 'react';
import Question from './Question';
import { Link } from 'react-router-dom';
import './Quiz.css';
import server from '../ServerInterface/server';
class Quiz extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {
            cursor: 0,
            score: 0,
            lastAnswerCorrect: false,
            quiz: { questions: [] }
        };
    };
    componentDidMount() {
        let quiz = {};
        const location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.quiz) {
                    quiz = location.state.quiz;
                    server.fetchQuestions(quiz.id).then(x => this.setState({ quiz: { questions: x } })).catch(e => console.log(e));
                }
            }
        };

    }
    goToNext = () => {
        if (this.state.cursor < this.state.quiz.questions.length - 1) {
            let newScore = this.state.score;
            if (this.state.lastAnswerCorrect) {
                newScore = newScore + 1;
            }
            this.setState({ cursor: this.state.cursor + 1, score: newScore });
        }
        else if ((this.state.cursor === this.state.quiz.questions.length - 1)
            && this.state.score < 6) {
            let finalScore = this.state.score;
            if (this.state.lastAnswerCorrect) {
                finalScore += 1;
            }
            this.setState({ score: finalScore });
        }
    }
    goBack = () => {
        if (this.state.cursor > 0) {
            this.setState({ cursor: this.state.cursor - 1, lastAnswerCorrect: false });

        }
    }
    updateScore = (correct) => {
        this.setState({ lastAnswerCorrect: correct });
    }
    render() {
        let quiz = this.state.quiz;
        if (quiz.questions.length === 0) {
            return (<div>Data is Loading</div>)
        }
        console.log(quiz.questions)
        console.log(this.state.cursor)
        return (<div>
            <div id='home'><Link to={{pathname:'/', state:{user: this.props.location.state.user}}} id='hometext'>ImageQuiz</Link></div>
            <div id='quiz'>
                <Question item={quiz.questions[this.state.cursor]} cursor={this.state.cursor}
                    onAnswer={this.updateScore}></Question>
            </div>
            <div id='buttons'>
                <button onClick={this.goBack}>Back</button>
                <button onClick={this.goToNext}>Next</button>
            </div>
            <div id="score">Score: {this.state.score}/6</div>
        </div>
        );
    }
}
export default Quiz;