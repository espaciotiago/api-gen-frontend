import React from 'react'
import { useHistory } from 'react-router-dom'
import Borad from '../components/Board'
import ElementDraggable from '../components/ElementDraggable'
import PrimaryButton from '../components/PrimaryButton'
import AccentButton from '../components/AccentButton'
//Styles
import '../styles/api-board.scss'

function NewApiBoard() {
    //---------------------------------------
    //General utilities
    //---------------------------------------
    const history = useHistory()
    //---------------------------------------
    //Methods
    //---------------------------------------
    const onElementAdded = (element) => {
        console.log("Element added", element)
        alert(`ELEMENT DRAGGED AND ADDED ${element}`)
    }
    const onDiscard = () => {
        history.push('./')
    }
    //---------------------------------------
    //Render the view
    //---------------------------------------
    return (
        <div className="api-board">
            {/* Card with the elements */}
            <div className="card-elements">
                <div>
                    <h4>F*ckUp API</h4>
                    <p>Api para consultar insultos random</p>
                    <p><b>Entities: </b>3</p>
                    <p><b>Queries: </b>3000</p>
                    <div className="titles">
                        <h3>Elements</h3>
                        <p>Drag and drop the elemnts that you want to create</p>
                        <div className="divider" />
                    </div>
                    {/* Draggables */}
                    <div className="draggbles-elements">
                        <Borad className="elements">
                            {/* Generic */}
                            <ElementDraggable
                                type="relation-multi"
                                draggable="true"
                                id="relation-multi" />
                            <ElementDraggable
                                type="relation-one"
                                draggable="true"
                                id="relation-one" />
                            <ElementDraggable
                                type="new-entity"
                                draggable="true"
                                id="new-entity" />
                            {/* Dynamic */}
                        </Borad>
                    </div>
                    <div className="card-actions">
                        <div className="divider" />
                        <div className="actions">
                            <AccentButton label="Discard" onClick={onDiscard}/>
                            <PrimaryButton label="Save" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Main board */}
            <div className="main-board">
                {/* Entities */}
                <div className="entities-board">
                    <h1>Entities</h1>
                    <div className="board-entities">
                        <Borad
                            onElementAdded={onElementAdded}
                            className="new-entity-container-outlined">
                            <div id="new-entity-outlined">
                                <p>New Entry</p>
                            </div>
                        </Borad>
                    </div>
                </div>
                {/* Relations */}
                <div className="relations-board">
                    <h1>Relations</h1>
                    <div className="board-relations">
                        <div className="relations-container">
                            <Borad
                                className="entity-container-outlined"
                                onElementAdded={onElementAdded}>
                                <div id="entity-outlined">
                                    <p>Add Entity</p>
                                </div>
                            </Borad>
                            <Borad
                                className="rel-multi-container-outlined"
                                onElementAdded={onElementAdded}>
                                <div id="entity-outlined">
                                    <p>Add Relation</p>
                                </div>
                            </Borad>
                            <Borad
                                className="entity-container-outlined"
                                onElementAdded={onElementAdded}>
                                <div id="entity-outlined">
                                    <p>Add Entity</p>
                                </div>
                            </Borad>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewApiBoard