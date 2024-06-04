import {useState, useEffect, useContext} from 'react';
import GameThumbnail from './GameThumbnail';
import { apiUrlContext, searchBoxContext } from '../Homepage';

function Search () {

    const apiBaseUrl = useContext(apiUrlContext);
    const searchBox = useContext(searchBoxContext)

    const [search, setSearch] = useState("");
    const [gamesData, setGamesData] = useState([]);

    useEffect(() => {
        fetch(apiBaseUrl + "/api/games/")
        .then((response) => {return response.json()})
        .then(data => setGamesData(data))
        .catch((error) => console.log(error))

        window.scrollTo(0, 0);
    }, [apiBaseUrl]);

    const inputHandler = (e) => {
        setSearch(e.target.value.toLowerCase())
    }

    return (
        <>
            <div className="SearchSomething">
                <div className="SearchContent">
                    <h2>Search</h2>
                    <div className="searchBox">
                        <input type="text" default="cool game" onChange={inputHandler} />
                    </div>
                    <hr/>
                    <div className="wrapper">
                    {
                    search.length > 1 ? 
                    gamesData.filter(game => game.name.toLowerCase().includes(search)).map(game => (
                        <GameThumbnail game={game} key={game.id}/>
                    )):
                    null
                    }
                    </div>
                </div>
            </div>
            <div className="SearchBackground" onClick={() => searchBox.setShowSearch(false)}></div>
        </>
    )
}
export default Search;