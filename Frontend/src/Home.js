
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div>
            <nav className="navbar bg-dark">
                <h1 onClick={toggleSidebar}>
                    <i className="fas fa-code"></i> Schools Hub
                </h1>
                <ul>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/studentenroll">studentenroll</Link></li>
                    <li><Link to="/academics">Academics</Link></li>
                    <li><Link to="/grades">Grade</Link></li>
                    <li><Link to="/staff-management">Staff-Management</Link></li>
                    <li><Link to="/fee-management">Fee-Management</Link></li>
                </ul>
            </nav>
            <section className="landing" >
                <div className="dark-overlay">
                    <div className="landing-inner">
                        <h1 className="x-large">Schools Hub</h1>
                        <p className="lead">
                            Create a developer profile/portfolio, share posts and get help from other developers
                        </p>
                    </div>
                </div>
            </section>
           
        </div>
    );
}

export default Home;
