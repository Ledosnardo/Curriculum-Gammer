import { atom } from "recoil";
import { ILogin } from "types/ILogin";
import gamesJson from 'json/games.json';
import IGames from "types/IGames";
import { IViewGamesPage } from "types/IViewGamesPage";

export const Usuario = atom<ILogin>({
    key: 'addLogin',
    default: {
        'name': '',
        'imageProfile': 'https://uploads.spiritfanfiction.com/historias/capas/201701/interativa--historia-super-aleatoria-nao-usei-drogas-7671274-110120172009.jpg'
    }
})

export const Games = atom<IGames[]>({
    key: 'games',
    default: gamesJson.map((game)=> {return{
        key: game.id,
        id: game.id,
        name: game.name,
        slug: game.slug,
        rating: game.rating,
        image: game.background_image,
        clip: game.clip.clip,
        screenShots: game.short_screenshots,
        genres: game.genres,
        released: game.released
    }})
})

export const ViewGamesPage = atom<IViewGamesPage>({
    key: 'ViewGamesPage',
    default: {
        'banner': [],
        'cardGames': [],
        'carousel': []
    }
})
