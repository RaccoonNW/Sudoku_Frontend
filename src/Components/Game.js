import './App.css'
import React from 'react'
import Board from './Board'
import NumElement from './NumElement'
import Buttons from './Buttons'
import Options from './Options'
import Stats from './Stats'
import CompleteBoard from './CompleteBoard'

function Game({
    difficulty, 
    selectedNumber, 
    setSelectedNumber,
    selectedTile,
    setSelectedTile,
    started,
    lives,
    setLives,
    savedGame,
    setSavedGame,
    updateSavedGame,
    setStarted,
    theme,
    setTheme,
    postSavedGame,
    setTemporarySaveText,
    setDifficulty
}) {


    const numArray = [
        'one', 
        'two', 
        'three', 
        'four',
        'five', 
        'six', 
        'seven',
        'eight',
        'nine',
    ]
        


    return (
        <div id="game" className='game-main-div'>
            <div className='options-div'>
                <Options
                    setDifficulty={setDifficulty}
                    setStarted={setStarted} 
                    setSavedGame={setSavedGame}
                />
            </div>
            <div className='buttons-div'>
                <Buttons
                    setLives={setLives}  
                    theme={theme} 
                    setTheme={setTheme} 
                    setStarted={setStarted}
                    savedGame={savedGame}
                    setSavedGame={setSavedGame}
                    updateSavedGame={updateSavedGame}
                    postSavedGame={postSavedGame}
                    setTemporarySaveText={setTemporarySaveText}
                    difficulty={difficulty}
                />
            </div>
            <div className='stats-div'>
                <Stats lives={lives} setLives={setLives}/>
            </div>
            {lives > 0 ?
                <div className='board-div'>
                    <Board 
                        difficulty={difficulty}
                        selectedTile={selectedTile}
                        setSelectedTile={setSelectedTile}
                        started={started}
                        // handleClickTile={handleClickTile}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber}
                        lives={lives}
                        setLives={setLives}
                        savedGame={savedGame}
                        setSavedGame={setSavedGame}
                        updateSavedGame={updateSavedGame}
                    />
                </div>
             : 
                <div className='board-div'>
                    <CompleteBoard
                        difficulty={difficulty}
                        selectedTile={selectedTile}
                        setSelectedTile={setSelectedTile}
                        started={started}
                        // handleClickTile={handleClickTile}
                        selectedNumber={selectedNumber}
                        setSelectedNumber={setSelectedNumber}
                        lives={lives}
                        setLives={setLives}
                        savedGame={savedGame}
                        setSavedGame={setSavedGame}
                        updateSavedGame={updateSavedGame}
                    />
                </div>
            }
            <div id="number-container" className={started ? '' : 'hidden'}>
                {numArray.map((num, numId) => {
                    return (
                        <NumElement
                            setSelectedNumber={setSelectedNumber}
                            selectedNumber={selectedNumber}
                            id={num}
                            key={numId}
                            number={numId + 1}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Game