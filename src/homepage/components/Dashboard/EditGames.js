import { useState, useEffect, useContext } from "react"
import { apiUrlContext } from "../../Homepage";

export default function EditGames () {

    const [allGames, setAllGames] = useState([]);
    const [editGame, setEditGame] = useState([]);
    const [search, setSearch] = useState("");
    const apiBaseUrl = useContext(apiUrlContext);

    useEffect(() => {
        // setLoading(true)
        fetch(apiBaseUrl + "/api/games/")
           .then((response) => {return response.json()})
           .then(data => {
                setAllGames(data)
            //    setLoading(false)
           })
           .catch((error) => console.log(error))

        window.scrollTo(0, 0);
      }, []);

    return (
        <>
            <h2>Edit Games - {allGames.length}</h2>
            <hr/>
            <input type="text" placeholder="Search..."
                onChange={(e) => {setSearch(e.target.value)}}
            />
            <table border="0">
                <th>Name</th>
                <th>Release Window</th>
                <th>Release Date</th>
                <th>Demo</th>
                <th>Early Access</th>
                <th>Kickstarter Status</th>
                <th>Trailer</th>
                <th>Edit</th>
                {allGames.filter(game => game.name.toLowerCase().includes(search)).map((game) => (
                    <tbody key={game.name} onClick={() => {setEditGame(game.name)}}>
                        <td>
                            { editGame === game.name 
                                ? <input type="text" defaultValue={game.name} />
                                : game.name }
                        </td>
                        <td>
                            { editGame === game.name 
                                ? <input type="text" defaultValue={game.release_window} />
                                : game.release_window }
                        </td>
                        <td>
                            { editGame === game.name
                                ? <input type="date" defaultValue={game.release_date} />
                                : game.release_date }
                        </td>
                        <td>
                            { editGame === game.name
                                ?   <select>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                : game.demo ? "Yes" : "No" }
                        </td>
                        <td>
                            { editGame === game.name
                                ?   <select>
                                        <option value="yes">Yes</option>
                                        <option value="no">No</option>
                                    </select>
                                : game.earlyaccess ? "Yes" : "No" }
                        </td>
                        <td>
                            { editGame === game.name
                                ? <input type="text" defaultValue={game.kickstarter_status} />
                                : game.kickstarter_status }
                        </td>
                        <td>
                            { editGame === game.name
                                ? <input type="text" defaultValue={game.trailer} />
                                : game.trailer }
                        </td>
                        <td>
                            <button>Edit</button>
                        </td>
                    </tbody>
                ))}
            </table>
        </>
    )
}