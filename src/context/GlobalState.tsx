import { createContext, ReactNode, useState } from "react";



import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';
import image4 from '../assets/image4.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpg';
import image9 from '../assets/image9.jpg';
import image10 from '../assets/image10.jpg';
import image11 from '../assets/image11.jpg';
import image12 from '../assets/image12.jpg';
import image13 from '../assets/image13.jpg';
import image14 from '../assets/image14.jpg';
import image15 from '../assets/image15.jpg';
import image16 from '../assets/image16.jpg';
import image17 from '../assets/image17.jpg';
import image18 from '../assets/image18.jpg';
import image19 from '../assets/image19.jpg';



import trailer1 from '../assets/trailer1.mp4';
import trailer2 from '../assets/trailer2.mp4';

interface Movie {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    category: string;
}

interface Movie2 {
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

interface sliderData {

    src: string;
    alt: string;
}

interface GlobalContextType {
    //istenilen değer türlerinin tipleri yazılır
    logo: string;
    movies: Movie[];
    movies2: Movie2[];
    slide2: sliderData[];

}


export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [movies] = useState<Movie[]>([
        { id: '1', title: 'Car', description: 'This is a brief description of Movie Title 1.', imageSrc: image15, category: 'new' },
        { id: '2', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image6, category: 'new' },
        { id: '3', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image7, category: 'new' },
        { id: '4', title: 'Horror', description: 'This is a brief description of Movie Title 4.', imageSrc: image8, category: 'popular' },
        { id: '5', title: 'Science Fiction', description: 'This is a brief description of Movie Title 5.', imageSrc: image9, category: 'popular' },
        { id: '6', title: 'Adventure', description: 'This is a brief description of Movie Title 6.', imageSrc: image10, category: 'popular' },
        { id: '7', title: 'Sport', description: 'This is a brief description of Movie Title 7.', imageSrc: image11, category: 'popular' },
        { id: '8', title: 'Yoga', description: 'This is a brief description of Movie Title 8.', imageSrc: image12, category: 'new' },
        { id: '9', title: 'Documentary', description: 'This is a brief description of Movie Title 9.', imageSrc: image13, category: 'new' },
        { id: '10', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image14, category: 'popular' },
        { id: '11', title: 'Car', description: 'This is a brief description of Movie Title 1.', imageSrc: image15, category: 'new' },
        { id: '12', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image6, category: 'new' },
        { id: '13', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image7, category: 'new' },
        { id: '14', title: 'Horror', description: 'This is a brief description of Movie Title 4.', imageSrc: image8, category: 'popular' },
        { id: '15', title: 'Science Fiction', description: 'This is a brief description of Movie Title 5.', imageSrc: image1, category: 'popular' },
        { id: '16', title: 'Adventure', description: 'This is a brief description of Movie Title 6.', imageSrc: image15, category: 'popular' },
        { id: '17', title: 'Sport', description: 'This is a brief description of Movie Title 7.', imageSrc: image16, category: 'recommend' },
        { id: '18', title: 'Yoga', description: 'This is a brief description of Movie Title 8.', imageSrc: image17, category: 'recommend' },
        { id: '19', title: 'Documentary', description: 'This is a brief description of Movie Title 9.', imageSrc: image18, category: 'recommend' },
        { id: '20', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image19, category: 'recommend' },
        { id: '21', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image2, category: 'recommend' },
        { id: '22', title: 'Yoga', description: 'This is a brief description of Movie Title 8.', imageSrc: image17, category: 'recommend' },
        { id: '23', title: 'Documentary', description: 'This is a brief description of Movie Title 9.', imageSrc: image18, category: 'recommend' },
        { id: '24', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image19, category: 'recommend' },
        { id: '25', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image2, category: 'recommend' },
        { id: '26', title: 'Yoga', description: 'This is a brief description of Movie Title 8.', imageSrc: image17, category: 'recommend' },
        { id: '27', title: 'Documentary', description: 'This is a brief description of Movie Title 9.', imageSrc: image18, category: 'recommend' },
        { id: '28', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image19, category: 'recommend' },
        { id: '29', title: 'Chess', description: 'This is a brief description of Movie Title 10.', imageSrc: image14, category: 'recommend' },
        { id: '30', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image10, category: 'new' },
        { id: '31', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image7, category: 'new' },
        { id: '32', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image15, category: 'new' },
        { id: '33', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image18, category: 'new' },
        { id: '34', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image6, category: 'new' },
        { id: '35', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image15, category: 'new' },
        { id: '36', title: 'Comedy', description: 'This is a brief description of Movie Title 2.', imageSrc: image10, category: 'new' },
        { id: '37', title: 'Family', description: 'This is a brief description of Movie Title 3.', imageSrc: image7, category: 'new' },
    ]);
    const [movies2] = useState<Movie2[]>([
        { id: '1', title: 'Kestik! - Final Cut', description: 'Düşük bütçeli bir zombi filmi çekmeye çalışan film ekibi, gerçek zombilerin saldırısına uğrayınca işler tersine gitmeye başlar.', imageSrc: image15, genre: 'Korku', duration: '107 dk', director: 'Michel Hazanavicius', actors: 'Romain Duris, Berenice Bejo, Gregory Gadebois', trailerUrl: trailer1 },
        { id: '2', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image6, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '3', title: 'Kestik! - Final Cut', description: 'Düşük bütçeli bir zombi filmi çekmeye çalışan film ekibi, gerçek zombilerin saldırısına uğrayınca işler tersine gitmeye başlar.', imageSrc: image7, genre: 'Korku', duration: '107 dk', director: 'Michel Hazanavicius', actors: 'Romain Duris, Berenice Bejo, Gregory Gadebois', trailerUrl: trailer1 },
        { id: '4', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image8, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '5', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image9, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '6', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image10, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '7', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image11, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '8', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image12, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '9', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image13, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '10', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '11', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '12', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '13', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '14', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '15', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '16', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '17', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '18', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '19', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '20', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
        { id: '21', title: 'Movie Title 2', description: 'This is a brief description of Movie Title 2.', imageSrc: image14, genre: 'Drama', duration: '120 dk', director: 'Director 2', actors: 'Actor A, Actor B', trailerUrl: trailer2 },
    ]);
    const [slide2] = useState<sliderData[]>([
        {
            src: image1,
            alt: 'Image 1'
        },
        {
            src: image2,
            alt: 'Image 2'
        },
        {
            src: image3,
            alt: 'Image 3'
        },
        {
            src: image4,
            alt: 'Image 4'
        }
    ]);

    return (
        <GlobalContext.Provider value={{ logo: 'Cinema', movies, movies2, slide2 }}>
            {children}
        </GlobalContext.Provider>
    );
};
