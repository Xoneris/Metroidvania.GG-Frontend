import { Link } from 'react-router-dom';
import { replaceMonthWithName } from './functions';
import { useContext } from 'react';
import { searchBoxContext } from '../Homepage';

function GameThumbnail (props) {

    const searchBox = useContext(searchBoxContext)

    return (
        <Link to={"/" + props.game.slug} key={props.game.id} onClick={() => {searchBox.setShowSearch(false)}}>
            {
             props.noThumbnail !== true ? 
            <div className="Game" title={props.game.name}>
                {/* <img src={'/assets/thumbnails/' + props.game.slug + '.jpg'} alt={props.game.name} /> */}
                <img src={'https://www.metroidvania.gg/storage/thumbnails/' + props.game.slug + '.jpg'} alt={props.game.name} />
                <span className="ReleaseLabel">{props.game.release_date ? replaceMonthWithName(props.game.release_date) : props.game.release_window}</span>
                {props.game.early_access === true || props.game.early_access === 1 ? <span className="EarlyAccessLabel">Early Access</span> : null}
            </div> :
            <div className="Game-NoThumbnail">
                {props.game.name}
            </div>
            }
        </Link>
    )
}
export default GameThumbnail;