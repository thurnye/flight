import React from 'react'
import Nav from 'react-bootstrap/Nav';
import * as allOrders from '../../config/coding-assigment-orders.json'
export default function orders() {
    orders = []
    console.log(allOrders.default)
    for( let item in allOrders.default){
        console.log(allOrders.default[item].destination)
        const order =  <tr>
                    {/* <th scope="row">{item}</th> */}
                    {/* <td>{allOrders.default[item].destination}</td> */}
                    {/* <td>{}</td> */}
                 </tr>
                  orders.push(order)
    }
    return (
        <>
            <Nav.Link className="navbar-brand" href="/">VIEW FLIGHT SCHEDULE</Nav.Link>
            <div class="navigation">
                <p>Transport.ly <small className="text-muted">an automated air freight scheduling service</small></p>
                <Nav.Link className="" href="/">VIEW FLIGHT SCHEDULE</Nav.Link>
            </div>
            <section className="today">
                <div className=" card container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Flight No.</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Arrival</th>
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
