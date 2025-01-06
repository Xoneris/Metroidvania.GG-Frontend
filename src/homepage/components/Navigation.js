import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import { searchBoxContext } from '../Homepage';


    
function Navigation() {

    const [navOpen, setNavOpen] = useState(false)
    const searchBox = useContext(searchBoxContext)

    return (
        <nav>
            <ul>
                <NavLink to="/"><li>Home</li></NavLink>
                <div className="dropdown-item">
                    <li>In Development</li>
                    <div className="dropdown-content">
                        <ul>
                            {/* <NavLink to="/2024"><li>2024</li></NavLink > */}
                            <NavLink to="/2025"><li>2025</li></NavLink>
                            <NavLink to="/2026"><li>2026</li></NavLink>
                            <NavLink to="/TBD"><li>TBD</li></NavLink>
                            <NavLink to="/EarlyAccess"><li>Early Access</li></NavLink>
                            <NavLink to="/Kickstarter"><li>Upcoming Kickstarter</li></NavLink>
                        </ul>
                    </div>
                </div>
                <NavLink to="/Demo"><li>Demos</li></NavLink>
                <NavLink to="/Released"><li>Released</li></NavLink>
                <div className="dropdown-item">
                    <li>Platforms</li>
                    <div className="dropdown-content">
                        <ul>
                            <NavLink to="/Steam"><li>Steam</li></NavLink >
                            <NavLink to="/Epic"><li>Epic Games</li></NavLink>
                            <NavLink to="/GOG"><li>GOG</li></NavLink>
                            <NavLink to="/Playstation"><li>Playstation</li></NavLink>
                            <NavLink to="/Xbox"><li>Xbox</li></NavLink>
                            <NavLink to="/switch"><li>Nintendo Switch</li></NavLink>
                        </ul>
                    </div>
                </div>
                <NavLink to="/AllGames"><li>All Games</li></NavLink>
                <div className="nav-search">
                    <input type="text" onClick={() => {searchBox.setShowSearch(!searchBox.showSearch)}}  />
                </div>
                
            </ul>
            <div className="wrapper">
                <div className="responsive-nav-search">
                    <input type="text" onClick={() => {searchBox.setShowSearch(!searchBox.showSearch)}}  />
                </div>
                <div className="responsive-menu-icon" onClick={() => setNavOpen(!navOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            

            <div className="responsive-nav-menu" id={navOpen ? "open" : "closed"}>
            <ul>
                <NavLink to="/" onClick={() => setNavOpen(!navOpen)}><li>Home</li></NavLink><hr/>
                <li>In Development</li>
                <li>
                    <ul>
                        <NavLink to="/2024" onClick={() => setNavOpen(!navOpen)}><li>2024</li></NavLink>
                        <NavLink to="/2025" onClick={() => setNavOpen(!navOpen)}><li>2025</li></NavLink>
                        {/* <NavLink to="/2026"><li>2026</li></NavLink> */}
                        <NavLink to="/TBD" onClick={() => setNavOpen(!navOpen)}><li>TBD</li></NavLink>
                        <NavLink to="/EarlyAccess" onClick={() => setNavOpen(!navOpen)}><li>Early Access</li></NavLink>
                        <NavLink to="/Kickstarter" onClick={() => setNavOpen(!navOpen)}><li>Upcoming Kickstarter</li></NavLink>
                    </ul>
                </li><hr/>
                <NavLink to="/Demo" onClick={() => setNavOpen(!navOpen)}><li>Demos</li></NavLink><hr/>
                <NavLink to="/Released" onClick={() => setNavOpen(!navOpen)}><li>Released</li></NavLink><hr/>
                <li>Platforms</li>
                <li>
                    <ul>
                        <NavLink to="/Steam" onClick={() => setNavOpen(!navOpen)}><li>Steam</li></NavLink >
                        <NavLink to="/Epic" onClick={() => setNavOpen(!navOpen)}><li>Epic Games</li></NavLink>
                        <NavLink to="/GOG" onClick={() => setNavOpen(!navOpen)}><li>GOG</li></NavLink>
                        <NavLink to="/Playstation" onClick={() => setNavOpen(!navOpen)}><li>Playstation</li></NavLink>
                        <NavLink to="/Xbox" onClick={() => setNavOpen(!navOpen)}><li>Xbox</li></NavLink>
                        <NavLink to="/switch" onClick={() => setNavOpen(!navOpen)}><li>Nintendo Switch</li></NavLink>
                    </ul>
                </li><hr/>
                <NavLink to="/AllGames" onClick={() => setNavOpen(!navOpen)}><li>All Games</li></NavLink>
            </ul>
            </div>
        </nav>
    )
}

export default Navigation;