import './App.css'

function Stats({lives}) {

    return (
        <div id="stats">
            <p id="lives">{lives > 0 ? `Lives: ${lives}` : "GAME OVER"}</p>
        </div>
    )
}

export default Stats