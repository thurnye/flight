import React from 'react'
import Nav from 'react-bootstrap/Nav';
import * as allFlight from  '../../config/coding-assignment-schedule.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function allFlights() {
    const today = [] //holds today's schedules
    const nextDay = [] //holds nxtday schedule


     allFlight.default.forEach(el => {
        if(el.day === 1){
            const todayFlight =  <tr key={el.flight_number} >
                <th scope="row">{el.flight_number}</th>
                <td>{el.departure_city}</td>
                <td>{el.arrival_city}</td>
                <td>
                    <button className="btn"  onClick={(e)=> handleClick(el.flight_number)}><FontAwesomeIcon icon={["far", "eye-slash"]} /></button>
                </td>
            </tr>
            today.push(todayFlight)
           
        }else{
            const tomorrowFlight =  <tr key={el.flight_number}>
                <th scope="row">{el.flight_number}</th>
                <td>{el.departure_city}</td>
                <td>{el.arrival_city}</td>
                <td>
                    <button className="btn"  onClick={(e)=> handleClick(el.flight_number)}><FontAwesomeIcon icon={["far", "eye-slash"]} /></button>
                </td>
            </tr>
            nextDay.push(tomorrowFlight)
        }
    })
    
    // get the flight number when the user clicks on a scheduled flight
    const handleClick = (e) => {
        window.location.href = `/flight-orders/${e}`
    }

    return (
        <>
            <div className="navigation ">
                <p>Transport.ly <small className="text-muted">an automated air freight scheduling service</small></p>
                <div className="link">
                    <Nav.Link  href="/orders">view Orders</Nav.Link>
                </div>
            </div>
            <section className="today">
            <div className="container">
                <p>Scheduled Flight for Day 1</p>
            </div>
                <div className=" card container table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Flight No.</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Arrival</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {today}
                            
                        </tbody>
                    </table>
                
                </div>
            </section>

            <div className="container">
                <p>Scheduled Flight for Day 2</p>
            </div>

            <section className="nxtDay">
                <div className=" card container table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Flight No.</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Arrival</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {nextDay}
                            
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

