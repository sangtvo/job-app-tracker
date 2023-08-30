import React from 'react';
import ProductRow from '../components/ProductRow.js';             

function OrderPage({products}) {
    return (
        <>
            <h2>Order Products</h2>
            <article>
                <h3>Order Below:</h3>
                <p>
                    Select the quantity of each product you would like to order.
                </p>
                <table id ="productInfo">
                    <caption>Pet Product Offerings</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity (limit 10)</th>
                        </tr>
                    </thead>
                    <tbody>
                    {products.map((selectedProduct, index) => (
                        <ProductRow product={selectedProduct} key={index} />
                    ))}
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </article>
       </>
    );
}

export default OrderPage;