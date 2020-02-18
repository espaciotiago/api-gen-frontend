import React from 'react'

function ElementDraggable(props) {
    const type = props.type ? props.type : "entity"
    var className = "entity-container"
    var nameTarget = "Entity"
    switch (type) {
        case "entity":
            className = "entity-container"
            nameTarget = props.id ? props.id : "Entity"
            break
        case "entity-outlined":
            className = "entity-container-outlined"
            nameTarget = "Add Entity"
            break
        case "new-entity":
            className = "new-entity-container"
            nameTarget = "New Entity"
            break
        case "new-entity-outlined":
            className = "new-entity-container-outlined"
            nameTarget = "New Entity"
            break
        case "relation-multi":
            className = "rel-multi-container"
            nameTarget = "Relation 1-*"
            break
        case "relation-multi-outlined":
            className = "rel-multi-container-outlined"
            nameTarget = "Add relation"
            break
        case "relation-one":
            className = "rel-one-container"
            nameTarget = "Relation 1-1"
            break
        default: break
    }
    const dragStart = e => {
        const target = e.target
        e.dataTransfer.setData('card_id', target.id)
    }
    const dragOver = e => {
        e.stopPropagation()
    }
    
    return (
        <div
            id={props.id}
            onDragStart={dragStart}
            onDragOver={dragOver}
            draggable={props.draggable}
            className={className}>
            <p>{nameTarget}</p>
        </div>
    )
}

export default ElementDraggable