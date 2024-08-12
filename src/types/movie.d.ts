export interface Movie {
    id: number,
    title: string,
    poster_path: string,
    original_title: string,
    overview: string,
    popularity: number,
    vote_average: number,
    
}

export interface Props {
    movie: Movie,
    IMAGE_BASE_URL: string,
}
