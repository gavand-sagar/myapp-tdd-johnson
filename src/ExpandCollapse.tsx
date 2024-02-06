import React, { useState } from 'react'

export default function ExpandCollapse() {
    const [expand, setExpand] = useState(true)

    return (
        <div>
            <div className='header'  >
                HEADER
            </div>
            <div className={'body' + (expand ? '' : ' hide')}>
                <div>
                    <button onClick={() => setExpand(!expand)}>{expand ? "-" : "+"}</button>
                    osm
                </div>
            </div>
        </div>
    )
}
