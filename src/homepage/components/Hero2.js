import {useState, useEffect, useContext, useRef} from 'react';
import { Link } from 'react-router-dom';

function Hero2 (props) {

    const [heroTrailer, setHeroTrailer] = useState()

    return (
        <section className="Hero">
            <div className="wrapper">
                <div className="HeroLeft">
                    <iframe title="Hero-Trailer"
                        src={"https://www.youtube.com/embed/" + heroTrailer.trailer}>
                    </iframe>
                    <Link to={"/" + heroTrailer.slug} key={heroTrailer.id}>
                        <span><b>More info!</b></span>
                    </Link>
                </div>
                <div className="HeroRight">
                    {
                        <div id={heroTrailer.trailer === props.games[0]?.trailer ? "active" : null } key={props.games[0]?.id}>
                            <span className="HeroGameSection">Latest Release</span>
                            <img src={'/assets/thumbnails/' + props.games[0]?.slug + '.jpg'} 
                                alt={props.games[0]?.name} 
                                title={props.games[0]?.name} 
                                onClick={() => {setHeroTrailer(props.games[0])}} 
                            />
                        </div>
                    }
                    {
                        <div id={heroTrailer.trailer === props.games[1]?.trailer ? "active" : null } key={props.games[1]?.id}>
                            <span className="HeroGameSection">Coming Up Next</span>
                            <img src={'/assets/thumbnails/' + props.games[1]?.slug + '.jpg'} 
                                alt={props.games[1]?.name} 
                                title={props.games[1]?.name} 
                                onClick={() => {setHeroTrailer(props.games[1])}} 
                            />
                        </div>
                    }
                    {
                        props.games[2]
                        ? <div id={heroTrailer.trailer === props.games[2]?.trailer ? "active" : null } key={props.games[2]?.id}>
                            <span className="HeroGameSection">Live on Kickstarter</span>
                            <img src={'/assets/thumbnails/' + props.games[2]?.slug + '.jpg'} 
                                alt={props.games[2]?.name} 
                                title={props.games[2]?.name} 
                                onClick={() => {setHeroTrailer(props.games[2])}} 
                            />
                        </div>
                        : <div id={heroTrailer.trailer === props.games[3]?.trailer ? "active" : null } key={props.games[3]?.id}>
                            <span className="HeroGameSection">Soon on Kickstarter</span>
                            <img src={'/assets/thumbnails/' + props.games[3]?.slug + '.jpg'} 
                                alt={props.games[3]?.name} 
                                title={props.games[3]?.name} 
                                onClick={() => {setHeroTrailer(props.games[3])}} 
                            />
                        </div>
                    }
                    
                </div>
            </div>
        </section>
    )
}
export default Hero2;