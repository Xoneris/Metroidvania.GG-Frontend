import { SocialIcon } from 'react-social-icons'

function Footer () {

    const email = ("hello@" + "metroidvania.gg");

    return (
        <footer>
            <div className="wrapper">
                <div className="footerContent">
                    <img src="/assets/Logo.png" alt="Logo" />
                </div>
                <div className="footerContent">
                    <h2>Metroidvania Content Creators</h2>
                    <ul>
                        <li><a href="https://www.youtube.com/@soulsborneseeker" target="_blank">Soulsborne Seeker</a></li>
                        <li><a href="https://www.youtube.com/@MetroidvaniaGuru" target="_blank">Metroidvania Guru</a></li>
                        <li><a href="https://www.youtube.com/@demajen" target="_blank">Demajen</a></li>
                    </ul>
                </div>
                <div className='footerContent'>
                    <h2>Other Useful Links</h2>

                    <ul>
                        <li><a href="https://demajen.co.uk" target="_blank">Demajen's Metroidvania Maps</a></li>
                        <li><a href="https://reddit.com/r/metroidvania/" target="_blank">Metroidvania Subreddit</a></li>
                    </ul>

                </div>
                <div className="footerContent">
                    <h2>Stay in touch</h2>
                    <SocialIcon bgColor='#dd8500' fgColor='#111111' target='_blank' url="https://twitter.com/metroidvania_gg" />
                    <SocialIcon bgColor='#dd8500' fgColor='#111111' target='_blank' url="https://www.youtube.com/@metroidvania.gg" />
                    <SocialIcon bgColor='#dd8500' fgColor='#111111' target='_blank' url={"mailto:" + email} />
                    <SocialIcon bgColor='#dd8500' fgColor='#111111' target='_blank' url="https://discord.gg/f64tqHPZCh" />
                </div>
            </div>
            <div className="copyright">
                @2024 - Metroidvania.GG. All Right Reserved. Designed and Developed by <a href='https://twitter.com/xoneris' target='_blank'>Xoneris</a>
            </div>
        </footer>
    )
}



export default Footer;