import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import firebase from "firebase"
import Space from './IssSpace'
import Home from './Home'
import Astronauts from './Astronauts'

const Navbar = () => (

    <Router>

        <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
            <div className="container">
                <Link to='/'><a className="navbar-brand" href="/">Home!</a></Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link to="/astronauts"><a className="nav-link" href="/astronauts">Astronauts</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/space"><a className="nav-link" href="/space">ISS Location</a></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/"><a className="nav-link" href="/" onClick={() => firebase.auth().signOut()}>Sign out!</a> </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/astronauts' render={() => <Astronauts />} />
        <Route exact path='/space' render={() => <Space />} />


    </Router>



);

export default Navbar;