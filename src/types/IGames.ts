export default interface IGames{
    id: number
    name: string
    slug: string
    rating: number
    image: string
    clip: string
    released:string
    screenShots: {
        id: number
        image: string
    }[]
    genres: {
        id: number
        name: string
        slug: string
        games_count: number
        image_background: string
    }[]
}[]