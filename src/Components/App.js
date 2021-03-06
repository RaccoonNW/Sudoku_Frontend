import React, { useState } from 'react';
// import Header from './Header';
import Game from './Game';
import Options from './Options';
import Buttons from './Buttons';
import Stats from './Stats';
import NavBar from './NavBar';
import Saves from './Saves';
import Login from './Login';
import './App.css'
import '../db.json'
import { Route, Routes, useNavigate } from "react-router-dom";
import Signup from './Signup';
// import Counter from './Counter';

// Added a comment

function App() {

  const [user, setUser] = useState(true)

  const [theme, setTheme] = useState(false)
  const [difficulty, setDifficulty] = useState()
  const [gameSolution, setGameSolution] = useState()
  const [lives, setLives] = useState(3)
  const [selected, setSelected] = useState(null)
  const [started, setStarted] = useState(false)
  const [selectedTile, setSelectedTile] = useState()
  const [selectedNumber, setSelectedNumber] = useState()
  const [savedGame, setSavedGame] = useState('')
  const [temporarySaveText, setTemporarySaveText] = useState()


  function updateSavedGame() {
    if (selectedTile !== undefined) {
      const firstHalf = savedGame.substring(0, selectedTile)
      const secondHalf = savedGame.substring(selectedTile + 1)
      setSavedGame(firstHalf + selectedNumber + secondHalf)

    }

}


  function postSavedGame() {
    const savedGameData = {
      id: '',
      difficulty: difficulty.difficulty,
      puzzle: savedGame,
      solution: difficulty.solution,
      lives: lives
    }
    setTimeout(() => {
      fetch('http://localhost:3001/saves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(savedGameData),
      })
    }, 1000)

  }


  // if (!user) {
  //   return (
  //     <Signup setUser={setUser}/>
  //   )
  // } else {
    return (
      <div className='main-container'>
        <div className='navbar-div'>
          <NavBar/>
        </div>
          <Routes>
            <Route path='/saves' element={<Saves temporarySaveText={temporarySaveText}/>}/>
            {/* <Counter/> */}
            <Route
              path='/game'
              element={
                <Game 
                  selectedNumber={selectedNumber} 
                  setSelectedNumber={setSelectedNumber}
                  theme={theme}
                  selected={selected}
                  setSelected={setSelected}
                  difficulty={difficulty}
                  selectedTile={selectedTile}
                  setSelectedTile={setSelectedTile}
                  started={started}
                  lives={lives}
                  setLives={setLives}
                  savedGame={savedGame}
                  setSavedGame={setSavedGame}
                  updateSavedGame={updateSavedGame}
                  setTheme={setTheme} 
                  setStarted={setStarted}
                  postSavedGame={postSavedGame}
                  setTemporarySaveText={setTemporarySaveText}
                  setDifficulty={setDifficulty}
                  setGameSolution={setGameSolution}
                  gameSolution={gameSolution}
                />
              }
            />
                
            {/* <Options setDifficulty={setDifficulty} setStarted={setStarted} setSavedGame={setSavedGame}/> */}
            {/* <Buttons
              setLives={setLives}  
              theme={theme} setTheme={setTheme} 
              setStarted={setStarted}
              savedGame={savedGame}
              setSavedGame={setSavedGame}
              updateSavedGame={updateSavedGame}
              postSavedGame={postSavedGame}
              setTemporarySaveText={setTemporarySaveText}
            /> */}
            {/* <Stats 
              lives={lives} 
              setLives={setLives}
            /> */}
            {/* <Game 
              selectedNumber={selectedNumber} 
              setSelectedNumber={setSelectedNumber}
              theme={theme}
              selected={selected}
              setSelected={setSelected}
              difficulty={difficulty}
              selectedTile={selectedTile}
              setSelectedTile={setSelectedTile}
              started={started}
              lives={lives}
              setLives={setLives}
              savedGame={savedGame}
              setSavedGame={setSavedGame}
              updateSavedGame={updateSavedGame}
            /> */}
        </Routes>
  
      </div>
    )

  


}



export default App;

