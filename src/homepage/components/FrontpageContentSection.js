import {useState, useEffect, useContext} from 'react';
import { Link } from 'react-router-dom';
import GameThumbnail from './GameThumbnail';
import { apiUrlContext } from '../Homepage';
import Loading from './Loading';

function FrontpageContentSection (props) {

    const [gamesData, setGamesData] = useState([]);
    const apiBaseUrl = useContext(apiUrlContext);

    const [loading, setLoading] = useState(false)

    let SectionName;
    let fetchUrl;

    switch(props.SectionIdentifier) {
        case "ComingSoon":
            SectionName = "Coming Soon";
            fetchUrl = apiBaseUrl + "/api/games/comingsoon/";
            break;
        case "Released":
            SectionName = "Recently Released";
            fetchUrl = apiBaseUrl + "/api/games/recentlyreleased/";
            break;
        case "Demo":
            SectionName = "Games with Demos";
            fetchUrl = apiBaseUrl + "/api/games/demo/";
            break;
        case "EarlyAccess":
            SectionName = "In Early Access";
            fetchUrl = apiBaseUrl + "/api/games/earlyaccess/";
            break;
        case "Kickstarter":
            SectionName = "Upcoming Kickstarter";
            fetchUrl = apiBaseUrl + "/api/games/upcomingkickstarter/";
            break;
        case "2024":
            SectionName = "Releasing in 2024";
            fetchUrl = apiBaseUrl + "/api/games/2024/";
            break;
        case "2025":
            SectionName = "Releasing in 2025";
            fetchUrl = apiBaseUrl + "/api/games/2025/";
            break;
        case "2026":
            SectionName = "Releasing in 2026";
            fetchUrl = apiBaseUrl + "/api/games/2026/";
            break;
        case "TBD":
            SectionName = "Releasing in TBD";
            fetchUrl = apiBaseUrl + "/api/games/TBD/";
            break;
    }


  useEffect(() => {
    setLoading(true);
    fetch(fetchUrl)
    .then((response) => {return response.json()})
    .then(data => {
        setGamesData(data);
        setLoading(false);
    })
    .catch((error) => console.log(error))

  }, [fetchUrl]);

    // if (loading) {
    //     return <Loading/>
    // }

  const gameMapping = () => {
    return gamesData.slice(0,5).map(game => (
        <GameThumbnail game={game} key={game.id}/>
    ))
  }

    return (
        <section className="FrontpageSection" id={props.SectionIdentifier}>
            <div className='FrontpageSectionTitle'>
                <h2>{SectionName}</h2>
                {
                    props.SectionIdentifier !== "ComingSoon" ?
                    <Link to={"/"+props.SectionIdentifier}><i>[view all]</i></Link> :
                    null
                }
            </div>
            <hr/>
            <div className="wrapper">
                {/* {gamesData.slice(0,5).map(game => (
                    <GameThumbnail game={game} key={game.id}/>
                ))} */}
                {
                    loading ? 
                    <Loading/> :
                    gameMapping()
                    
                }
            </div>
        </section>
    )
}
export default FrontpageContentSection;
