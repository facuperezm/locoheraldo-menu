import React from "react";

export default function Itemsito({ children }) {
  return (
    <div className="text-greenLoco my-2">
      <div className="flex justify-between font-black">
        <h3 className="uppercase">{children.name}</h3>
        <span>{children.price || ""}</span>
      </div>
      <p className="normal-case">{children.description}</p>
    </div>
  );
}
