import { useParams } from "react-router-dom";
import { useState, useEffect, useContext} from 'react';
import { SocialIcon } from 'react-social-icons'
import { replaceMonthWithName } from "./functions";
import { apiUrlContext } from "../Homepage";

import Loading from "./Loading";
import NotFound from "./NotFound";
import SteamReview from "./SteamReview";

function SingleGamePage (props) {

    const { gameSlug } = useParams();
    const [gamesData, setGamesData] = useState([]);
    const [showReportField, setShowReportField] = useState(false)
    const [response, setResponse] = useState();
    const apiBaseUrl = useContext(apiUrlContext);
    const fetchUrl = apiBaseUrl + "/api/games/" + gameSlug;

    const [loading, setLoading] = useState(false)
    const [fetchFail, setFetchFail] = useState();

    let currentDate = new Date().toJSON().slice(0, 10);

    useEffect(() => {
    
        setLoading(true)
        fetch(fetchUrl)
            .then((response) => {
                if(!response.ok) {
                    throw new Error(response.status)
                } else {
                    return response.json()
                }
            })
            .then(data => {
                setGamesData(data)
                setLoading(false)
            })
            .catch((error) => {
                console.log("error: " + error)
                setLoading(false)
                setFetchFail(true)
            })
        
        window.scrollTo(0, 0)

    }, [fetchUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const reportMessage = e.target.elements["gameReport"].value;

        const reportData = {
            game: gamesData.name,
            report: reportMessage,
            status: "open",
        }

        try {
            const res = await fetch( apiBaseUrl + "/api/report", {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(reportData),
            })
            const result = await res.json();
            setResponse(result);
          } catch (error) {
            console.error('Error making POST request:', error);
          }
    }

    if (loading) {
        return <Loading/>
    }

    if (fetchFail) {
        return <NotFound/>
    }

    return (
        <section className="GameView">
            {/* <div className="wrapper"> */}
                <div className="GameView-left">
                <h2>{gamesData.name}</h2>
                    <img src={'/assets/thumbnails/' + gamesData.slug + '.jpg'} alt={gamesData.name} title={gamesData.name}  />
                    <h3>Details:</h3>
                    <ul>
                        <li><b>Developer:</b> {gamesData.developer} </li>
                        <li><b>Publisher:</b> {gamesData.publisher}</li>
                        <li><b>Release:</b> {gamesData.release_date ? replaceMonthWithName(gamesData.release_date) : gamesData.release_window}</li>
                    </ul>
                    <hr/>
                    <h3>Demo / EA / Kickstarter:</h3>
                    <ul>
                        <li><b>Has a Demo:</b> {gamesData.demo === 1 ? 'Yes' : 'No' }</li>
                        <li><b>In Early Access:</b> {gamesData.earlyaccess === 1 ? 'Yes' : 'No' }</li>
                        <li><b>Kickstarter:</b> {gamesData.kickstarter_page ? <a href={gamesData.kickstarter_page} target="_blank">{gamesData.kickstarter_status}</a> : 'No' }</li>
                    </ul>
                    
                    <hr/>

                    { gamesData.release_date && gamesData.release_date < currentDate ? 
                    <>
                        <h3>Steam reviews:</h3>
                        <ul>
                            <li><SteamReview steamAppID={gamesData.steam ? gamesData.steam.split("/")[4] : null}/></li>
                        </ul>
                        <hr/>
                    </>
                    : null}

                    <h3>Social Media:</h3>
                    <ul className="GameSocialMedia">
                        { gamesData.twitter && (<li><SocialIcon url={gamesData.twitter} bgColor='none' fgColor='black' target="_blank"/></li>) }
                        { gamesData.facebook && (<li><SocialIcon url={gamesData.facebook} bgColor='none' fgColor='black' target="_blank"/></li>) }
                        { gamesData.instagram && (<li><SocialIcon url={gamesData.instagram} bgColor='none' fgColor='black' target="_blank"/></li>) }
                        { gamesData.tiktok && (<li><SocialIcon url={gamesData.tiktok} bgColor='none' fgColor='black' target="_blank"/></li>) }
                        { gamesData.youtube && (<li><SocialIcon url={gamesData.youtube} bgColor='none' fgColor='black' target="_blank"/></li>) }
                        { gamesData.discord && (<li><SocialIcon url={gamesData.discord} bgColor='none' fgColor='black' target="_blank"/></li>) }
                        { gamesData.homepage && (<li><SocialIcon url={gamesData.homepage} bgColor='none' fgColor='black' target="_blank"/></li>) }
                    </ul>
                </div>
                <div className="GameView-right">
                    {
                        gamesData.trailer !== 0 
                        ? <iframe title={gamesData.name}
                            src={"https://www.youtube.com/embed/"+gamesData.trailer}>
                        </iframe>
                        : <div>
                            Couldn't find a trailer. 
                        </div>
                    }
                    
                    <h2>Description:</h2>
                    <span>{gamesData.description}</span>
                    <hr/>
                        <h3>Platforms:</h3>
                    <ul className="GamePlatforms">
                        { gamesData.steam && (<li><a href={gamesData.steam} target="_blank"><img src='/assets/icons/steam.png' alt="Steam Logo" /></a></li>) }
                        { gamesData.epic && (<li><a href={gamesData.epic} target="_blank"><img src="/assets/icons/epic.png" alt="GoG Logo" /></a></li>) }
                        { gamesData.gog && (<li><a href={gamesData.gog} target="_blank"><img src="/assets/icons/gog.png" alt="Epic Games Logo" /></a></li>) }
                        { gamesData.playstation && (<li><a href={gamesData.playstation} target="_blank"><img src="/assets/icons/playstation.png" alt="Playstation Logo" /></a></li>) }
                        { gamesData.xbox && (<li><a href={gamesData.xbox} target="_blank"><img src="/assets/icons/xbox.png" alt="Xbox Logo" /></a></li>) }
                        { gamesData.nintendo && (<li><a href={gamesData.nintendo} target="_blank"><img src="/assets/icons/nintendo-switch.png" alt="Nintendo Switch Logo" /></a></li>) }
                    </ul>
                </div>
            {/* </div> */}

            {/* <div className="ReportButton" onClick={() => {setShowReportField(!showReportField)}}>
                <b>!</b>
            </div>
            <div className="ReportContainer" id={showReportField ? "show" : "hide"} >
                <form onSubmit={handleSubmit}>
                    <h2>Report Issue</h2>
                    <p>Is any information on this page wrong, outdated or missing? Please report the issue below and hopefully it will be fixed soon! Thank you for your help!</p>
                    <textarea name="gameReport" placeholder="Please describe the wrong, outdated or missing information and provide the correct one if possible."></textarea>
                    <br/>
                    <button type="submit">Submit Report</button>
                    {response ? <p>{response}</p> : null}
                </form>
            </div> */}

        </section>
    )
}

export default SingleGamePage;