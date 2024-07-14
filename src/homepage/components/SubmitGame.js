import { useState } from "react"

export default function SubmitGame() {
    
    const [hasReleaseDate, setHasReleaseDate] = useState(null)
    const [hasPublisher, setHasPublisher] = useState()
    const [hasKickstarter, setHasKickstarter] = useState()

    const [formPage, setFormPage] = useState(0)

    const [errors, setErrors] = useState(
        {
            gameName: "",
            gameDeveloper: "",
            gamePublisher: "",
            selectReleaseDate: "",
            gameReleaseWindow: "",
            gameReleaseDate: "",
            gameDescription: "",
        }
    )

    const checkGameName = (e) => {
        if (e.target.value === "") {
            setErrors((errors) => ({...errors, gameName: "Please enter a name"}))
        } else {
            setErrors((errors) => ({...errors, gameName: ""}))
        }
    }
    

    const handleReleaseDate = (e) => {

        if (e.target.value === "yes") {
            setHasReleaseDate(true)
            setErrors((errors) => ({...errors, selectReleaseDate: ""}))
        } else if (e.target.value === "no") {
            setHasReleaseDate(false)
            setErrors((errors) => ({...errors, selectReleaseDate: ""}))
        } else {
            setErrors((errors) => ({...errors, selectReleaseDate: "Please select an option"}))
        }
    }

    const handleKickstarterSelection = (e) => {
        if (e.target.value === "yes") {
            setHasKickstarter(true)
        } else if (e.target.value === "no") {
            setHasKickstarter(false)
        } 
    }

    const handleFormPageDown = (e) => {    
        e.preventDefault()
        setFormPage(formPage-1)
    }

    const handleFormPageUp = (e) => {  

        e.preventDefault()
        setFormPage(formPage+1)
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        // try {
        //     const res = await fetch( apiBaseUrl + "/api/submit/game", {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       body: JSON.stringify(submitGameData),
        //     })
        //     const result = await res.json();
        //     setResponse(result);
        //   } catch (error) {
        //     console.error('Error making POST request:', error);
        //   }
    }

    const renderFormPage = (formPage) => {
        switch(formPage) {
            case 0:
                return (
                <div className="test">
                    <label name="gameName">Game Name: *</label>
                    <input type="text"
                        name="gameName"
                        placeholder="Hollow Knight"
                        onBlur={checkGameName} 
                        className={errors.gameName !== "" ? "error" : null}/>
                    <span className="errorMessage">{errors.gameName}</span>

                    <label>Developer: *</label>
                    <input type="text" placeholder="My cool Studio" />
                    <label>Does your game have a publisher? *</label>
                    <select 
                        name="selectedReleaseDate"
                        onChange={(e) => setHasPublisher(e.target.value)}
                    >
                        <option disabled selected value>select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {
                        hasPublisher === "yes" 
                        ? <><label>Publisher: *</label>
                            <input type="text" placeholder="My cool Publisher" /></>
                        : null
                    }
                    <label>Does your game have a fixed Release Date? *</label>
                    <select 
                        name="selectedReleaseDate"
                        className={errors.selectReleaseDate !== "" ? "error" : null}
                        onChange={handleReleaseDate}
                        onBlur={handleReleaseDate}
                    >
                        <option disabled selected >select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <span className="errorMessage">{errors.selectReleaseDate}</span>
                    {
                        hasReleaseDate !== null 
                        ? hasReleaseDate === true 
                            ? <><label>Release Date: *</label>
                                <input type="date"/></>
                            : <><label>Release Window: *</label>
                                <input type="text" placeholder="2025, TBD, Q2 2026, August 2026"/></> 
                        : null
                    }
                    <label>Description: *</label>
                    <textarea placeholder="Forge your own path in Hollow Knight! An epic action adventure through a vast ruined kingdom of insects and heroes. Explore twisting caverns, battle tainted creatures and befriend bizarre bugs, all in a classic, hand-drawn 2D style.">
                    </textarea>
                </div>
                )
            case 1:
                return (
                <div className="test">
                    <label>Does your game have a Demo? *</label>
                    <select>
                        <option disabled selected >select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Is your game <b><i>currently</i></b> in Early Access? *</label>
                    <select>
                        <option disabled selected >select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    <label>Was your game <b><i>at any point in time</i></b> on Kickstarter? *</label>
                    <select 
                        name="selectedReleaseDate"
                        onChange={handleKickstarterSelection}
                    >
                        <option disabled selected >select an option</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                    {
                        hasKickstarter === true 
                        ? <><label>Kickstarter Page: *</label>
                            <input type="text" placeholder="https://www.kickstarter.com/projects/squidshockstudios/bo-a-hand-drawn-2d-adventure-based-on-japanes" /></>
                        : null
                    }
                    {
                        hasKickstarter === true 
                        ? <><label>Kickstarter status: *</label>
                        <select>
                            <option disabled selected >select an option</option>
                            <option value="funded">Funded</option>
                            <option value="ongoing">Ongoing</option>
                            <option value="upcoming">Upcoming</option>
                        </select></>
                        : null
                    }
                </div>
                )
            case 2:
                return (
                <div className="test">
                    <p>Everything below is optional, but I ask you to fill in as many as possible!</p>
                    <label>Steam:</label>
                    <input type="text" placeholder="https://store.steampowered.com/app/774361/Blasphemous/" />

                    <label>Epic:</label>
                    <input type="text" placeholder="https://store.epicgames.com/en-US/p/blasphemous" />

                    <label>GoG:</label>
                    <input type="text" placeholder="https://www.gog.com/en/game/blasphemous" />

                    <label>Playstation:</label>
                    <input type="text" placeholder="https://store.playstation.com/en-us/concept/234422" />

                    <label>Xbox:</label>
                    <input type="text" placeholder="https://www.xbox.com/en-US/games/store/blasphemous/9p0478ztxlz4" />

                    <label>Nintendo Switch:</label>
                    <input type="text" placeholder="https://www.nintendo.com/us/store/products/blasphemous-switch/" />
                </div>
                )
            case 3:
                return (
                <div className="test">
                    <p>Everything below is optional, but I ask you to fill in as many as possible!</p>
                    <label>Twitter/X:</label>
                    <input type="text" placeholder="https://twitter.com/metroidvania.gg"/>

                    <label>Facebook:</label>
                    <input type="text" placeholder="https://www.facebook.com/MetroidvaniaGG" />

                    <label>Instagram:</label>
                    <input type="text" placeholder="https://www.instagram.com/metroidvaniagg/" />

                    <label>TikTok:</label>
                    <input type="text" placeholder="https://www.tiktok.com/@metroidvaniagg" />

                    <label>YouTube:</label>
                    <input type="text" placeholder="https://www.youtube.com/@metroidvaniagg"/>

                    <label>Discord:</label>
                    <input type="text" placeholder="https://discord.gg/f64tqHPZCh"/>

                    <label>Homepage:</label>
                    <input type="text" placeholder="https://metroidvania.gg"/>
                </div>
                )
        }
    }

    return (
        <section className="SubmitGamePage">
            <h2>Submit a game</h2>
            <hr/>
            <div className="SubmitGameContainer">
                <form onSubmit={handleSubmit}>
                    <div className="formPageTitleContainer">
                        <ul>
                            <li className={
                                formPage === 0 
                                ? "active" 
                                : formPage > 0 
                                    ? "done"
                                    : null}
                                onClick={
                                formPage > 0 
                                ? () => setFormPage(0)
                                : null}>
                                    Basic Information
                            </li>
                            <li className={
                                formPage === 1 
                                ? "active" 
                                : formPage > 1 
                                    ? "done"
                                    : null}
                                onClick={
                                formPage > 1 
                                ? () => setFormPage(1)
                                : null}>
                                    Demo/Early Access/Kickstarter
                            </li>
                            <li className={
                                formPage === 2 
                                ? "active" 
                                : formPage > 2 
                                    ? "done"
                                    : null}
                                onClick={
                                formPage > 2 
                                ? () => setFormPage(2)
                                : null}>
                                    Platforms
                            </li>
                            <li className={
                                formPage === 3 
                                ? "active" 
                                : formPage > 3 
                                    ? "done"
                                    : null}
                                onClick={
                                formPage > 3 
                                ? () => setFormPage(3)
                                : null}>
                                    Social Media
                            </li>
                        </ul>
                    </div>
                    {renderFormPage(formPage)}

                    <div class="formButtonsContainer">
                        {
                            formPage !== 0 
                            ? <button onClick={handleFormPageDown}>&lt; Back</button>
                            : null
                        }
                        {
                            formPage === 3 
                            ? <button>Submit</button>
                            : <button onClick={handleFormPageUp}>Continue &gt;</button>
                        }
                    </div>
                </form>
            </div>
        </section>
    )
}