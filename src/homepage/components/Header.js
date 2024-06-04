import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { useContext } from 'react';
import { searchBoxContext } from '../Homepage';

function Header () {
// function Header ({showSearch, setShowSearch}) {

    const searchBox = useContext(searchBoxContext)

    return (
        <header>
            <div className="wrapper">
                <Link to="/">
                    <div className='logo'>
                        <img src="/assets/Logo.png" alt="Logo" />
                        <h1>Metroidvania.GG</h1>
                    </div>
                </Link>

                    
                {/* <div className="navigation-wrapper">
                    <span onClick={() => {searchBox.setShowSearch(!searchBox.showSearch)}}>Search</span>
                    <Navigation />
                </div> */}

                <Navigation />
            </div>
        </header>
    )
}

export default Header;