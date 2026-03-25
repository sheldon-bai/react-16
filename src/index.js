import React from 'react'
import ReactDOM from 'react-dom'

const seatData = [
  { row: 1, column: 'A', type: 'Preferred', upcharge: 15, available: true },
  { row: 1, column: 'B', type: 'Preferred', upcharge: 15, available: false },
  { row: 1, column: 'C', type: 'Preferred', upcharge: 15, available: true },
  { row: 1, column: 'D', type: 'Preferred', upcharge: 15, available: true },
  { row: 1, column: 'E', type: 'Preferred', upcharge: 15, available: true },
  { row: 1, column: 'F', type: 'Preferred', upcharge: 15, available: false },

  { row: 2, column: 'A', type: 'Standard', upcharge: 0, available: true },
  { row: 2, column: 'B', type: 'Standard', upcharge: 0, available: true },
  { row: 2, column: 'C', type: 'Standard', upcharge: 0, available: false },
  { row: 2, column: 'D', type: 'Standard', upcharge: 0, available: true },
  { row: 2, column: 'E', type: 'Standard', upcharge: 0, available: true },
  { row: 2, column: 'F', type: 'Standard', upcharge: 0, available: true },

  { row: 3, column: 'A', type: 'Standard', upcharge: 0, available: true },
  { row: 3, column: 'B', type: 'Standard', upcharge: 0, available: true },
  { row: 3, column: 'C', type: 'Standard', upcharge: 0, available: true },
  { row: 3, column: 'D', type: 'Standard', upcharge: 0, available: false },
  { row: 3, column: 'E', type: 'Standard', upcharge: 0, available: true },
  { row: 3, column: 'F', type: 'Standard', upcharge: 0, available: true },

  { row: 4, column: 'A', type: 'Extra Legroom', upcharge: 30, available: true },
  { row: 4, column: 'B', type: 'Extra Legroom', upcharge: 30, available: true },
  { row: 4, column: 'C', type: 'Extra Legroom', upcharge: 30, available: true },
  { row: 4, column: 'D', type: 'Extra Legroom', upcharge: 30, available: false },
  { row: 4, column: 'E', type: 'Extra Legroom', upcharge: 30, available: true },
  { row: 4, column: 'F', type: 'Extra Legroom', upcharge: 30, available: true },

  { row: 5, column: 'A', type: 'Standard', upcharge: 0, available: true },
  { row: 5, column: 'B', type: 'Standard', upcharge: 0, available: false },
  { row: 5, column: 'C', type: 'Standard', upcharge: 0, available: true },
  { row: 5, column: 'D', type: 'Standard', upcharge: 0, available: true },
  { row: 5, column: 'E', type: 'Standard', upcharge: 0, available: true },
  { row: 5, column: 'F', type: 'Standard', upcharge: 0, available: true },

  { row: 6, column: 'A', type: 'Standard', upcharge: 0, available: true },
  { row: 6, column: 'B', type: 'Standard', upcharge: 0, available: true },
  { row: 6, column: 'C', type: 'Standard', upcharge: 0, available: true },
  { row: 6, column: 'D', type: 'Standard', upcharge: 0, available: false },
  { row: 6, column: 'E', type: 'Standard', upcharge: 0, available: true },
  { row: 6, column: 'F', type: 'Standard', upcharge: 0, available: true }
];

function App() {
  const rows = []

  for (let i = 1; i <= 6; i++) {
    rows.push(seatData.filter((seat) => seat.row === i))
  }

  return (
    <div>
      <div>
        seats grid
        {rows.map((rowSeats, rowIndex) => (
          <div key={rowIndex}>
            {rowSeats.map(seat => (
              <button>
                <div>{seat.row}{seat.column}</div>
                <div>{seat.type}</div>
                <div>+{seat.upcharge}</div>
              </button>
            ))}
          </div>
        ))}
      </div>
      <div>
        seats summary
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))