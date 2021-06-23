import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Schedule from './components/schedule/allFlights'
import FlightOrders from './components/flightOrders/flightOrders'
import Orders from './components/allOrders/orders'
import './App.css';


function App() {
  return (
    <div className="App">
      <>
      <Router>
        <Switch>
          <Route path="/"  exact component={Schedule}/>
          <Route path="/orders"   component={Orders}/>
          <Route path="/flight-orders/:flightId"  component={FlightOrders} />
        </Switch>
      </Router>
    </>
    </div>
  );
}

export default App;
