import React, { useState } from 'react';
import TrackingResult from './components/TrackingResult';

function App() {
  const [data, setData] = useState([]);

  console.log(data);

  const submitHandler = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    fetch(`http://localhost:3001/?tracking=${data.tracking}`)
    .then(response => response.json())
    .then(result => {
      if (result.message === "OK") {
        setData(result.data);
      }
    })
    .catch(console.error);
};

  return (
    <div className="container">
      <h1>Sistema de rastreamento dos Correios</h1>

      <form onSubmit={submitHandler}>
          <div className="form-group">"
            <input type="text" name="tracking" className="form-control"/>
          </div>        

          <button type="submit"className="btn btn-primary">Rastrear</button>
      </form>

      <TrackingResult data={data} />
      </div>
  );
}

export default App;
