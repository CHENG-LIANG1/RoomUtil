import * as React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Line} from "react-chartjs-2";
import Sidebar from "../Components/Sidebar";
import "./Report.css";
import Badge from 'react-bootstrap/Badge'


function GetNumOfPeople(data, date){
    let counter = 0

    for (let i = 0; i < data.length; i++){
        console.log(data[i].doc.timestamp.substring(0,10))
        if(data[i].doc.timestamp.substring(0,10) === date){
            counter++
        }
    }
    return counter
}

function Report(){
    const data = JSON.parse(localStorage.getItem("totalData") || "[]");

    let timeStamps = data.map(doc => doc.doc.timestamp.substring(0,10))

    const result = new Set(timeStamps)


    const dataSet = []

    console.log(result.size)
    for (let item of result){
        dataSet.push({date: item,
                      number: GetNumOfPeople(data,item)
                      })
    }

    console.log(dataSet)
    const labels = []
    const values = []

    for (let i = 0; i < dataSet.length; i++){
        labels.push(dataSet[i].date)
        values.push(dataSet[i].number)
    }


    return(

        <div className="report">

            <div>
             <Sidebar />
            </div>

            <div className="chart">
            <ul>
                <li>
                    <h1>
                        <Badge bg="primary">Weekly Report</Badge>
                    </h1>
                </li>


                <li>            
                    <Line
                        data={{
                            labels: labels,
                            datasets:[
                                {

                                    label:"Number of people",
                                    data:values

                                }
                            ]
                        }}
                        height={500}
                        width={1200}
                    />
                </li>
            </ul>
 
            </div>
        </div>

    )
}

export default Report;