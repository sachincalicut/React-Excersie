import React from 'react'
import MovieList from './Movie'
import SearchBar from './Search'

const Home = () => {
  return (
    <>
    <div className="container">
        <SearchBar/>
      <MovieList/>
    </div>
    </>
  )
}

export default Home
