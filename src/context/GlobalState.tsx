import { createContext, ReactNode, useState } from "react";
import { GlobalContextType } from "./types";
import { movies, movies2, slide2 } from '../data/data';







export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
    children: ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {

    const [moviesState] = useState(movies); // movies verisi
    const [movies2State] = useState(movies2); // movies2 verisi
    const [slide2State] = useState(slide2); // slide2 verisi

    return (
        <GlobalContext.Provider value={{ logo: 'Cinema', movies: moviesState, movies2: movies2State, slide2: slide2State }}>
            {children}
        </GlobalContext.Provider>
    );
};
