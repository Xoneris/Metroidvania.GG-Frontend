import { useState, useEffect, useContext } from "react"
import { apiUrlContext } from "../../Homepage";
import Loading from "../Loading";

export default function EditGames () {

    const [allGames, setAllGames] = useState([]);
    const [editGame, setEditGame] = useState();
    const [updatedGame, setUpdatedGame] = useState({
        id: null,
        name: null,
        release_window: null,
        release_date: null,
        demo: null,
        early_access: null,
        kickstarter_status: null,
        trailer: null,
    });
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);
    const apiBaseUrl = useContext(apiUrlContext);

    const [fullEdit, setFullEdit] = useState(false)

    const [errors, setErrors] = useState();


    useEffect(() => {
        setLoading(true)
        fetch(apiBaseUrl + "/api/games/")
           .then((response) => {return response.json()})
           .then(data => {
               setAllGames(data)
               setLoading(false)
           })
           .catch((error) => console.log(error))

        window.scrollTo(0, 0);
      }, []);

    const updateGame = async () => {
        
        const accessToken = localStorage.getItem('token')
        console.log(updatedGame)
        const res = await fetch(apiBaseUrl + "/api/games/" + updatedGame.id, {
            method: "PATCH",
            changeOrigin: true,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`
            },
            body: JSON.stringify(updatedGame),
        })
        const data = await res.json()

        if (data.error || !res.ok) {
            console.log(data)
            setErrors(data)
        } else {
            alert(data.message)           
            const prevAllGames = allGames.filter((game) => game.id !== data.game.id)
            const updatedGameFromDB = data.game
            setAllGames([...prevAllGames, updatedGameFromDB].sort((a, b) => a.id - b.id))
            setEditGame()
            setUpdatedGame({})
            console.log(data.game)
        }

    }

    const handleClickOnRow = (game) => {

        setEditGame((prevId) => {
            const newId = game.id
            if (prevId !== newId) {
                setUpdatedGame({...updatedGame,
                    id: game.id, 
                    name: game.name, 
                    release_window: game.release_window,
                    release_date: game.release_date,
                    demo: game.demo,
                    earlyaccess: game.earlyaccess,
                    kickstarter_status: game.kickstarter_status,
                    trailer: game.trailer,
                })
            }
            return newId
        });
    }

    return (
        <>
            <h2>Edit Games {loading === false ? "- " + allGames.length : null}</h2>
            <hr/>
            {/* <div>
                <p>{"Edit Game id: " + editGame}</p>
                <p>{"Update Game id: " + updatedGame.id}</p>
                <p>{updatedGame.name}</p>
                <p>{updatedGame.release_window}</p>
                <p>{updatedGame.release_date}</p>
                <p>{updatedGame.demo === 1 ? "Yes" : "No"}</p>
                <p>{updatedGame.early_access === 1 ? "Yes" : "No"}</p>
                <p>{updatedGame.kickstarter_status}</p>
                <p>{updatedGame.trailer}</p>
            </div> */}
            {loading === true 
            ? <Loading/> 
            : <>
                <input type="text" placeholder="Search..."
                    onChange={(e) => setSearch(e.target.value)}
                    onClick={() => setEditGame(null)}
                />
                {/* <form onSubmit={handleSubmit}> */}
                <table border="0">
                    <thead>
                        <td>Name</td>
                        <td>Release Window</td>
                        <td>Release Date</td>
                        <td>Demo</td>
                        <td>Early Access</td>
                        <td>Kickstarter Status</td>
                        <td>Trailer</td>
                        <td>Edit</td>
                    </thead> 
                    { allGames.filter(game => game.name.toLowerCase().includes(search)).map((game) => (
                        <tbody key={game.name} onClick={() => {handleClickOnRow(game)}} >    
                            <td>
                                { editGame === game.id 
                                    ? <input type="text" name="gameName" value={updatedGame.name} 
                                        onChange={(e) => setUpdatedGame({...updatedGame, name: e.target.value})}
                                        onKeyUp={(e) => (e.key === "Enter" ? updateGame() : null)}
                                        />
                                    : game.name }
                            </td>
                            <td>
                                { editGame === game.id 
                                    ? <input type="text" name="gameReleaseWindow" value={updatedGame.release_window}
                                        onChange={(e) => setUpdatedGame({...updatedGame, release_window: e.target.value})}
                                        onKeyUp={(e) => (e.key === "Enter" ? updateGame() : null)}
                                    />
                                    : game.release_window }
                            </td>
                            <td>
                                { editGame === game.id
                                    ? <input type="date" name="gameReleaseDate" defaultValue={game.release_date} 
                                        onChange={(e) => setUpdatedGame({...updatedGame, release_date: e.target.value})}
                                    />
                                    : game.release_date === null || game.release_date === "0000-00-00" ? null : game.release_date }
                            </td>
                            <td>
                                { editGame === game.id
                                    ?   <select name="gameDemoStatus"
                                            onChange={(e) => {
                                                const selectedValue = e.target.value === "yes" ? 1 : 0
                                                setUpdatedGame({...updatedGame, demo: selectedValue})
                                            }}
                                        >
                                            <option value={game.demo ? "yes" : "no"}>{game.demo ? "Yes" : "No"}</option>
                                            <option value={game.demo ? "no" : "yes"}>{game.demo ? "No" : "Yes"}</option>
                                        </select>
                                    : game.demo === 1 ? "Yes" : "No" }
                            </td>
                            <td>
                                { editGame === game.id
                                    ?   <select name="gameEarlyAccessStatus"
                                            onChange={(e) => {
                                                const selectedValue = e.target.value === "yes" ? 1 : 0
                                                setUpdatedGame({...updatedGame, earlyaccess: selectedValue})
                                            }}
                                        >
                                            <option value={game.earlyaccess === 1 ? "yes" : "no"}>{game.earlyaccess === 1 ? "Yes" : "No"}</option>
                                            <option value={game.earlyaccess === 1 ? "no" : "yes"}>{game.earlyaccess === 1 ? "No" : "Yes"}</option>
                                        </select>
                                    : game.earlyaccess === 1 ? "Yes" : "No" }
                            </td>
                            <td>
                                { editGame === game.id
                                    ? <select name="gameKickstarterStatus" 
                                        onChange={(e) => setUpdatedGame({...updatedGame, kickstarter_status: e.target.value})}
                                    >
                                        <option value="" selected={game.kickstarter_status === "" ? true : false} >None</option>
                                        <option value="Funded" selected={game.kickstarter_status === "Funded" ? true : false}>Funded</option>
                                        <option value="Live" selected={game.kickstarter_status === "Live" ? true : false}>Live</option>
                                        <option value="Upcoming" selected={game.kickstarter_status === "Upcoming" ? true : false}>Upcoming</option>
                                        <option value="Unsuccessful" selected={game.kickstarter_status === "Unsuccessful" ? true : false}>Unsuccessful</option>
                                    </select>
                                    : game.kickstarter_status }
                            </td>
                            <td>
                                { editGame === game.id
                                    ? <input type="text" name="gameTrailer" value={updatedGame.trailer} 
                                        onChange={(e) => setUpdatedGame({...updatedGame, trailer: e.target.value})}
                                        
                                        onKeyUp={(e) => (e.key === "Enter" ? updateGame() : null)}
                                    />
                                    : game.trailer }
                            </td>
                            <td>
                                <button onClick={() => {
                                    setFullEdit([true, game.name]) 
                                    setEditGame({})}}
                                >
                                    Edit
                                </button>
                            </td>
                        </tbody>
                    ))}
                </table>
                {/* </form>  */}
            </> }
        </>
    )
}