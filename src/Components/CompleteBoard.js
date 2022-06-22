import SolutionTile from "./SolutionTile"

function CompleteBoard({ difficulty, started, lives, setLives }) {
    return (
        <>
            <br/>
            <br/>
            {started && difficulty && difficulty.solution.split('').map((tileData, idx) => {
                return (
                    <SolutionTile 
                        tileData={tileData} 
                        id={idx} 
                        key={idx}
                        difficulty={difficulty}
                        lives={lives}
                        setLives={setLives}
                    />
                )
            })} 
        </>
    )
}

export default CompleteBoard