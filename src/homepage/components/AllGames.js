import { useState, useEffect, useContext } from "react";
import GameThumbnail from "./GameThumbnail";
import { allGamesNoThumbnail, apiUrlContext } from "../Homepage";
import Loading from "./Loading";

function AllGames () {

    const [gamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [noThumbnail, setNoThumbnail] = useState(true);

    const apiBaseUrl = useContext(apiUrlContext);
    const noThumbnailContext = useContext(allGamesNoThumbnail)

    let alphabet = [];
    let chr; 

    useEffect(() => {
        setLoading(true)
        fetch(apiBaseUrl + "/api/games/")
           .then((response) => {return response.json()})
           .then(data => {
               setGamesData(data)
               setLoading(false)
           })
           .catch((error) => console.log(error))

        window.scrollTo(0, 0);
      }, []);
 
    for (let i = 0; i < 26; i++) {
        chr = String.fromCharCode(65 + i);
        alphabet.push(chr);
    }

    if (loading) {
        return <Loading/>;
    }

    return (
        <section className="AllGames">
            <h2 id="all-games">All Games</h2>
            <ul>
                <li><a href="#0-9">0-9</a></li>
                {alphabet.map(letter => 
                    <li key={letter}><a href={"#" + letter}>{letter}</a></li>    
                )}
            </ul>
            
            <input 
                type="button" 
                className="ThumbnailButton"
                // onClick={() => {setNoThumbnail(!noThumbnail)}} 
                onClick={() => {noThumbnailContext.setNoThumbnail(!noThumbnailContext.noThumbnail)}}
                value={noThumbnailContext.noThumbnail ? "Show Thumbnails" : "Hide Thumbnails"}
            />

            <h3><a id="0-9">0-9</a></h3>
            <hr />

            <div className="wrapper" id={noThumbnailContext.noThumbnail ? "noThumbnail" : null}>
                {gamesData.filter((game) => ['0','1','2','3','4','5','6','7','8','9'].includes(game.name[0])).map(game => (
                    <GameThumbnail game={game} key={game.id} noThumbnail={noThumbnailContext.noThumbnail}/>
                ))}
            </div> 

            {alphabet.map(letter => 
                <>
                    <h3><a id={letter}>{letter}</a></h3>
                    <hr />
                    <div className="wrapper" id={noThumbnailContext.noThumbnail ? "noThumbnail" : null} >
                        {gamesData.filter((game) => game.name[0] === letter).map(game => (
                            <GameThumbnail game={game} key={game.id} noThumbnail={noThumbnailContext.noThumbnail}/>
                        ))}
                    </div>
                </>    
            )}
            <a href="#all-games">
                <div className="backToTopIcon" title="Back to Top">
                    <span></span>
                </div>
            </a>
        </section>
    )
}

export default AllGames;
