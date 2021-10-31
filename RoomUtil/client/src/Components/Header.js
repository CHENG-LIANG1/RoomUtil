import * as React from "react";
import './Component.css'; 
import { AiFillBell , AiFillSetting} from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import 'bootstrap/dist/css/bootstrap.min.css';



function Header() {

    return(

        <div>
                   <div className="topbar">


                        <div className="left">
                            <h1>Dashboard</h1>
                        </div>


                        <div className="right">
                            <ul>
                                <li>
                                    <AiFillBell size="2em"/>
                                </li>

                                <li>
                                    <AiFillSetting size="2em"/>
                                </li>

                                <li>
                                    <CgProfile size="2em" />
                                </li>
                            </ul>
                        </div>

                    </div>

                    <hr></hr>

        </div>

    )
}

export default Header;