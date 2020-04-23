import React, { useState, useEffect } from 'react'
import NumberInput from './components/NumberInput/NumberInput'
import StarshipList from './components/StarshipList/StarshipsList'
import Pages from './components/Pages/Pages'
import Loading from './components/Loading/Loading'

import './App.css'

const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

function App() {

  const [distanceInMGLT, setDistanceInMGLT] = useState()
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchStarships()
  }, [])

  function onBlur(value) {
    setDistanceInMGLT(value)
  }

  function fetchStarships(url = 'https://swapi.dev/api/starships/') {
    setLoading(true)
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(() => setData(initialState))
      .finally(() => setLoading(false)) 
  }

  return (
    <>
      <div className="app">
        <h1>Stars wars travel planner</h1>
        {
          !loading ? 
          <div>
            <NumberInput
              value={distanceInMGLT}
              onBlur={onBlur}
            />
            <StarshipList
              distance={distanceInMGLT}
              starships={data.results}
            />
            <Pages 
              next={data.next ? () => fetchStarships(data.next) : null}
              previous={data.previous ? () => fetchStarships(data.previous) : null}
            />
          </div> 
          : <div>
              <Loading />
              <p>Loading starship data...</p>
            </div> 
        }
        <footer>
          <small>Desenvolvido por Cleiton Luiz Rocha Teoodoro</small>
        </footer>
      </div>
    </>
  )
}

export default App
