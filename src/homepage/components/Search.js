import {useState, useEffect, useContext} from 'react';
import GameThumbnail from './GameThumbnail';
import { apiUrlContext } from '../Homepage';

function Search () {

  const [gamesData, setGamesData] = useState([]);

  const apiBaseUrl = useContext(apiUrlContext);
  const [search, setSearch] = useState("");
  const [searchedGames, setSearchedGames] = useState([])

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
        <section className="Search">
            <h2>Search</h2>
            
            <div className="searchBox">
              <input type="text" onChange={inputHandler} />
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
        </section>
    )
}
export default Search;