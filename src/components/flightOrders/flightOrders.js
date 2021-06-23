import React from 'react'
import { useParams } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import * as allOrders from '../../config/coding-assigment-orders.json'
import * as allFlight from  '../../config/coding-assignment-schedule.json'




export default function Orders() {

    // get the id of the flight through the parameter
    const params = useParams()
    const flightId =  params.flightId
  
    // find single flight
    const flight = allFlight.default.find(({flight_number})=> flight_number === Number(flightId))

    
    // store the info about the flight and the order
    const orders = []


    // find all orders associated with the flight
    for( let item in allOrders.default){
        
        if(allOrders.default[item].destination === flight.arrival_city){

            // get the information from the flight order and attach it to the corresponding flight.
            const orderItem = {
                orderNumber: item,
                flightNumber: flight.flight_number,
                departure: flight.departure_city,
                arrival: allOrders.default[item].destination,
                day: flight.day
            }
            console.log(orderItem)
            orders.push(orderItem)
        }
    }

    return (
        <>
            <div className="navigation ">
                <p>Transport.ly <small className="text-muted">an automated air freight scheduling service</small></p>
                <div className="link">
                    <Nav.Link className="" href="/">view flight schedule</Nav.Link>
                </div>
            </div>
            <section className="flight-orders">
                <div className="  container">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Order</th>
                                <th scope="col">Flight</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Arrival</th>
                                <th scope="col">Day</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map(el=>{
                                return (
                                    <tr key={el.orderNumber}>
                                        <th scope="row">{el.orderNumber}</th>
                                        <th scope="row">{el.flightNumber}</th>
                                        <td>{el.departure}</td>
                                        <td>{el.arrival}</td>
                                        <td>{el.day}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}
