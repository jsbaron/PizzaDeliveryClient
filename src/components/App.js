import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import '../App.css';
import MainHeader from "./MainHeader";
import MainPage from './MainPage';
import LocationPage from './LocationPage';
import MenuPage from './MenuPage';
import PizzaPage from './PizzaPage';

class App extends Component {
  render () {
    return(
      <Router>
        <div>
          <MainHeader/>
          <Route exact path='/' component={MainPage}/>
          <Route exact path='/locations' component={LocationPage}/>
          <Route path='/menus' component={MenuPage}/>
          <Route path='/pizzas' component={PizzaPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
