import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Team Lead & Developer",
          "React Native Developer",
          "React JS Developer",
          "Micro Frontend Architect",
          "Full Stack Engineer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
