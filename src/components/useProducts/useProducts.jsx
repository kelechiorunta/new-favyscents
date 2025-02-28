import React, { useCallback, createContext, startTransition, useEffect, useState } from "react";
import { getCartItems } from "../../apis/indexedDB.js";

// const productContext = createContext(2);

//Returns an initial computation of the products, prices and quantities from the 
//getCartItems custom indexedDB API function 
export default function useProducts() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            const allProducts = await getCartItems();
            setProducts(allProducts?.items || []);
        };

        fetchProducts(); // Fetch initially
    }, []);

    const items = products && products;
    const totalQuantities = products && products.reduce((sum, item) => parseInt(sum) + parseInt(item.quantity),0 )

    const totalPrice = products && products.reduce((sum, item) => {
    const price = parseFloat(item.price.replace('$', '')); // Remove $ and convert to number
    const quantity = parseInt(item.quantity, 10); // Ensure quantity is an integer

        return sum + price * quantity;
      }, 0);
  
    return {items: items, updateProducts: ()=>setProducts, totalQ: totalQuantities, totalP: totalPrice}
}
