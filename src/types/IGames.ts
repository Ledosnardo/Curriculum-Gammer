export default interface IGames{
    id: number
    name: String
    rating: number
    image: String
    clip: String
    screenShots: {
        id: number
        image: String
    }[]
    genres: {
        id: number
        name: String
        slug: String
        games_count: number
        image_background: String
    }[]
}[]