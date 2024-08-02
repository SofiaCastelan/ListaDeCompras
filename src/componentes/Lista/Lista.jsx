import React, { useState } from 'react';
import "./Lista.css"


function Lista() {
  const [list, setList] = useState([]);
  const [dentroInput, setDentroInput] = useState('');

  const Mandar = (e) => {
    e.preventDefault();
    if (dentroInput.trim() === '') return;

    setList([...list, dentroInput]);
    setDentroInput('');
  };

  return (
    <div className="lista">
      <h1>Lista de Compras</h1>
      <ul className='categoria'>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <form onSubmit={Mandar}>
        <input
          type="text"
          value={dentroInput}
          onChange={(e) => setDentroInput(e.target.value)}
          placeholder="Agregar algo nuevo a tu lista de compras"
        />
        <button type="submit">Mas</button>
      </form>
    </div>
  );
}

export default Lista;