export interface Movie {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    category: string;
}

export interface Movie2 {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    genre: string;
    duration: string;
    director: string;
    actors: string;
    trailerUrl: string;
}

export interface sliderData {

    src: string;
    alt: string;
}

export interface GlobalContextType {
    //istenilen değer türlerinin tipleri yazılır
    logo: string;
    movies: Movie[];
    movies2: Movie2[];
    slide2: sliderData[];

}