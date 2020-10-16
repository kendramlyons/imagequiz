import React from 'react';
import './Home.css';
// import Login from './Login';
//can use either "class" or "function" keyword
class Home extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {
            showLoginForm: false,
            username: '',
            authenticated: false
        };
    }

    login = () => { //show login page
        //needs a state change
        this.setState({ //changing states causes page to re-render
            showLoginForm: true
        });
    }

    onSubmit = (event) => {
        //check if user has provided input for user
        if(this.state.username.trim().length > 0) {
            this.setState({authenticated:true});
        }
        event.preventDefault(); //tells the browser not to do default 
    }

    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});
    }

    body = () => {
        return(
        <div>Hello from my homepage!</div>,
        <div id="flowersDiv"> 

        </div>
        );
    }

    render() {
        if((!this.state.authenticated) && this.state.showLoginForm) {
            //shows 
            return(
                <form onSubmit={this.onSubmit}>
                    <label>Username:</label>
                    <input 
                    type="text" 
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                    ></input>
                    <button type="submit">Login</button>
                </form>
            );
        }
        return(
            //HTML code to display initially
            <div>
                <div className="loginButton">
                 {this.state.authenticated ? this.state.username 
                    : <button onClick={this.login}>Login</button>}
                </div>
                {this.body()}
            </div>
        );

    }
}

export default Home;