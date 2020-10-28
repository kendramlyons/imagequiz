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
        let data = server.fetchQuizzes();
        this.setState({quizzes: data});
    }
    render() {
    //     class Flower {
    //        constructor(name, pictureName) {
    //            this.name = name;
    //            this.picture = pictureName;
    //         }
    //     }
    //    let daffodil = new Flower('Daffodil', 'daffodil.png');
    //    let cherryblossom = new Flower('Cherry Blossom', 'cherryblossom.png');
    //    let lily = new Flower('Lily', 'lily.jpg');
    //    let daisy = new Flower('Daisy', 'daisy.jpg');
    //    let sunflower = new Flower('Sunflower', 'sunflower.png');
    //    let tulip = new Flower('Tulip', 'tulip.png');
    //    let rose = new Flower('Rose', 'rose.png');
    //    let waterlily = new Flower('Water Lily', 'waterlily.png');
       
    //    let flowers = [
    //          cherryblossom,
    //          daffodil,
    //          daisy,
    //          lily,
    //          rose,
    //          sunflower,
    //          tulip,
    //          waterlily
    //    ];

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
                    <Link to = {{pathname: '/quiz', state:{quiz:q} }}>
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