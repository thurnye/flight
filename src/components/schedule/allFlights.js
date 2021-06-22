import React from 'react'
import Nav from 'react-bootstrap/Nav';
import * as allFlight from  '../../config/coding-assignment-schedule.json'
import './allflight.css'





export default function allFlights() {
    const today = []
    const nextDay = []

     allFlight.default.map(el => {
        if(el.day === 1){
            const todayFlight =  <tr onClick={(e)=> handleClick(el.flight_number)} key={el.flight_number} >
                <th scope="row">{el.flight_number}</th>
                <td>{el.departure_city}</td>
                <td>{el.arrival_city}</td>
            </tr>
            today.push(todayFlight)
           
        }else{
            const tomorrowFlight =  <tr onClick={()=> handleClick(el.flight_number)} key={el.flight_number}>
                <th scope="row">{el.flight_number}</th>
                <td>{el.departure_city}</td>
                <td>{el.arrival_city}</td>
            </tr>
            nextDay.push(tomorrowFlight)
        }
    })
    
    // get the flight number when the user clicks on a scheduled flight
    const handleClick = (e) => {
        window.location.href = `/orders/${e}`
    }

    return (
        <>
            <div className="navigation">
                <p>Transport.ly <small className="text-muted">an automated air freight scheduling service</small></p>
                <Nav.Link className="" href="/orders">VIEW ORDERS</Nav.Link>
            </div>
            <section className="today">
                <div className=" card container table-responsive">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Flight No.</th>
                                <th scope="col">Departure</th>
                                <th scope="col">Arrival</th>
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

