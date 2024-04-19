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

    const [heroTrailer, setHeroTrailer] = useState([]);

    const apiBaseUrl = useContext(apiUrlContext);


    useEffect(() => {
        setLoading(true);

        fetch(apiBaseUrl + "/api/games/kickstarter/live/")
        .then((response) => {return response.json()})
        .then(data => {
            setKickstarterGame(data)
            setHeroTrailer(data[0])
        })
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


        
        

        window.scrollTo(0, 0);
        setLoading(false);

    }, []);



    if (loading) {
        return (
            <section className="Hero">
                <div className="wrapper">
                    <Loading/>
                </div>
            </section>    
        )
    }

    return (
        <section className="Hero">
            <div className="wrapper">
                <div className="HeroLeft">
                    <iframe title="Hero-Trailer"
                        src={"https://www.youtube.com/embed/" + heroTrailer.trailer}>
                    </iframe>
                    <Link to={"/" + heroTrailer.slug} key={heroTrailer.id}>
                        <span><b>More info!</b></span>
                    </Link>
                </div>
                <div className="HeroRight">
                    {kickstarterGame.slice(0,1).map(game => (
                        <div id={heroTrailer.trailer === game.trailer ? "active" : null } key={game.id}>
                            <span className="HeroGameSection">Live on Kickstarter</span>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                onClick={() => {setHeroTrailer(game)}} 
                            />
                        </div>
                    ))}
                    {recentReleaseGame.slice(0,1).map(game => (
                        <div id={heroTrailer.trailer === game.trailer ? "active" : null } key={game.id}>
                            <span className="HeroGameSection">Latest Release</span>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                onClick={() => {setHeroTrailer(game)}} 
                            />
                        </div>
                    ))}
                    {comingSoonGame.slice(0,1).map(game => (
                        <div id={heroTrailer.trailer === game.trailer ? "active" : null } key={game.id}>
                            <span className="HeroGameSection">Coming up next</span>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                onClick={() => {setHeroTrailer(game)}} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Hero;