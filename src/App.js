import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import ProfilePelis from "./views/ProfilePelis";
import ProfilePerson from "./views/ProfilePerson";
import ProfileProgTV from "./views/ProfileProgTV";
import Register from "./views/Register";
import Login from "./views/Login";
import PelisDetails from "./components/PelisDetails";
import PersonDetails from "./components/PersonDetails";

function App() {

  return (
    <Router>
      <Navbar/>
      <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/register">
						<Register />
					</Route>
					<Route exact path="/login">
						<Login />
					</Route>
          <Route exact path="/pelis">
            <ProfilePelis/>
          </Route>
          <Route exact path="/pelis/:id">
        <PelisDetails/>
        </Route>
          <Route exact path="/person">
            <ProfilePerson/>
          </Route>
          <Route exact path="/person/:id">
        <PersonDetails/>
        </Route>
          <Route exact path="/progtv">
            <ProfileProgTV/>
          </Route>
          <Route to="*">
            <h2>Not found - 404</h2>
          </Route>
      </Switch>
    </Router>
  );
}

export default App;
