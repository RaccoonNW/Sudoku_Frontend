import React, { useState } from "react";

function SolutionTile({ tileData }) {

    const [tileContent, setTileContent] = useState(tileData.split())

    return (
        <p className='tile'>
            {tileContent}
        </p>
    )
}

export default SolutionTile