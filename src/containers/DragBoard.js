import React from 'react'
import Borad from '../components/Board'
import Card from '../components/Card'

function DragBoard() {
  return (
    <div className="App">
      <main className="flexbox">
        <Borad className="board1" id="board-0"></Borad>
        <Borad className="board1" id="board-1"></Borad>

        <Borad className="board" id="board-2">
          <Card className="card" draggable="true" id="card-1">
            <p>Card one</p>
          </Card>
          <Card className="card" draggable="true" id="card-2">
            <p>Card two</p>
          </Card>
          <Card className="card" draggable="true" id="card-3">
            <p>Card three</p>
          </Card>
        </Borad>
      </main>
    </div>
  )
}

export default DragBoard