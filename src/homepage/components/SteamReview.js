import { useState, useEffect, useContext } from "react"
import { apiUrlContext } from "../Homepage";

function SteamReview (props) {

    const apiBaseUrl = useContext(apiUrlContext);
    const [steamReviews, setSteamReviews] = useState([])

    useEffect(() => {

        fetch(apiBaseUrl+"/api/games/steamID/"+props.steamAppID)
        .then((response) => {return response.json()})
        .then(data => {
            setSteamReviews(data)
        })
        .catch((error) => {
            console.log(error)
        })

    })

    return (
        <>
            Steam: {steamReviews.query_summary ? steamReviews.query_summary.review_score_desc + " (" +  Math.round(steamReviews.query_summary.total_positive / steamReviews.query_summary.total_reviews * 100) + "%)" : null}
        </>
    )
}

export default SteamReview;