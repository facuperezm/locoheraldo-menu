import React from "react";

export default function Itemsito({ children }) {
  return (
    <div className="text-greenLoco my-1">
      <div className="flex justify-between font-bold ">
        <h3>{children.name}</h3>
        <span>${children.price}</span>
      </div>
      <p>{children.description}</p>
    </div>
  );
}
