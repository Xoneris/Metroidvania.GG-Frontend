import Hero from './Hero';
import FrontpageContentSection from './FrontpageContentSection';
import Hero2 from './Hero2';

function Home () {

    return (
        <div className='Home'>
            <Hero />
            {/* <Hero2/> */}
            <FrontpageContentSection SectionIdentifier="ComingSoon"/>
            <FrontpageContentSection SectionIdentifier="Released"/>
            <FrontpageContentSection SectionIdentifier="Demo"/>
            <FrontpageContentSection SectionIdentifier="EarlyAccess"/>
            <FrontpageContentSection SectionIdentifier="Kickstarter"/>
            <FrontpageContentSection SectionIdentifier="2024"/>
            <FrontpageContentSection SectionIdentifier="2025"/>
            {/* <FrontpageContentSection SectionIdentifier="2026"/> */}
            <FrontpageContentSection SectionIdentifier="TBD"/>
        </div>
    )
}

export default Home;