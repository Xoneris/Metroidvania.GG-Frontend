import {useState, useEffect} from 'react';
import GameThumbnail from './GameThumbnail';
import { Link } from 'react-router-dom';

function Hero () {

  const [gamesData, setGamesData] = useState([]);
  const [heroGame, setHeroGame] = useState({});

  const FetchHeroGames = async () => {
    await fetch('http://192.168.1.11:8000/api/games/')
        .then((response) => {return response.json()})
        .then(data => setGamesData(data))
        .catch((error) => console.log(error))

    // await fetch('http://127.0.0.1:8000/api/games/hero/trailer/')
    //     .then((response) => {return response.json()})
    //     .then(data => setHeroGame(data))
    //     .catch((error) => console.log(error))

    // const response = await fetch('http://127.0.0.1:8000/api/games/hero/trailer/');
    // const data = await response.json();
    // setHeroGame(data);
  }


  useEffect(() => {
    FetchHeroGames();
  }, []);

    return (
        <section className='Hero'>
            <div className='HeroLeft'>
                <div className='wrapper'>
                    {gamesData.filter((game) => game.name === "Dewborne Dawn").map(game => (
                    <Link to={"/" + game.slug} key={game.id}>
                        <video id="vid" loop autoPlay muted >
                            <source src={"../assets/videos/"+game.slug+".webm"} type="video/webm"></source>
                            <source src={"../assets/videos/"+game.slug+".mp4"} type="video/mp4"></source>
                        </video>
                        <div>
                            <h2>{game.name}</h2>
                            <span>{game.release_date ? game.release_date : game.release_window}</span>
                        </div>
                    </Link>
                    ))}
                </div>
            </div>
            {/* <div className='HeroRight'>
                <div>
                    <h2>Live on Kickstarter</h2>
                    <hr/>
                    {gamesData.slice(0,1).map(game => (
                        <GameThumbnail game={game} key={game.id}/>
                    ))}
                </div>
                <div>
                    <h2>Live on Kickstarter</h2>
                    <hr/>
                    {gamesData.slice(0,1).map(game => (
                        <GameThumbnail game={game} key={game.id}/>
                    ))}
                </div>
                <div>
                    <h2>Live on Kickstarter</h2>
                    <hr/>
                    {gamesData.slice(0,1).map(game => (
                        <GameThumbnail game={game} key={game.id}/>
                    ))}
                </div>
            </div> */}
        </section>
    )
}
export default Hero;