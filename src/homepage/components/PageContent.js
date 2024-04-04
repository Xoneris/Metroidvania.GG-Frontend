import {useState, useEffect} from 'react';
import GameThumbnail from './GameThumbnail';

function PageContent (props) {

  const [gamesData, setGamesData] = useState([]);
  const fetchUrl = props.fetchUrl

  useEffect(() => {
    fetch(fetchUrl)
    .then((response) => {return response.json()})
    .then(data => setGamesData(data))
    .catch((error) => console.log(error))

    window.scrollTo(0, 0);
  }, [fetchUrl]);

    return (
        <section className="PageContent">
            <h2>{props.pageName}</h2>
            <hr/>
            <div className="wrapper">
                {gamesData.map(game => (
                    <GameThumbnail game={game} key={game.id}/>
                ))}
            </div>
        </section>
    )
}
export default PageContent;