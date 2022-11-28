import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Characters from './components/Characters'
import Pagination from './components/Pagination'



function App() {

  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState ({});

  const initialUrl = "https://rickandmortyapi.com/api/character";

  const fetchCharacters = (urL) => {
    fetch(urL)
      .then(response => response.json())
      .then(data => {        
        setCharacters(data.results);
        setInfo(data.info)
      })
      .catch(error => console.log(error))
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])

  return (
    <>
      <Navbar brand="Rick and Morty App" />
      <div className="container mt-5">
        <Pagination />
        <Characters characters={characters} />
        <Pagination />
      </div>
    </>
  );
}

export default App;
