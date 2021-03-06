import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
import Quiz from './components/Quiz';
import { 
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path = '/' render = {props => <Home {...props} />}>         
            </Route>
            <Route path = '/login'>
                <Login />
            </Route>
            <Route path = '/quiz' render = {props => <Quiz {...props}/>}>
            </Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
