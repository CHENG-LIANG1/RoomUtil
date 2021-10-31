import * as React from "react";
import '../Dashboard/Dashboard.css'; 
import {  AiFillHome} from "react-icons/ai";
import { MdBedroomParent } from "react-icons/md";
import { BiHelpCircle } from "react-icons/bi";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";




function Sidebar(props) {

    return(
            
                    <div className="Sidebar">
                        <ul>
                            <li><Link to="/"><AiFillHome size="2em" /> Home</Link></li>
                            <li><Link to={{
                                pathname: "/Roomlist",
                                state:{data: props.data}
                                }}><MdBedroomParent size="2em" /> Room</Link></li>
                            <li><BiHelpCircle size="2em" /> Help</li>
                            <li></li>
                        </ul>
                    </div>             
        

    )
}

export default Sidebar;