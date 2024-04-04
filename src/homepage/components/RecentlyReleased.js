import {useState, useEffect} from 'react';
import { Link } from "react-router-dom";

function RecentlyReleased () {

  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/games/')
    .then((response) => {return response.json()})
    .then(data => setGamesData(data))
    .catch((error) => console.log(error))
  }, []);

    return (
        <section className="RecentlyReleased">
            <h2>Recently Released</h2>
            <hr/>
            {/* <iframe width="1280" height="720" src="https://www.youtube.com/embed/lwvx3ksnOQs?autoplay=1&mute=1&controls=0&loop=1" title="YouTube video player" frameborder="0"></iframe> */}
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
export default RecentlyReleased;