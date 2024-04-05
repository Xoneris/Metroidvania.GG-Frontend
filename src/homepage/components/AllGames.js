import { useState, useEffect, useContext } from "react";
import GameThumbnail from "./GameThumbnail";
import { apiUrlContext } from "../Homepage";

function AllGames () {

    const [gamesData, setGamesData] = useState([]);
    const apiBaseUrl = useContext(apiUrlContext);

    let alphabet = [];
    let chr; 

    useEffect(() => {

       fetch(apiBaseUrl + "/api/games/")
        .then((response) => {return response.json()})
        .then(data => setGamesData(data))     
        .catch((error) => console.log(error))

        window.scrollTo(0, 0);
      }, []);
 
    for (let i = 0; i < 26; i++) {
        chr = String.fromCharCode(65 + i);
        alphabet.push(chr);
    }

    return (
        <section className="AllGames">
            <h2>All Games</h2>
            <ul>
                <li><a href="#0-9">0-9</a></li>
                {alphabet.map(letter => 
                    <li key={letter}><a href={"#" + letter}>{letter}</a></li>    
                )}
            </ul>
            
            <h3><a id="0-9">0-9</a></h3>
            <hr />
            <div className="wrapper">
                {gamesData.filter((game) => ['0','1','2','3','4','5','6','7','8','9'].includes(game.name[0])).map(game => (
                    <GameThumbnail game={game} key={game.id}/>
                ))}
            </div> 


            {alphabet.map(letter => 
                <>
                    <h3><a id={letter}>{letter}</a></h3>
                    <hr />
                    <div className="wrapper">
                        {gamesData.filter((game) => game.name[0] === letter).map(game => (
                            <GameThumbnail game={game} key={game.id}/>
                        ))}
                    </div>
                </>    
            )}

        </section>
    )
}

export default AllGames;
