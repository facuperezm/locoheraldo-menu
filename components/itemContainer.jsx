import React, { useState } from "react";

export default function ItemContainer({ children, title }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="backdrop-blur-sm rounded-2xl border border-borderLoco my-2 mx-auto p-4 max-w-3xl">
      <h1
        onClick={() => setIsActive(!isActive)}
        className="font-bold text-center uppercase text-lg"
      >
        {title}
      </h1>
      {isActive && children}
    </div>
  );
}
