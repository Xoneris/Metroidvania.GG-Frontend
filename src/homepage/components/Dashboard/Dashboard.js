import './dashboard.css';
import { Routes, Route, Link } from 'react-router-dom';

import EditGames from './EditGames';

export default function Dashboard () {

    return (
        <section className="dashboard">
            <div className="wrapper">
                <div className="dashboard-nav">
                    <h3>Dashboard</h3>
                    <ul>
                        <li><Link to="new">Add a Game</Link></li>
                        <li><Link to="all">Edit Games</Link></li>
                        <li><Link to="reports">Reports</Link></li>
                        <li><Link to="contact">Contact</Link></li>
                        <li><Link to="logout">Logout</Link></li>
                    </ul>
                </div>
                <div className="dashboard-content">
                    <Routes>
                        <Route path="new" element={<p>new</p>} ></Route>
                        <Route path="all" element={<EditGames/>} ></Route>
                        <Route path="reports" element={<p>reports</p>} ></Route>
                        <Route path="contact" element={<p>contact</p>} ></Route>
                        <Route path="logout" element={<p>logout</p>} ></Route>
                    </Routes>
                </div>
            </div>
        </section>
    )
}   