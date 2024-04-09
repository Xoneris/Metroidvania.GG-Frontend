import {useState, useEffect, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';
import { apiUrlContext } from "../Homepage";
import Loading from './Loading';
import Carousel from 'react-bootstrap/Carousel';

function Hero2 () {

    
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
                
            </div>
        </section>
    )
}
export default Hero2;