import { Link } from 'react-router-dom';
import GameThumbnail from './GameThumbnail';
import Loading from './Loading';

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
                    props.games !== undefined
                        ? props.games?.map(game => (
                            <GameThumbnail game={game} key={game.id}/>
                        ))
                        : <Loading/>
                }
            </div>
        </section>
    )
}
export default FrontpageContentSection2;
