import React from 'react';
import ProductQuantity from './ProductQuantity';      

function ProductRow({ product }) {
  const totalCostC = product.price.toLocaleString("en-US", { style: "currency", currency: "USD" });

  return (
    <tr>
      <td>{product.company}</td>
      <td>{product.product}</td>
      <td>{totalCostC}</td>
      <td><ProductQuantity /></td>
    </tr>
  );
}

export default ProductRow;