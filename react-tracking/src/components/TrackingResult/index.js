import React from "react";

function TrackingResult({ data }) {
  if (!data || !data.length) return null;

  return (
    <>
      <h1>Resultado</h1>
      <ul className="list-group">
        {data.map(item => {
          const { data, origem, destino, status } = item;

          return (
            <li key={item.descricao} className="list-group-item">
              <span className="badge badge-primary">{origem}</span>
              <span>data: {data}</span>
              <span>destino: {destino}</span>
              <span>status: {status}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TrackingResult;