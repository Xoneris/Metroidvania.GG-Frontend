import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Header () {

    return (
        <header>
            <div className="wrapper">
                {/* <Link to="/"> */}
                    <div className='logo'>
                        <img src="/assets/Logo.png" alt="Logo" />
                        <h1>Metroidvania.GG</h1>
                    </div>
                {/* </Link> */}
                <Navigation />
            </div>
        </header>
    )
}

export default Header;