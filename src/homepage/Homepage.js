import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import { useState } from 'react';
import './homepage.css';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './components/Home';
import SingleGamePage from './components/SingleGamePage';
import Search from './components/Search';
import SinglePage from './components/SinglePage';
import AllGames from './components/AllGames';
import Released from './components/Released';
import Loading from './components/Loading';
import ChangelogPage from './components/ChangelogPage';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Dashboard/Login';
import SubmitGame from './components/SubmitGame';

export const apiUrlContext = createContext();
export const searchBoxContext = createContext()

function Homepage () {

    const currentYear = String(new Date().getFullYear());
    const [announcmentClose, setAnnouncmentClose] = useState(false);
    const [noThumbnail, setNoThumbnail] = useState(true);
    const [yearSelect, setYearSelect] = useState(currentYear);
    const [showSearch, setShowSearch] = useState(false)

    return (

        // <apiUrlContext.Provider value="https://xoneris.pythonanywhere.com">
        // <apiUrlContext.Provider value="http://192.168.1.2:8000">
        <apiUrlContext.Provider value="http://127.0.0.1:8000">

        <searchBoxContext.Provider value={{showSearch, setShowSearch}}>
                
            <Header/>
            <main>
                <section className="Announcments" id={announcmentClose ? "Announcment-closed" : null}>
                    <h5>This website is currently in <i>"Early Access"</i>, meaning most features and functionality is here, but there are still a lot of Metroidvania games missing. </h5>
                    <h5>If you are a Developer or just want to help adding missing Games, please submit them &gt;&gt;<a href="https://docs.google.com/forms/d/e/1FAIpQLScwQfT1vya8rDzjwE9nYxAAxMjtI8prRcidbDTguhh1XmwZ8A/viewform" target='_blank'>here</a>&lt;&lt; </h5>
                    <div className="Announcment-close-icon" onClick={() => {setAnnouncmentClose(true)}}>
                        &#10060;
                    </div>
                </section>
                {
                    showSearch ? 
                    <Search/>
                    : null
                }
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/2024" element={<SinglePage pageIdentifier="2024"/>}></Route>
                    <Route path="/2025" element={<SinglePage pageIdentifier="2025"/>}></Route>
                    <Route path="/2026" element={<SinglePage pageIdentifier="2026"/>}></Route>
                    <Route path="/TBD" element={<SinglePage pageIdentifier="TBD"/>}></Route>
                    <Route path="/EarlyAccess" element={<SinglePage pageIdentifier="EarlyAccess"/>}></Route>
                    <Route path="/Kickstarter" element={<SinglePage pageIdentifier="Kickstarter"/>}></Route>
                    <Route path="/Released" element={
                            <Released yearSelect={yearSelect} setYearSelect={setYearSelect}/>
                    }></Route>
                    <Route path="/Demo" element={<SinglePage pageIdentifier="Demo"/>}></Route>
                    <Route path="/AllGames" element={
                            <AllGames noThumbnail={noThumbnail} setNoThumbnail={setNoThumbnail}/>
                    }></Route>
                    <Route path="/:gameSlug" element={<SingleGamePage/>}></Route>
                    <Route path="/Loading" element={<Loading/>}></Route>
                    <Route path="/Steam" element={<SinglePage pageIdentifier="Steam"/>}></Route>
                    <Route path="/Epic" element={<SinglePage pageIdentifier="Epic"/>}></Route>
                    <Route path="/GOG" element={<SinglePage pageIdentifier="GOG"/>}></Route>
                    <Route path="/Playstation" element={<SinglePage pageIdentifier="Playstation"/>}></Route>
                    <Route path="/Xbox" element={<SinglePage pageIdentifier="Xbox"/>}></Route>
                    <Route path="/Switch" element={<SinglePage pageIdentifier="Switch"/>}></Route>
                    <Route path="/Changelog" element={<ChangelogPage/>}></Route>
                    <Route path="/Submit" element={<SubmitGame/>}></Route>
                    <Route path="/Login" element={<Login/>}></Route>

                    <Route path="/Dashboard" element={<Dashboard/>}></Route>
                    <Route path="/Dashboard/*" element={<Dashboard/>}></Route>

                    {/* <Route path="/Contact" element={<Contact />}></Route>
                    <Route path="*" element={<NotFound/>}></Route> */}
                </Routes>

            </main>
            <Footer />

        </searchBoxContext.Provider>
        </apiUrlContext.Provider>
    )
}

export default Homepage;