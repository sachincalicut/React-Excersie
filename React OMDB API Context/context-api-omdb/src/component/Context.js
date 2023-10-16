import React, { useContext, useEffect, useState } from "react";

export const API_URL = `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`;

const AppContext = React.createContext();

// we are getting the children and that is app component in our case
const AppProvider = ({ children }) => {

    //   const { isLoading, isError, movie } = useFetch(`&s=${query}`);

    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([]);
    const [isError, setIsError] = useState({ show: "false", message: "" });
    const [query, setQuery] = useState("titanic");

    const getMovies = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search);
                } else {
                setIsError({
                    show: true,
                    message: data.error,
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
      let timerOut =  setTimeout(() => {
            getMovies(`${API_URL}&s=${query}`);
        }, 500);
        return () => clearTimeout(timerOut);
       
    }, [query]);
    return (
        <AppContext.Provider value={{ movie, isLoading, isError, query, setQuery }}>
            {children}
        </AppContext.Provider>
    );
};

const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
