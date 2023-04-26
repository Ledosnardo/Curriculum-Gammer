import { useRecoilValue } from "recoil";
import { Games } from "state/atom";
import IGames from "types/IGames"


export const useFilterDropDawn = ( filter: string ): IGames[] => {
    const games:IGames[] = useRecoilValue(Games);

    if(filter === 'todos'){ return games }

    const gamesFilter = games.filter(game => {
        const genres = []
        for(let i = 0; i < game.genres.length; i++){
            const genreGame = game.genres[i].slug;
            genres.push(genreGame);
        }
        const genre = genres.filter(genre => genre === filter);
        if(genre.length) return true
    })
    
    return gamesFilter
}

export const useFilterSearch = ( filter: string ): IGames[] | void => {
    const games:IGames[] = useRecoilValue(Games);

    if(filter.length === 0) { return }

    const gamesFilter = games.filter(game => game.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()));
    return gamesFilter
}