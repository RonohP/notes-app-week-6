import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Navbar from './components/navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar/>
        <div className='outer'>
          <div className='inner'>
            <Switch>
              <Route exact path='/' component={Login} />
              <Route path='/sign-in' component={Login} />
              <Route path='/sign-up' component={Register} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
