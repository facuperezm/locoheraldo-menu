import React from "react";

export default function Itemsito({ data }) {
  return (
    <div>
      <h3>{data.name}</h3>
      <span>{data.precio}</span>
      <p>{data.descripcion}</p>
    </div>
  );
}
