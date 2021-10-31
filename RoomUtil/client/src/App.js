
import 'bootstrap/dist/css/bootstrap.min.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Report from './Repo/Report';
import Dashboard from './Dashboard/Dashboard';
import React from 'react';
import Header from './Components/Header';
import RoomList from './Room/Roomlist';
import RoomDetail from './Room/Roomdetail';


function App() {
  return (
    <Router>
      <div>  
        <Header /> 
        <Switch>
          <Route path="/Repo" component={Report}></Route> 
          <Route path="/Roomlist" component={RoomList}></Route>
          <Route path="/id/:roomid" component={RoomDetail}></Route>
          <Route path= "/" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
