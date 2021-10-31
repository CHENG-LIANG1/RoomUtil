import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "../Components/Sidebar";
import "./Room.css";
import Badge from 'react-bootstrap/Badge'
import Card from 'react-bootstrap/Card';


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

function RoomList(props){

    const data = JSON.parse(localStorage.getItem("data") || "[]");
    const room01 = ConstructRoomObject(1, data)
    const room02 = ConstructRoomObject(2, data)
    const room03 = ConstructRoomObject(3, data)
    const room04 = ConstructRoomObject(4, data)
    const room05 = ConstructRoomObject(5, data)
    const room06 = ConstructRoomObject(6, data)
    console.log(data)
    return(

        <div className="roomlist">

            <div>
             <Sidebar />
            </div>

            <div className="roomlist-right">

                    <h1>
                        <Badge bg="primary">Room List</Badge>
                    </h1>

                    <div className="room-number">
                    <ul >
                        <li>                   
                             <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>Room--1</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                    {room01.length} people in the room
                                </Card.Text>
                                <Card.Link href="/id/1">Detail</Card.Link>
                                </Card.Body>
                            </Card>
                        </li>

                        <li>
                                <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>Room--2</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                {room02.length} people in the room
                                </Card.Text>
                                <Card.Link href="/id/2">Detail</Card.Link>
                                </Card.Body>
                            </Card>
                        </li>

                        <li>
                                <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>Room--3</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                {room03.length} people in the room
                                </Card.Text>
                                <Card.Link href="/id/3">Detail</Card.Link>
                                </Card.Body>
                            </Card>
                        </li>

                        <li>
                                <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>Room--4</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                {room04.length} people in the room
                                </Card.Text>
                                <Card.Link href="/id/4">Detail</Card.Link>
                                </Card.Body>
                            </Card>
                        </li>

                        <li>
                                <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>Room--5</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                {room05.length} people in the room
                                </Card.Text>
                                <Card.Link href="/id/5">Detail</Card.Link>
                                </Card.Body>
                            </Card>
                        </li>

                        <li>
                                <Card border="primary" style={{ width: '18rem' }}>
                                <Card.Header>Room--6</Card.Header>
                                <Card.Body>
                                <Card.Text>
                                {room06.length} people in the room
                                </Card.Text>
                                <Card.Link href="/id/6">Detail</Card.Link>
                                </Card.Body>
                            </Card>
                        </li>

                    </ul> 

                    </div>
          
 
            </div>
        </div>

    )
}

export default RoomList;