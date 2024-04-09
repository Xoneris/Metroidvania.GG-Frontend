import {useState, useEffect, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import { apiUrlContext } from "../Homepage";
import Loading from './Loading';

function Hero () {

    
    const [loading, setLoading] = useState(false);

    const [kickstarterGame, setKickstarterGame] = useState([]);
    const [recentReleaseGame, setRecentReleaseGame] = useState([]);
    const [comingSoonGame, setComingSoonGame] =  useState([]);
    const [earlyAccessGame, setEarlyAccessGame] = useState([]);

    const [heroTrailer, setHeroTrailer] = useState();

    const apiBaseUrl = useContext(apiUrlContext);


    useEffect(() => {
        setLoading(true);

        fetch(apiBaseUrl + "/api/games/kickstarter/live/")
        .then((response) => {return response.json()})
        .then(data => {setKickstarterGame(data)})
        .catch((error) => console.log(error))

        fetch(apiBaseUrl + "/api/games/recentlyreleased/")
        .then((response) => {return response.json()})
        .then(data => {setRecentReleaseGame(data)})
        .catch((error) => console.log(error))

        fetch(apiBaseUrl + "/api/games/comingsoon/")
        .then((response) => {return response.json()})
        .then(data => {setComingSoonGame(data)})
        .catch((error) => console.log(error))

        fetch(apiBaseUrl + "/api/games/earlyaccess/")
        .then((response) => {return response.json()})
        .then(data => {setEarlyAccessGame(data)})
        .catch((error) => console.log(error))

        // fetch(apiBaseUrl + "/api/games/")
        // .then((response) => {return response.json()})
        // .then(data => {
        //     setGamesData(data);
        //     setLoading(false);
        // })
        // .catch((error) => console.log(error))

        

        window.scrollTo(0, 0);
        setLoading(false);

    }, []);



    if (loading) {
        return <Loading/>
    }

    return (
        <section className="Hero">
            <div className="wrapper">
                <div className="HeroLeft">
                    {/* {heroTrailer.slice(0,1).map(game => (
                        <iframe title={game.name}
                        src={"https://www.youtube.com/embed/"+game.trailer}>
                        </iframe>
                    ))} */}
                    <iframe title="Hero-Trailer"
                        src={"https://www.youtube.com/embed/" + heroTrailer}>
                    </iframe>
                </div>
                <div className="HeroRight">
                    {kickstarterGame.slice(0,1).map(game => (
                        <div id={heroTrailer === game.trailer ? "active" : null }>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                onClick={() => {setHeroTrailer(game.trailer)}} />
                            <span>Live on Kickstarter</span>
                        </div>
                    ))}
                    {recentReleaseGame.slice(0,1).map(game => (
                        <div id={heroTrailer === game.trailer ? "active" : null }>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                onClick={() => {setHeroTrailer(game.trailer)}} />
                            <span>Latest Release</span>
                        </div>
                    ))}
                    {comingSoonGame.slice(0,1).map(game => (
                        <div id={heroTrailer === game.trailer ? "active" : null }>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                onClick={() => {setHeroTrailer(game.trailer)}} />
                            <span>Coming up next</span>
                        </div>
                    ))}
                    {/* <div>
                        {earlyAccessGame.slice(0,1).map(game => (
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                id={heroTrailer === game.trailer ? "active" : null }
                                alt={game.name} 
                                onClick={() => {setHeroTrailer(game.trailer)}} />
                        ))}
                        <p>Currently in Early Access</p>
                    </div> */}
                    
                    {/* {gamesData.slice(0,4).map(game => (
                        <div>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} alt={game.name} onClick={() => {setRandomHook(game.id)}} />
                            <p>Text</p>
                        </div>
                    ))} */}

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