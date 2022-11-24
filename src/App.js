import React, {useEffect} from 'react'
import Navbar from './components/Navbar'


function App() {  
  const fetchCharacters = () => {
    fetch ("https://rickandmortyapi.com/api/character")
      .then (response => response.json())
      .then (data => console.log(data))
      .catch (error => console.log(error))
  }

  useEffect (() => {

  }, [])

  return (
    <Navbar brand="Rick and Morty App"/>
  );
}

export default App;
