import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Components/Sidebar";
import "./Room.css";
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card';
import patient from './patient.png'
import { useParams } from "react-router";
function ConstructRoomObject(id, doc){
    let result = []
    for(let i = 0; i < 20; i++){
        if (doc[i].doc.RoomID === id){
            result.push({
                humanID: doc[i].doc.HumanID,
                heartbeat: doc[i].doc.heartbeat,
                bodyTemp: doc[i].doc.bodytemp,
                location: "(" + doc[i].doc.X_axis + "," + doc[i].doc.Y_axis + ")"
            })
        }
    }

    return result
}


function RoomDetail(){
    const { roomid } = useParams()
    const data = JSON.parse(localStorage.getItem("data") || "[]");
    const room01 = ConstructRoomObject(1, data)
    const room02 = ConstructRoomObject(2, data)
    const room03 = ConstructRoomObject(3, data)
    const room04 = ConstructRoomObject(4, data)
    const room05 = ConstructRoomObject(5, data)
    const room06 = ConstructRoomObject(6, data)

    const roomData = [room01, room02, room03, room04, room05, room06]
    const currentRoom = roomData[roomid - 1]
    
    if (currentRoom.length === 0){
        return(
            <h1 className="nodata">No data for Room {roomid}</h1>
        )
    }

    else return(


        <div className="roomdetail">

            <div>
             <Sidebar />
            </div>

            <div className="roomdetail-right">

                <h1>
                    <Badge bg="primary">Room {roomid}</Badge>
                </h1>
                <br></br>

                <div className="patients-information">

                    <div className="patients-in-the-room">
                        <ul>
                            {currentRoom.map(person => <li> ID: {person.humanID}</li>)}
                        </ul>
                </div>

                

                    
                    <div className="patients-detail">
                        <ul>

                            {currentRoom.map(person =>                            <li> 
                                 <Card>
                                    <Card.Img variant="top" src={patient} style={{width:50, height:50}}/>
                                    <Card.Body>
                                    <Card.Title>ID: {person.humanID}</Card.Title>
                                    <Card.Text>
                                        <strong>Body Temperature: </strong>{person.bodyTemp} &#8451;<br></br>
                                        <strong>location: </strong>{person.location}<br></br>
                                        <strong>heartbeat: </strong> {person.heartbeat} BPM<br></br>
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </li> )}

            
                        </ul>

                    </div>


                </div>

            </div>
        </div>

    )
}

export default RoomDetail;