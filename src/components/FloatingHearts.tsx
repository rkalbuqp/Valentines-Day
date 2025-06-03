
import React from 'react';

const FloatingHearts = () => {
  return (
    <div className="floating-hearts">
      {[...Array(9)].map((_, i) => (
        <div key={i} className="heart">
          💕
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
