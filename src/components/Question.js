import React from 'react';

class Question extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {
            userAnswers : []
        };
    };
    saveAnswer = (e) => {
        let selectedValue = e.target.value;
        let x = this.state.userAnswers;
        x[this.props.cursor] = selectedValue;
        let isCorrect = selectedValue === this.props.item.correct;
        this.props.onAnswer(isCorrect);
        this.setState({userAnswers : x});
    };
    render() {
        return (<div>
            <img src = {require('../images/'+this.props.item.picture)} alt={this.props.item.picture}></img>
            <div>
                {this.props.item.title}
            </div>
            <div>
                {this.props.item.choices.map(c => 
                    <div>
                    <input type="radio" id={c} name="choice" value={c} onChange={this.saveAnswer} 
                        checked={this.state.userAnswers[this.props.cursor] === c ? 'checked' : ''}></input>
                    <label for={c}>{c}</label><br></br>
                    </div>
                    )}
            </div>
        </div>);
    };
}
export default Question;