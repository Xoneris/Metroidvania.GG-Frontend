import { Link } from 'react-router-dom';
import GameThumbnail from './GameThumbnail';

function FrontpageContentSection2 (props) {

    return (
        <section className="FrontpageSection" id={props.title}>
            <div className='FrontpageSectionTitle'>
                <h2>{props.title}</h2>
                {
                    props.title !== "Coming Soon" 
                        ? <Link to={"/"+props.title}><i>[view all]</i></Link> 
                        : null
                }
            </div>
            <hr/>
            <div className="wrapper">
                {
                    props.games.map(game => (
                        <GameThumbnail game={game} key={game.id}/>
                    ))
                    
                }
            </div>
        </section>
    )
}
export default FrontpageContentSection2;
