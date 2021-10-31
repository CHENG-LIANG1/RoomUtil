// in src/Dashboard.js
import React, {useState}from "react";
import './Dashboard.css'; 
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import CDB from "../Service/CDB";

function GetNumOfRoomsInUse(data){
    let allRooms = data.map(doc => doc.doc.RoomID)

    const result = new Set(allRooms)
    return result
}

function Dashboard() {

    const [doc, setDoc] = useState([])

    CDB.get("/assignment2/_all_docs?include_docs=true", {
        responseType: 'json'
    })
    .then(res => setDoc(res.data.rows))

    const today = doc.slice(0, 20)

    const rooms =  GetNumOfRoomsInUse(today)
    localStorage.setItem("totalData", JSON.stringify(doc))
    localStorage.setItem("data", JSON.stringify(today))

    return(

            <div className="Dashboard">
                <Sidebar />
                <div className="Dashboard-right">
                <div className="cards">
                        <ul>

                            <li>
                            <div className="heading-2">
                                <h1>
                                    <Badge bg="primary">Room Usage</Badge>
                                </h1>
                            </div>
                            <br></br>
                            <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Rooms</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{rooms.size } out of 6 rooms in use</Card.Subtitle>
                                <Card.Link href="/Roomlist">Detail</Card.Link>
                            </Card.Body>
                            </Card>
                            </li>

                            <li>
                            <div className="heading-2">
                                <h1>
                                    <Badge bg="primary">Report</Badge>
                                </h1>
                            </div>
                            <br></br>
                            <Card style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Weekly Report</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Weekly report</Card.Subtitle>

                                <Link to="/Repo"><Card.Link href="/Repo">View Detail</Card.Link></Link>
                            </Card.Body>
                            </Card>
                            </li>

                        </ul>

                    </div>

                <div className="today">
                    <h1>
                        <Badge bg="primary">Today Usage</Badge>
                    </h1>
                </div>

                <div className="today-list">
                    <ul>
                        <li>
                            <Card
                                border="primary" style={{ width: '18rem' }}
                                >
                                <Card.Header>Number of rooms in use</Card.Header>
                                <Card.Body>
                                <Card.Title>{rooms.size}</Card.Title>

                                </Card.Body>
                            </Card>              
                        </li>


                        <li>
                            <Card
                                border="primary" style={{ width: '18rem' }}
                                >
                                <Card.Header>Number of people in the room</Card.Header>
                                <Card.Body>
                                <Card.Title> {today.length} </Card.Title>
                                </Card.Body>
                            </Card>  
                        </li>

                    </ul>

                </div>

                </div>

                </div>

        

    )
}

export default Dashboard;