import { useState } from 'react';
import { Container, Div, DivBackground, DivDescription } from "./styles";
import GenresGames from "components/GenresGames";
import gamesGenres from 'json/genresGames.json';
import { useFilterDropDawn } from "state/hooks/useFilters";
import { Link } from 'react-router-dom';

const GameList = () => {
    const [ filter, SetFilter ] = useState<string>('todos');
    
    const filterDropDawn = useFilterDropDawn;
    const filteredGames = filterDropDawn(filter);

    return (
        <Div>
            <select name="select" onChange={(e) => SetFilter(e.target.value)}>
                <option value="todos">Todos Jogos</option>
                {gamesGenres.map(genre => {
                    return(
                        <option key={genre.id} value={genre.slug}>{genre.name}</option>
                    )
                })}
            </select>
            <div className='games'>
                {filteredGames.map((game, index) => {
                    return(
                        <Container key={index}>
                            <Link to={`/games/${game.slug}`} className='link'>
                                <DivBackground style={{ background: `url(${game.image}) no-repeat center / cover`}}></DivBackground>
                                <DivDescription>
                                    <div className='name'>
                                        <h2>{game.name}</h2>
                                    </div>
                                    <div className="genres">
                                        <h3 className='rating'>Rating: {game.rating}</h3>
                                        <GenresGames games={[game]}/>
                                    </div>
                                </DivDescription>
                            </Link>
                        </Container>
                    )
                })}
            </div>
        </Div>
    )
}

export default GameList