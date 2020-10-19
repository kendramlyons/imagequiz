import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
//can use either "class" or "function" keyword
class Home extends React.Component {
    constructor(props) { //'props' is always passed to constructor
        super(props); //have to have 'super' or else error
        this.state = {
            username: ''
        };
    }

    // body = () => {
    //     return(
    //     <div>Welcome to Imagequiz!</div>,
    //     <div id="flowersDiv"> 
    //     </div>
    //     );
    // }

    render() {
        let dummyArray = ['cherryblossom.png', 'daisy.jpg'];
        class Flower {
           constructor(name, pictureName) {
               this.name = name;
               this.picture = pictureName;
            }
        }
       let daffodil = new Flower('Daffodil', 'daffodil.png');
       let cherryblossom = new Flower('Cherry blossom', 'cherryblossom.png');
       let lily = new Flower('Lily', 'lily.jpg');
       let daisy = new Flower('Daisy', 'daisy.jpg');
       let sunflower = new Flower('Sunflower', 'sunflower.png');
       let tulip = new Flower('Tulip', 'tulip.png');
       let rose = new Flower('Rose', 'rose.png');
       let waterlily = new Flower('Water lily', 'waterlily.png');
       
       let flowers = [
             cherryblossom,
             daffodil,
             daisy,
             lily,
             rose,
             sunflower,
             tulip,
             waterlily
       ];

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
            <div>
                <div className="loginButton">
                    {username.length > 0 ? username 
                    : <Link to='/login'>Login</Link>}
                </div>
                <div>Welcome to Imagequiz!</div>
                <div id="flowersDiv"> 
                    {flowers.map(p => <img src = {require('../images/'+p.picture)} alt = {p.name}></img>)}
                </div>
            </div>
        );
    }
}
export default Home;