import { SocialIcon } from 'react-social-icons'

function Footer () {

    return (
        <footer>
            <div className="wrapper">
                <div className="footerContent">
                    <img src="/assets/Logo.png" alt="Logo" />
                </div>
                <div className="footerContent footerAbout">
                    <h2>About</h2>
                    <p>Metroidvania.GG is a hub focused on showcasing Metroidvania games in development. </p>
                </div>
                <div className='footerContent'>
                    <h2>Other Useful Links</h2>

                    <ul>
                        <li>Demajen's Metroidvania Maps</li>
                        <li>Metroidvania Subreddit</li>
                    </ul>

                </div>
                <div className="footerContent">
                    <h2>Stay in touch</h2>
                    <SocialIcon bgColor='#dd8500' fgColor='#111111' target='_blank' url="https://twitter.com/metroidvania_gg" />
                    <SocialIcon bgColor='#dd8500' fgColor='#111111' target='_blank' url="https://www.youtube.com/@metroidvaniagg" />
                    <SocialIcon bgColor='#dd8500' fgColor='#111111' target='_blank' url="mailto:hello&commat;metroidvania&period;gg" />
                    <SocialIcon bgColor='#dd8500' fgColor='#111111' target='_blank' url="https://discord.gg" />
                </div>
            </div>
            <div className="copyright">
                @2024 - Metroidvania.GG. All Right Reserved. Designed and Developed by <a href='https://twitter.com/xoneris' target='_blank'>Xoneris</a>
            </div>
        </footer>
    )
}

export default Footer;