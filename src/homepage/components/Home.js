import Hero from './Hero';
import FrontpageContentSection from './FrontpageContentSection';
import Hero2 from './Hero2';
import FrontpageContentSection2 from './FrontpageContentSection2';
import { useState, useEffect, useContext, useMemo } from 'react';
import { apiUrlContext } from "../Homepage";

function Home () {

    const apiBaseUrl = useContext(apiUrlContext);
    const [homeGames, setHomeGames] = useState()

    useEffect(() => {
        fetch(apiBaseUrl + "/api/home")
        .then((response) => {return response.json()})
        .then(data => {
            setHomeGames(data);
            console.log(data)
        })
        .catch((error) => console.log(error))

        window.scrollTo(0, 0);
    }, []);

    return (
        // <div className='Home'>
        //     <Hero />
        //     <FrontpageContentSection SectionIdentifier="ComingSoon"/>
        //     <FrontpageContentSection SectionIdentifier="Released"/>
        //     <FrontpageContentSection SectionIdentifier="Demo"/>
        //     <FrontpageContentSection SectionIdentifier="EarlyAccess"/>
        //     <FrontpageContentSection SectionIdentifier="Kickstarter"/>
        //     <FrontpageContentSection SectionIdentifier="2025"/>
        //     <FrontpageContentSection SectionIdentifier="2026"/>
        //     <FrontpageContentSection SectionIdentifier="TBD"/>
        // </div>
        <div className='Home'>
            <Hero2 games={homeGames?.bannerSection} />
            <FrontpageContentSection2 title="Coming Soon" games={homeGames?.upcomingGames}/>
            <FrontpageContentSection2 title="Recently Released" games={homeGames?.recentlyReleased}/>
            <FrontpageContentSection2 title="Games with Demos" games={homeGames?.gamesWithDemos}/>
            <FrontpageContentSection2 title="In Early Access" games={homeGames?.earlyAccessGames}/>
            <FrontpageContentSection2 title="Upcoming Kickstarter" games={homeGames?.upcomingKickstarter}/>
            <FrontpageContentSection2 title="Releasing in 2025" games={homeGames?.releasingIn2025}/>
            <FrontpageContentSection2 title="Releasing in 2026" games={homeGames?.releasingIn2026}/>
            <FrontpageContentSection2 title="Releasing in TBD" games={homeGames?.releasingInTBD}/>
        </div>
    )
}

export default Home;