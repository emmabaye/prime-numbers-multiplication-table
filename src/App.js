import React from 'react';
import './App.css';
import { getMultiplicationTableArray, getPrimeNumbers } from './utils/primeNumberUtils';

function App() {
  const tableArray = getMultiplicationTableArray(getPrimeNumbers(10));

  return (
    <div className="app">
      <h3>Multiplication Table of Prime Numbers</h3>
      <table data-testid="multiplication-table" className="table table-striped table-bordered">
        <thead>
          <tr>
        {tableArray[0].map((cell, cellIndex) => {
          return <th scope="col" key={cellIndex}>{cell}</th>;
        })}
         </tr>
        </thead>
        <tbody>
        {tableArray.map((row, rowIndex) => {
          return(rowIndex === 0) ? null : (
            <tr key={rowIndex}>
              {
                row.map((cell, cellIndex) => {
                  return (cellIndex === 0 ) ? <th scope="row"  key={cellIndex}>{cell}</th> : <td  key={cellIndex}>{cell}</td>
                })
              }
            </tr>
            );
        })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
