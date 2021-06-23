import React from 'react'
import Nav from 'react-bootstrap/Nav';
import * as allOrders from '../../config/coding-assigment-orders.json'

export default function allFlightOrders() {

    // store the orderItems to be displayed in the dom
    const orders = []


    // loop through the order object and push it into the order
    for (let item in allOrders.default){
       let orderItems =  <tr key={item}>
                <th scope="row">{item}</th>
                <td>{allOrders.default[item].destination}</td>
            </tr>
        orders.push(orderItems)
        
    }

    return (
        <>
            <div className="navigation">
                <p>Transport.ly <small className="text-muted">an automated air freight scheduling service</small></p>
                <div className="link">
                    <Nav.Link className="" href="/">view flight schedule</Nav.Link>
                </div>
            </div>

            <section className="orders">
                <div className="container">
                    <h6>All Orders</h6>
                </div>
                <div className="  container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Order Id</th>
                                <th scope="col">Destination</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders}
                        </tbody>
                    </table>
                </div>
            </section>

        </>
    )
}
