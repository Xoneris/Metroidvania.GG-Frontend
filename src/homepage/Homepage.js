import { Routes, Route } from 'react-router-dom';
import { createContext } from 'react';
import './homepage.css';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import SingleGamePage from './components/SingleGamePage';
import Contact from './components/Contact';
import SinglePage from './components/SinglePage';
import AllGames from './components/AllGames';
import Released from './components/Released';
import NotFound from './components/NotFound';
import Search from './components/Search';

export const apiUrlContext = createContext();

function Homepage () {

    return (
        <apiUrlContext.Provider value="http://xoneris.pythonanywhere.com/">
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/2024" element={<SinglePage pageIdentifier="2024"/>}></Route>
                    <Route path="/2025" element={<SinglePage pageIdentifier="2025"/>}></Route>
                    <Route path="/2026" element={<SinglePage pageIdentifier="2026"/>}></Route>
                    <Route path="/TBD" element={<SinglePage pageIdentifier="TBD"/>}></Route>
                    <Route path="/EarlyAccess" element={<SinglePage pageIdentifier="EarlyAccess"/>}></Route>
                    <Route path="/Kickstarter" element={<SinglePage pageIdentifier="Kickstarter"/>}></Route>
                    <Route path="/Released" element={<Released/>}></Route>
                    <Route path="/Demo" element={<SinglePage pageIdentifier="Demo"/>}></Route>
                    <Route path="/AllGames" element={<AllGames />}></Route>
                    <Route path="/Contact" element={<Contact />}></Route>
                    {/* <Route path="/:" element={<NotFound/>}></Route> */}
                    <Route path="/:gameSlug" element={<SingleGamePage/>}></Route>

                    <Route path="/Search" element={<Search/>}></Route>
                </Routes>
            </main>
            <Footer />
        </apiUrlContext.Provider>
    )
}

export default Homepage;