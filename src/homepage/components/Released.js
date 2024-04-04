import { useState, useEffect, useContext } from "react";
import GameThumbnail from "./GameThumbnail";
import { apiUrlContext } from "../Homepage";

function Released() {

    const apiBaseUrl = useContext(apiUrlContext);

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

    const [gamesData, setGamesData] = useState([]);
    const [yearSelect, setYearSelect] = useState('2024');

    useEffect(() => {
        fetch(apiBaseUrl + "/api/games/recentlyreleased/")
        .then((response) => {return response.json()})
        .then(data => setGamesData(data))
        .catch((error) => console.log(error))

        window.scrollTo(0, 0);
      }, []);

    
    return (
        <section className="Released">
            <h2>Released Games of {yearSelect}</h2>

            <div className="wrapper">
                <button onClick={() => setYearSelect('2024')}>2024</button>
                <button onClick={() => setYearSelect('2023')}>2023</button>
                <button onClick={() => setYearSelect('2022')}>2022</button>
            </div>

            {months.map(month => (
                <>
                    <h3>{month.month_name}</h3>
                    <hr/>
                    <div className="wrapper">
                        {gamesData.filter((game) => 
                            game.release_date[5] + game.release_date[6] === month.month_number &&
                            game.release_date[0] + game.release_date[1] + game.release_date[2] + game.release_date[3] === yearSelect
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