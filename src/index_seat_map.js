import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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

const SeatMapSelector = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seat) => {
    if (!seat.available) return;

    const isSelected = selectedSeats.find(
      (s) => s.row === seat.row && s.column === seat.column
    );

    if (isSelected) {
      // Deselect seat
      setSelectedSeats(selectedSeats.filter(
        (s) => !(s.row === seat.row && s.column === seat.column)
      ));
    } else if (selectedSeats.length < 2) {
      // Select seat (limit 2)
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const totalUpcharge = selectedSeats.reduce(
    (sum, seat) => sum + seat.upcharge,
    0
  );

  // Group seats by row for rendering
  const rows = [];
  for (let i = 1; i <= 6; i++) {
    rows.push(seatData.filter((seat) => seat.row === i));
  }

  return (
    <div style={{ fontFamily: 'sans-serif', padding: '20px' }}>
      <h1>Seat Selection</h1>
      <p>Select up to 2 seats for your flight.</p>

      <div style={{ display: 'inline-block', border: '1px solid #ccc', padding: '10px' }}>
        {rows.map((rowSeats, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', marginBottom: '5px' }}>
            {rowSeats.map((seat) => {
              const isSelected = selectedSeats.find(
                (s) => s.row === seat.row && s.column === seat.column
              );
              return (
                <button
                  key={seat.column}
                  onClick={() => toggleSeat(seat)}
                  disabled={!seat.available}
                  style={{
                    width: '60px',
                    height: '60px',
                    marginRight: '5px',
                    cursor: seat.available ? 'pointer' : 'not-allowed',
                    backgroundColor: !seat.available
                      ? '#ccc'
                      : isSelected
                      ? '#4caf50'
                      : '#fff',
                    border: '1px solid #999',
                    borderRadius: '4px',
                    textAlign: 'center',
                    fontSize: '12px',
                  }}
                >
                  <div>{seat.row}{seat.column}</div>
                  <div style={{ fontSize: '10px', color: '#555' }}>
                    {seat.type}
                  </div>
                  {seat.upcharge > 0 && (
                    <div style={{ fontSize: '10px', color: 'red' }}>
                      +${seat.upcharge}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>

      <div style={{
        marginTop: '20px',
        padding: '10px',
        border: '1px solid #ccc',
        width: '250px'
      }}>
        <h3>Selected Seats</h3>
        <p>{selectedSeats.length > 0
          ? selectedSeats.map(seat => `${seat.row}${seat.column}`).join(', ')
          : 'None'}</p>
        <p>Total Upcharge: ${totalUpcharge}</p>
        <button
          disabled={selectedSeats.length === 0}
          style={{
            padding: '10px',
            backgroundColor: selectedSeats.length === 0 ? '#ccc' : '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: selectedSeats.length === 0 ? 'not-allowed' : 'pointer',
          }}
        >
          Confirm Selection
        </button>
      </div>
    </div>
  );
};

ReactDOM.render(<SeatMapSelector />, document.getElementById('root'));
