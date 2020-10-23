import React from 'react';
import quizzes from '../ServerInterface/data';
class Quiz extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {
            title: '',
            questions: [],
            correct: '',
            score: 0
            
        };
    };
    render(){

        return(<div>
            <img src = {require('../images/cherryblossom.png')} alt = 'cherry blossom'>
            </img>
            <form>
            </form>
            this is a quiz component
            </div>)
    }
}
export default Quiz;