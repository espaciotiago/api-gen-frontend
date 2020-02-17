import React from 'react'

function Board(props) {

    const drop = e => {
        e.preventDefault()
        const card_id = e.dataTransfer.getData('card_id')
        const card = document.getElementById(card_id)
        if (card && card != null) {
            if(props.onElementAdded){
                props.onElementAdded(card_id)
            }
        }
    }

    const dragOver = e => {
        e.preventDefault()
    }

    return (
        <div
            id={props.id}
            onDrop={drop}
            onDragOver={dragOver}
            className={props.className}
        >
            {props.children}
        </div>
    )
}

export default Board