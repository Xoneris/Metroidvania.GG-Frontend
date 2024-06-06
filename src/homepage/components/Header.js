import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { useContext } from 'react';
import { searchBoxContext } from '../Homepage';

function Header () {

    const searchBox = useContext(searchBoxContext)

    return (
        <header>
            <div className="wrapper">
                <Link to="/">
                    <div className='logo'>
                        <img src="/assets/Logo.png" alt="Logo" />
                        <h1 className="title-full">MetroidVania.GG</h1>
                        <h1 className="title-short">MV.GG</h1>
                    </div>
                </Link>
                <Navigation />
            </div>
        </header>
    )
}

export default Header;