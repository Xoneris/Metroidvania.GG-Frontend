import {useState, useEffect} from 'react';
import GameThumbnail from './GameThumbnail';

function CommingSoon () {

  const [gamesData, setGamesData] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/games/')
    .then((response) => {return response.json()})
    .then(data => setGamesData(data))
    .catch((error) => console.log(error))
  }, []);

    return (
        <section className="CommingSoon">
            <h2>Comming Soon</h2>
            <hr/>
            <div className="wrapper">
                {gamesData.slice(0,5).map(game => (
                    <GameThumbnail game={game}/>
                ))}
            </div>
        </section>
    )
}
export default CommingSoon;
