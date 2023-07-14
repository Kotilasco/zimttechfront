import React from "react";

function Person({ person }) {
  return (
    <div className="py-8 px-16 bg-[#1b1b1b] text-white my-8 w-[70%] mx-auto rounded-md">
      <h3>{person.name}</h3>
      <p>Gender - {person.height}</p>
      <p>Birth year - {person.bloodPressure}</p>
    </div>
  );
}

export default Person;
