import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import PlaceDetails from './components/PlaceDetails/PlaceDetails';


function App() {
  return (
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route to="/place/:placeName">
            <PlaceDetails/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
