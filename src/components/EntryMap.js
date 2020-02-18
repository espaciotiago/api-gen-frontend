import React from 'react'
//Assets
import Delete from '../assets/delete.png'

function EntryMap(props) {
    const item = props.item
    var entryLeft = item.entryLeft
    var entryRigth = item.entryRigth
    var relation = item.relation
    return (
        <div className="board-relations">
            <div className="relations-container">
                {entryLeft &&
                    <div className="entity-container-for-board">
                        <div id="entity-outlined">
                            <p>
                                {entryLeft.label}
                            </p>
                        </div>
                    </div>}
                {relation &&
                    <div className={relation.type === "one" ? "rel-one-container-for-board" : "rel-multi-container-for-board"}>
                        <div id={relation.label}>
                            <p>
                                {relation.label}
                            </p>
                        </div>
                    </div>}
                {entryRigth &&
                    <div className="entity-container-for-board">
                        <div id={entryRigth.label}>
                            <p>
                                {entryRigth.label}
                            </p>
                        </div>
                    </div>}
            </div>
            <span className="delete-relation" onClick={props.onDelete}>
                <img src={Delete} />
            </span>
        </div>
    )
}

export default EntryMap