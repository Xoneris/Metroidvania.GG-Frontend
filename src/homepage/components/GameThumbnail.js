import { Link } from 'react-router-dom';
import { replaceMonthWithName } from './functions';

function GameThumbnail (props) {

    return (
        <Link to={"/" + props.game.slug} key={props.game.id}>
            <div className="Game">
                <img src={'/assets/thumbnails/' + props.game.slug + '.jpg'} alt={props.game.name} />
                <span>{props.game.release_date ? replaceMonthWithName(props.game.release_date) : props.game.release_window}</span>

            </div>
        </Link>
    )
}
export default GameThumbnail;