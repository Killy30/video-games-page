import { Link } from 'react-router-dom'

import '../style/cardGame.css'


const CardGame = (props) =>{
    const game = props.data
    console.log(game);
    return(
        <div className="col-md-3 mb-4 card_container" key={game.id}>
            <a href={game.freetogame_profile_url} className="card">
                <div className='card_img'>
                    <img src={game.thumbnail} className="img_xbw" alt={game.title} />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{game.title}</h5>
                    <p className=''>{game.genre}</p>
                    <p className=''>{game.release_date}</p>
                    {/* <a href={game.freetogame_profile_url} className="btn btn-primary">Go profile</a> */}
                </div>
            </a>
        </div>
    )
}

export default CardGame;