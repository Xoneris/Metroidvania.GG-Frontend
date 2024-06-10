import PageContent from "./PageContent";
import { useContext } from "react";
import { apiUrlContext } from "../Homepage";

function SinglePage (props) {

    const apiBaseUrl = useContext(apiUrlContext);

    let pageName;
    let fetchUrl;
    
    switch(props.pageIdentifier) {
        case "2024":
            pageName = "Releasing in 2024";
            fetchUrl = apiBaseUrl + "/api/games/2024/";
            break;
        case "2025":
            pageName = "Releasing in 2025";
            fetchUrl = apiBaseUrl + "/api/games/2025/"
            break;
        case "2026":
            pageName = "Releasing in 2026";
            fetchUrl = apiBaseUrl + "/api/games/2026/"
            break;
        case "TBD":
            pageName = "Releasing in TBD";
            fetchUrl = apiBaseUrl + "/api/games/TBD/"
            break;
        case "EarlyAccess":
            pageName = "Games in Early Access";
            fetchUrl = apiBaseUrl + "/api/games/earlyaccess/"
            break;
        case "Demo":
            pageName = "Games with Demos";
            fetchUrl = apiBaseUrl + "/api/games/demo/"
            break;
        case "Kickstarter":
            pageName = "Upcoming Kickstarters";
            fetchUrl = apiBaseUrl + "/api/games/kickstarter/upcoming/"
            break;
        case "Steam":
            pageName = "Games on Steam";
            fetchUrl = apiBaseUrl + "/api/games/steam/"
            break;
        case "Epic":
            pageName = "Games on Epic";
            fetchUrl = apiBaseUrl + "/api/games/epic/"
            break;
        case "GOG":
            pageName = "Games on GOG";
            fetchUrl = apiBaseUrl + "/api/games/gog/"
            break;
        case "Playstation":
            pageName = "Games on Playstation";
            fetchUrl = apiBaseUrl + "/api/games/playstation/"
            break;
        case "Xbox":
            pageName = "Games on Xbox";
            fetchUrl = apiBaseUrl + "/api/games/xbox/"
            break;
        case "Switch":
            pageName = "Games on Switch";
            fetchUrl = apiBaseUrl + "/api/games/switch/"
            break;
    }

    return (
        <>
            <PageContent pageName={pageName} fetchUrl={fetchUrl} />
        </>
        
    )
}
export default SinglePage;