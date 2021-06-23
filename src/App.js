import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Schedule from './components/schedule/allFlights'
import Orders from './components/orders/orders'
import './App.css';


function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Switch>
          <Route path="/"  exact component={Schedule}/>
          <Route path="/orders/:flightId"  component={Orders} />
          
        </Switch>
      </Router>
    </>
    </div>
  );
}

export default App;
