
import React from 'react';

const FallingPetals = () => {
  return (
    <div className="falling-petals">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="petal" />
      ))}
    </div>
  );
};

export default FallingPetals;
