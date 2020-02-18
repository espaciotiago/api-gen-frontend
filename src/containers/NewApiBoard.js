import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
//Components
import Borad from '../components/Board'
import ElementDraggable from '../components/ElementDraggable'
import PrimaryButton from '../components/PrimaryButton'
import AccentButton from '../components/AccentButton'
import NewEntryScreen from '../containers/NewEntryScreen'
import EntryMap from '../components/EntryMap'
import { ToastContainer, toast } from 'react-toastify'
//Styles
import 'react-toastify/dist/ReactToastify.css';
import '../styles/api-board.scss'

function NewApiBoard() {
    //---------------------------------------
    //General utilities
    //---------------------------------------
    const history = useHistory()
    //---------------------------------------
    //State variables
    //---------------------------------------
    const [openEntry, setOpenEntry] = useState(false)
    const [relation, setRelation] = useState()
    const [entryLeft, setEntryLeft] = useState()
    const [entryRigth, setEntryRigth] = useState()
    const [entries, setEntries] = useState([1, 2, 3, 4])
    const [relations, setRelations] = useState([])
    //---------------------------------------
    //Methods
    //---------------------------------------
    const onNewEntry = (element) => {
        if (element === "new-entity") {
            setOpenEntry(true)
        } else {
            showToast("warning", "Oops! This element is not compatible here. Try with New Entity")
        }
    }
    //---------------------------------------
    const onNewRelation = (element) => {
        var verify = true
        const relationTemp = { type: "one", class: "rel-one-container-for-board", label: "Relation 1-1" }
        if (element === "relation-multi") {
            setRelation({ type: "multi", class: "rel-multi-container-for-board", label: "Relation 1-*" })
        } else if (element === "relation-one") {
            setRelation(relationTemp)
        } else {
            verify = false
            showToast("warning", "Oops! This element is not compatible here. Try with Relation")
        }
        //Verify if complete the other 2 (to be the three)
        if (verify) {
            if (entryRigth && entryRigth !== null
                && entryLeft && entryLeft !== null) {
                //Completed the three - Add the new relation to the map
                const relationsTemp = [...relations]
                const relationObj = {
                    relation: relationTemp,
                    entryLeft: entryLeft,
                    entryRigth: entryRigth
                }
                relationsTemp.push(relationObj)
                setRelations(relationsTemp)
                //Reboot the board for creation
                setRelation(null)
                setEntryRigth(null)
                setEntryLeft(null)
            }
        }
    }
    //---------------------------------------
    const onEntryLeft = (element) => {
        var verify = true
        const entryTemp = { type: "entry", class: "entity-container-for-board", label: element }
        if (element === "relation-multi"
            || element === "relation-one"
            || element === "new-entity") {
            verify = false
            showToast("warning", "Oops! This element is not compatible here. Try with an Entry")
        } else {
            setEntryLeft(entryTemp)
        }
        //Verify if complete the other 2 (to be the three)
        if (verify) {
            if (entryRigth && entryRigth !== null
                && relation && relation !== null) {
                //Completed the three - Add the new relation to the map
                const relationsTemp = [...relations]
                const relationObj = {
                    relation: relation,
                    entryLeft: entryTemp,
                    entryRigth: entryRigth
                }
                relationsTemp.push(relationObj)
                setRelations(relationsTemp)
                //Reboot the board for creation
                setRelation(null)
                setEntryRigth(null)
                setEntryLeft(null)
            }
        }
    }
    //---------------------------------------
    const onEntryRigth = (element) => {
        var verify = true
        const entryTemp = { type: "entry", class: "entity-container-for-board", label: element }
        if (element === "relation-multi"
            || element === "relation-one"
            || element === "new-entity") {
            verify = false
            showToast("warning", "Oops! This element is not compatible here. Try with an Entry")
        } else {
            setEntryRigth(entryTemp)
        }
        //Verify if complete the other 2 (to be the three)
        if (verify) {
            if (entryLeft && entryLeft !== null
                && relation && relation !== null) {
                //Completed the three - Add the new relation to the map
                const relationsTemp = [...relations]
                const relationObj = {
                    relation: relation,
                    entryLeft: entryLeft,
                    entryRigth: entryTemp
                }
                relationsTemp.push(relationObj)
                setRelations(relationsTemp)
                //Reboot the board for creation
                setRelation(null)
                setEntryRigth(null)
                setEntryLeft(null)
            }
        }
    }
    //---------------------------------------
    const onDiscard = () => {
        history.push('./')
    }
    //---------------------------------------
    const onCloseEntry = () => {
        setOpenEntry(false)
    }
    //---------------------------------------
    const showToast = (type, text) => {
        switch (type) {
            case "warning":
                toast(text)
                break
            case "error":
                toast.error(text, {
                    position: toast.POSITION.TOP_RIGHT
                })
                break
            case "success":
                toast.success(text, {
                    position: toast.POSITION.TOP_RIGHT
                })
                break
            default:
                toast(text)
                break
        }
    }
    //---------------------------------------
    const onDeleteRelation = (index) => {
        const relationTemp = [...relations]
        relationTemp.splice(index,1)
        setRelations(relationTemp)
    }
    //---------------------------------------
    //Render the view
    //---------------------------------------
    return (
        <div className="api-board">
            <ToastContainer />
            <NewEntryScreen open={openEntry} onClose={onCloseEntry} />
            {/* Card with the elements */}
            <div className="card-elements">
                <div>
                    <h4>F*ckUp API</h4>
                    <p>Api para consultar insultos random</p>
                    <p><b>Entities: </b>3</p>
                    <p><b>Queries: </b>3000</p>
                    <div className="card-actions">
                        <div className="actions">
                            <AccentButton label="Discard" onClick={onDiscard} />
                            <PrimaryButton label="Save" />
                        </div>
                        <div className="divider" />
                    </div>
                    <div className="titles">
                        <p>Drag and drop the elements that you want to create</p>
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
                            {entries.map((entriy, index) => {
                                return (
                                    <ElementDraggable
                                        key={"" + index}
                                        type="entity"
                                        draggable="true"
                                        id={"" + entriy} />
                                )
                            })}
                        </Borad>
                    </div>
                </div>
            </div>
            {/* Main board */}
            <div className="main-board">
                {/* Entities */}
                <div className="entities-board">
                    <h1>Entities</h1>
                    <div className="board-entities">
                        {/* Entries dynamic list */}
                        {entries.map((entry, index) => {
                            return (
                                <span
                                    onClick={() => { onNewEntry("new-entity") }}
                                    className="new-entity-container-for-board"
                                    key={"" + index}>
                                    <div id={entry}>
                                        <p>{entry}</p>
                                    </div>
                                </span>
                            )
                        })}
                        {/* Create entry */}
                        <Borad
                            onElementAdded={onNewEntry}
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
                    {/* Dynamic relations created */}
                    {relations.map((entryMap, index) => {
                        return (
                            <EntryMap
                                key={index + ""}
                                item={entryMap}
                                onDelete={() => { onDeleteRelation(index) }} />
                        )
                    })}
                    <div className="board-relations">
                        {/* Relation creation board */}
                        <div className="relations-container">
                            <Borad
                                className={entryLeft && entryLeft !== null && entryLeft.class ?
                                    entryLeft.class : "entity-container-outlined"}
                                onElementAdded={onEntryLeft}>
                                <div id="entity-outlined">
                                    <p>
                                        {entryLeft && entryLeft !== null && entryLeft.label ?
                                            entryLeft.label : "Add Entity"}
                                    </p>
                                </div>
                            </Borad>
                            <Borad
                                className={relation && relation !== null && relation.class ?
                                    relation.class : "rel-multi-container-outlined"}
                                onElementAdded={onNewRelation}>
                                <div id="entity-outlined">
                                    <p>
                                        {relation && relation !== null && relation.label ?
                                            relation.label : "Add Entity"}
                                    </p>
                                </div>
                            </Borad>
                            <Borad
                                className={entryRigth && entryRigth !== null && entryRigth.class ?
                                    entryRigth.class : "entity-container-outlined"}
                                onElementAdded={onEntryRigth}>
                                <div id="entity-outlined">
                                    <p>
                                        {entryRigth && entryRigth !== null && entryRigth.label ?
                                            entryRigth.label : "Add Entity"}
                                    </p>
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