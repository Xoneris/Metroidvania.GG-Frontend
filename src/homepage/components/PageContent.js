import {useState, useEffect} from 'react';
import GameThumbnail from './GameThumbnail';
import Loading from './Loading';

function PageContent (props) {

  const [gamesData, setGamesData] = useState([]);
  const [loading, setLoading] = useState(false)
  const fetchUrl = props.fetchUrl


  useEffect(() => {
    setLoading(true)
    fetch(fetchUrl)
        .then((response) => {return response.json()})
        .then(data => {
            setGamesData(data)
            setLoading(false)
        })
        .catch((error) => console.log(error))

    window.scrollTo(0, 0);
  }, [fetchUrl]);

  if (loading) {
    return <Loading/>;
  }

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