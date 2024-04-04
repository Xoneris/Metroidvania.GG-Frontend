import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function EarlyAccess () {

  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/games/earlyaccess/')
    .then((response) => {return response.json()})
    .then(data => setGamesData(data))
    .catch((error) => console.log(error))
  }, []);

    return (
        <section className="EarlyAccess">
            <h2>Games in Early Access</h2>
            <hr/>
            <div className="wrapper">
                {gamesData.map(game => (
                    <Link to={"/" + game.slug}>
                        <div className="Game">
                            <img src={'../assets/thumbnails/' + game.thumbnail} alt={gamesData.name} />
                            <span>{game.release_date === true ? game.release_date : game.release_window}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    )
}
export default EarlyAccess;