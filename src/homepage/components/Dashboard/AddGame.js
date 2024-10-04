import { useState } from "react"

export default function AddGame () {
    
    const [formData, setFormData] = useState({
        name: null,
        slug: null,
        developer: null,
        publisher: null,
        release_window: null,
        release_date: null,
        description: null,
        demo: null,
        earlyaccess: null,
        kickstarter_status: null,
        kickstarter_page: null,
        trailer: null,
        twitter: null,
        facebook: null,
        instagram: null,
        tiktok: null,
        youtube: null,
        discord: null,
        homepage: null,
        steam: null,
        epic: null,
        gog: null,
        playstation: null,
        xbox: null,
        nintendo: null,
    })

    return (
        <>
            <h2>Add New Game</h2>
            <div className="AddNewGameContainer">
                    <label>Name:</label>
                    <input type="text" placeholder="Hollow Knight" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                    <label>Developer:</label>
                    <input type="text" />
                    <label>Publisher:</label>
                    <input type="text" />
                    <label>Release window:</label>
                    <input type="text" />
                    <label>Release date:</label>
                    <input type="date" />
                    <label>Description:</label>
                    <textarea></textarea>
                <hr/>
                <label>Demo:</label>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <label>Early Access:</label>
                <select>
                    <option>Yes</option>
                    <option>No</option>
                </select>
                <label>Kickstarter status:</label>
                <select>
                    <option>Successful</option>
                    <option>Live</option>
                    <option>Upcoming</option>
                    <option>Unsuccessful</option>
                </select>
                <label>Kickstarter:</label>
                <input type="text" />
                <label>Trailer:</label>
                <input type="text" />
                <hr/>
                <label>Twitter:</label>
                <input type="text" />
                <label>Facebook:</label>
                <input type="text" />
                <label>Instagram:</label>
                <input type="text" />
                <label>Tiktok:</label>
                <input type="text" />
                <label>YouTube:</label>
                <input type="text" />
                <label>Discord:</label>
                <input type="text" />
                <label>Homepage:</label>
                <input type="text" />
                <hr/>
                <label>Steam:</label>
                <input type="text" />
                <label>Epic:</label>
                <input type="text" />
                <label>GoG:</label>
                <input type="text" />
                <label>Playstation:</label>
                <input type="text" />
                <label>Xbox:</label>
                <input type="text" />
                <label>Nintendo:</label>
                <input type="text" />

                <button>Submit</button>
            </div>
        </>
    )
}