import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import server from '../ServerInterface/server';
//can use either "class" or "function" keyword
class Home extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {
            username: '',
            quizzes: []
        };
    }
    componentDidMount(){
        server.fetchQuizzes().then(x => this.setState({quizzes: x})).catch(e => console.log(e));
    }
    render() {
        let username = '';
        const location = this.props.location;
        if (location) {
            if (location.state) {
                if (location.state.user) {
                    username = location.state.user;
                }
            }
        };
        return(
            //HTML code to display initially
            <div id="mainBody">
                <div id="header"><h1>Welcome to ImageQuiz!</h1></div>
                <div id="loginLink">
                    {username.length > 0 ? username 
                    : <Link to='/login' id='logintext'>Login</Link>}
                </div>
                <div id="flowersDiv"> 
                    {this.state.quizzes.map(q => 
                    <Link to = {{pathname: '/quiz', state:{quiz:q, user:username} }}>
                    <figure>
                    <img src = {require('../images/'+q.picture)} alt = {q.title} ></img>
                    <figcaption>{q.title}</figcaption>
                    </figure>
                    </Link>)}
                </div>
            </div>
        );
    }
}
export default Home;