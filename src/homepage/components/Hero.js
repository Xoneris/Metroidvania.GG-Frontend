import {useState, useEffect, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import { apiUrlContext } from "../Homepage";
import Loading from './Loading';

function Hero () {

    
    const [loading, setLoading] = useState(false);

    const [liveKickstarterGame, setLiveKickstarterGame] = useState([]);
    const [recentReleaseGame, setRecentReleaseGame] = useState([]);
    const [comingSoonGame, setComingSoonGame] =  useState([]);
    const [upcomingKickstarterGame, setUpcomingKickstarterGame] = useState([]);

    const [heroTrailer, setHeroTrailer] = useState([]);

    const apiBaseUrl = useContext(apiUrlContext);

    useEffect(() => {
        setLoading(true);

        fetch(apiBaseUrl + "/api/games/recentlyreleased/")
            .then((response) => {return response.json()})
            .then(data => {
                const randoData = randomiseData(data)
                setRecentReleaseGame(randoData)
                setHeroTrailer(randoData[0])
            })
            .catch((error) => console.log(error))

        fetch(apiBaseUrl + "/api/games/comingsoon/")
            .then((response) => {return response.json()})
            .then(data => {
                const randoData = randomiseData(data)
                setComingSoonGame(randoData)
            })
            .catch((error) => console.log(error))

        fetch(apiBaseUrl + "/api/games/kickstarter/live/")
            .then((response) => {return response.json()})
            .then(data => {setLiveKickstarterGame(data)})
            .catch((error) => console.log(error))
        
        fetch(apiBaseUrl + "/api/games/kickstarter/upcoming/")
            .then((response) => {return response.json()})
            .then(data => {setUpcomingKickstarterGame(data)})
            .catch((error) => console.log(error))
        
        window.scrollTo(0, 0);
        setLoading(false);

    }, []);

    const randomiseData = (data) => {

        const data_copy = [...data]
        const filteredData = data_copy.filter((game) => game.release_date === data[0].release_date)

        if (filteredData.length > 1) {
       
            for (var i = filteredData.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = filteredData[i];
                filteredData[i] = filteredData[j];
                filteredData[j] = temp;
            }
        }
        return filteredData
    }

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
                    {recentReleaseGame.slice(0,1).map(game => (
                        <div id={heroTrailer.trailer === game.trailer ? "active" : null } key={game.id}>
                            <span className="HeroGameSection">Latest Release</span>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                title={game.name} 
                                onClick={() => {setHeroTrailer(game)}} 
                            />
                        </div>
                    ))}
                    {comingSoonGame.slice(0,1).map(game => (
                        <div id={heroTrailer.trailer === game.trailer ? "active" : null } key={game.id}>
                            <span className="HeroGameSection">Coming up next</span>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                title={game.name} 
                                onClick={() => {setHeroTrailer(game)}} 
                            />
                        </div>
                    ))}
                    {liveKickstarterGame.length > 0 ? 
                    liveKickstarterGame.slice(0,1).map(game => (
                        <div id={heroTrailer.trailer === game.trailer ? "active" : null } key={game.id}>
                            <span className="HeroGameSection">Live on Kickstarter</span>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name}
                                title={game.name} 
                                onClick={() => {setHeroTrailer(game)}} 
                            />
                        </div>
                    )):
                    null}
                    {liveKickstarterGame.length === 0 ?
                    upcomingKickstarterGame.slice(0,1).map(game => (
                        <div id={heroTrailer.trailer === game.trailer ? "active" : null } key={game.id}>
                            <span className="HeroGameSection">Soon on Kickstarter</span>
                            <img src={'/assets/thumbnails/' + game.slug + '.jpg'} 
                                alt={game.name} 
                                title={game.name} 
                                onClick={() => {setHeroTrailer(game)}} 
                            />
                        </div>
                    )) : null}
                </div>
            </div>
        </section>
    )
}
export default Hero;