import {useState, useEffect, useContext} from 'react';
import GameThumbnail from './GameThumbnail';
import { Link } from 'react-router-dom';
import { apiUrlContext } from "../Homepage";
import Loading from './Loading';

function Hero () {

    const [gamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [randomHook, setRandomHook] = useState();

    const apiBaseUrl = useContext(apiUrlContext);

    useEffect(() => {
        setLoading(true);

        fetch(apiBaseUrl + "/api/games/")
        .then((response) => {return response.json()})
        .then(data => {
            setGamesData(data);
            setLoading(false);
        })
        .catch((error) => console.log(error))

    }, []);

    // const changeHeroVideo = (gameId) => {
    //     setRandomHook(gameId)
    // }

    if (loading) {
        return <Loading/>
    }

    return (
        <section className="Hero">
            <div className="wrapper">
                <div className="HeroLeft">
                    {gamesData.slice(0,1).map(game => (
                        <iframe title={game.name}
                        src={"https://www.youtube.com/embed/"+game.trailer}>
                        </iframe>
                    ))
                    }
                    {/* <h2>{randomHook}</h2> */}
                </div>
                <div className="HeroRight">
                    {gamesData.slice(0,4).map(game => (
                        <div id='active'>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} alt={game.name} onClick={() => {setRandomHook(game.id)}} />
                            <p>Text</p>
                        </div>
                    ))}
                    {/* <span>Live on Kickstarter</span>
                    <img src={'/assets/thumbnails/' + gamesData[0].slug + '.jpg'} alt={gamesData[0].name} onClick={changeHeroVideo} />
                    <span>Latest Release</span>
                    <img src={'/assets/thumbnails/' + gamesData[1].slug + '.jpg'} alt={gamesData[1].name} onClick={changeHeroVideo} />
                    <span>Coming out soon</span>
                    <img src={'/assets/thumbnails/' + gamesData[2].slug + '.jpg'} alt={gamesData[2].name} onClick={changeHeroVideo} />
                    <span>Early Access</span>
                    <img src={'/assets/thumbnails/' + gamesData[3].slug + '.jpg'} alt={gamesData[3].name} onClick={changeHeroVideo} /> */}
                </div>
            </div>
        </section>
    )
}
export default Hero;