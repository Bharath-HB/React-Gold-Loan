import React, { useState } from 'react';
import './App.css';

function App() {
  const [weight, setWeight] = useState(0);  // Default weight to 0
  const [interest, setInterest] = useState(null);  // State to store the calculated interest

  // Function to handle the calculation
  const calculateInterest = () => {
    const calculatedInterest = weight * 6445 * 0.916;
    setInterest(calculatedInterest.toFixed(2));
  };

  return (
    <div className="App">
      <header>
        <h1>Gold Loan</h1>
      </header>
      <div className="slider-container">
        <h2>Enter weight of gold (in grams):</h2>
        <input
          type="range"
          min="0"
          max="100"
          step="1"
          value={weight}
          onChange={(e) => setWeight(parseFloat(e.target.value))}
          className="slider"  
        />
        <div className="slider-label">Weight: {weight} grams</div>
        <button onClick={calculateInterest}>Calculate</button>
      </div>
      <div>
        {interest !== null && (
          <h2>Loan: {interest} Rupees</h2>
        )}
      </div>
    </div>
  );
}

export default App;
