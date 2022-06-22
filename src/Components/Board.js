import './App.css'
import React from 'react'
import Tile from './Tile'

function Board({
    difficulty, 
    setSelectedTile, 
    selectedTile, 
    started,  
    selectedNumber, 
    setSelectedNumber, 
    lives, 
    setLives,
    setSavedGame,
    savedGame,
    updateSavedGame
}) {

    
    return (
        <>
            <br/>
            <br/>
                {started && difficulty && difficulty.puzzle.split('').map((tileData, idx) => {
                    return (
                        <Tile 
                            tileData={tileData} 
                            setSelectedTile={setSelectedTile} 
                            selectedTile={selectedTile} 
                            id={idx} 
                            key={idx}
                            difficulty={difficulty}
                            setSelectedNumber={setSelectedNumber}
                            selectedNumber={selectedNumber}
                            lives={lives}
                            setLives={setLives}
                            savedGame={savedGame}
                            setSavedGame={setSavedGame}
                            updateSavedGame={updateSavedGame}
                        />
                    )
                })} 
        </>
        
    )
}

export default Board