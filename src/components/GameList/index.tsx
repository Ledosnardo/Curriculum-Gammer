import { useState } from 'react';
import { Container, Div, DivBackground, DivDescription } from "./styles";
import GenresGames from "components/GenresGames";
import gamesGenres from 'json/genresGames.json';
import { useFilterDropDawn } from "state/hooks/useFilters";

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
                        </Container>
                    )
                })}
            </div>
        </Div>
    )
}

export default GameList