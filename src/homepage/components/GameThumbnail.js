import { Link } from 'react-router-dom';
import { replaceMonthWithName } from './functions';

function GameThumbnail (props) {

    return (
        <Link to={"/" + props.game.slug} key={props.game.id}>
            {
             props.noThumbnail !== true ? 
            <div className="Game" title={props.game.name}>
                <img src={'/assets/thumbnails/' + props.game.slug + '.jpg'} alt={props.game.name} />
                <span className="ReleaseLabel">{props.game.release_date ? replaceMonthWithName(props.game.release_date) : props.game.release_window}</span>
                {props.game.earlyaccess === true ? <span className="EarlyAccessLabel">Early Access</span> : null}
            </div> :
            <div className="Game-NoThumbnail">
                {props.game.name}
            </div>
            }
        </Link>
    )
}
export default GameThumbnail;