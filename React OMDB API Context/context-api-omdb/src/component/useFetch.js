import React, { useState, useEffect } from "react";
// setting the api link
export const API_URL = `https://www.omdbapi.com/?&apikey=${process.env.REACT_APP_MOVIE_KEY}`;

const useFetch = (apiParams) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState({ show: "false", message: "" });
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        setIsLoading(true);
        try {
            const res = await fetch(url);
            const data = await res.json();

            console.log(data);
            if (data.Response === "True") {
                setIsLoading(false);
                setMovie(data.Search || data);
                setIsError({ show: "false", message: "" });
            } else {
                setIsError({ show: "true", message: data.Error });
            }
        } catch (error) {
            console.log(error);
        }
    };

    // debouncing in react js
    useEffect(() => {
        let timeOut = setTimeout(() => {
            getMovie(`${API_URL}&s=${apiParams}`);
        }, 1000);
        console.log("set");
        return () => {
            clearTimeout(timeOut);
            console.log("clear");
        };
    }, [apiParams]);

    return { isLoading, isError, movie };
};

export default useFetch;