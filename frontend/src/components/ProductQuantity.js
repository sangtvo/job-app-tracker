import React, { useState } from 'react';
import { SlArrowDown, SlArrowUp } from 'react-icons/sl';

function ProductQuantity() {
  const [quantity, setQuantity] = useState(0);

  const increase = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
    }
  };

  const decrease = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <button onClick={increase}>
        <SlArrowUp /> 
      </button>
      <button onClick={decrease}>
        <SlArrowDown /> 
      </button>
      {quantity}
    </div>
  );
}

export default ProductQuantity;