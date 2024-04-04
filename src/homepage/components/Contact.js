import { useState } from "react";

function Contact () {

    const [inquerySelection, setInquerySelection] = useState();

    return (
        <section className="contactPage">
            <h2>Contact</h2>
            <hr/>
            <div className="flex-test">
                <div className="contactForm">
                    
                    <form>
                        <label>Name:</label><br/>
                        <input type="text" /><br/>
                        <label>E-mail: (optional)</label><br/>
                        <input type="text" /><br/>
                        <label>Type of Inquery:</label><br/>
                        <select>
                            <option selected disabled hidden>Select...</option>
                            <option value="bug">Report a bug/error</option>
                            <option value="wrong-information">Report wrong/missing information</option>
                            <option value="business">Business/Sponsoring inquery</option>
                            <option value="feedback">General Feedback</option>
                            <option value="other">Other</option>
                        </select><br/>
                        <label>Message:</label><br/>
                        <input type="text" /><br/>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
            
        </section>
    )
}

export default Contact;