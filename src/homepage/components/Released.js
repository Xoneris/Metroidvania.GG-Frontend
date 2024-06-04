import { useState, useEffect, useContext } from "react";
import GameThumbnail from "./GameThumbnail";
import { apiUrlContext, rememberReleaseYear } from "../Homepage";
import Loading from "./Loading";

function Released({yearSelect, setYearSelect}) {

    const apiBaseUrl = useContext(apiUrlContext);
    // const rememberReleaseYearContext = useContext(rememberReleaseYear)

    const months = [
        {
            'month_number': '01',
            'month_name':'January'
        },
        {
            'month_number': '02',
            'month_name':'February'
        },
        {
            'month_number': '03',
            'month_name':'March'
        },
        {
            'month_number': '04',
            'month_name':'April'
        },
        {
            'month_number': '05',
            'month_name':'May'
        },
        {
            'month_number': '06',
            'month_name':'June'
        },
        {
            'month_number': '07',
            'month_name':'July'
        },
        {
            'month_number': '08',
            'month_name':'August'
        },
        {
            'month_number': '09',
            'month_name':'September'
        },
        {
            'month_number': '10',
            'month_name':'October'
        },
        {
            'month_number': '11',
            'month_name':'November'
        },
        {
            'month_number': '12',
            'month_name':'December'
        },
    ];

    let currentMonth = new Date().getMonth() + 1;
    if (currentMonth > 0 || currentMonth < 10 ) {
        currentMonth = "0" + String(currentMonth);
    }

    const [gamesData, setGamesData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        fetch(apiBaseUrl + "/api/games/recentlyreleased/")
        .then((response) => {return response.json()})
        .then(data => {
            setGamesData(data);
            setLoading(false);
        })
        .catch((error) => console.log(error))

        window.scrollTo(0, 0);
      }, []);

    
    if (loading) {
        return <Loading/>
    }

    return (
        <section className="Released">
            <h2>Released Games of {yearSelect}</h2>
            {/* <h2>Released Games of {rememberReleaseYearContext.yearSelect}</h2> */}

            <div className="wrapper">
                <select 
                    // onChange={(e) => rememberReleaseYearContext.setYearSelect(e.target.value)}
                    // value={rememberReleaseYearContext.yearSelect}    
                    onChange={(e) => setYearSelect(e.target.value)}
                    value={yearSelect}    
                >
                    <option value="2024">2024</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                </select>

            </div>
            {/* .filter((month) => currentYear === yearSelect && currentMonth >= month.month_number) */}
            {months.reverse().map(month => (
                <>
                    <h3>{month.month_name}</h3>
                    <hr/>
                    {/* {currentYear === yearSelect && currentMonth >= month.month_number ?
                    <>
                        <h3>{month.month_name}</h3>
                        <hr/>
                    </> : 
                    null} */}
                    <div className="wrapper">
                        {gamesData.filter((game) => 
                            game.release_date !== null &&
                            game.release_date[5] + game.release_date[6] === month.month_number &&
                            game.release_date[0] + game.release_date[1] + game.release_date[2] + game.release_date[3] === yearSelect
                            // game.release_date[0] + game.release_date[1] + game.release_date[2] + game.release_date[3] === rememberReleaseYearContext.yearSelect
                            ).map(game => (
                            <GameThumbnail game={game} key={game.id}/>
                        ))}
                    </div>
                </>
            ))}
        </section>
    )
}

export default Released;