import React, { createContext, useCallback, useEffect, useState } from 'react';
import useProducts from './useProducts.jsx';
import { getCartItems, deleteFromDatabase, updateCart } from '../../apis/indexedDB.js';


export const productContext = createContext(null);

export default function ProductsContext({children}) {
  const [result, setResult] = useState(null);  
  //Initialize the variables with the custom Hook useProducts object.
  const {updateProducts, items, totalP, totalQ } = useProducts();
  //Update the computations from the custom hook with state and custom functions
  const [message, setMessage] = useState(null);
  const [updatedItems, setUpdatedItems] = useState(items);
  const [newQuantity, setQuantity] = useState(0);
  const [loading, setIsLoading] = useState(null);
  const [isSuccess, setSuccess] = useState(null);
 
    // const { handleUpdateItems } = useContext(productContext);

  const handleUpdate = async (name, price, pic, quantity=parseFloat(quantity) + 1, supplier) => {
        setIsLoading(true)
        
        try{
            setQuantity(prev => prev + 1);
            const response = await updateCart(name, price, pic, quantity=parseFloat(quantity) + 1, supplier);
            setMessage(response)
            setSuccess(true)
            
        }
        catch(error) {
            alert(error)
            console.error(error)
            setSuccess(false)
        }
        finally{
            setIsLoading(false)
            const timerId = setTimeout(() => {setSuccess(null); clearTimeout(timerId)}, 2000)
        }
    }

  const handleUpdateItems = async(allItems) => {
          if (allItems) {
            setUpdatedItems(allItems)
          }else{
            setUpdatedItems(items)
          }
    }

    const deleteItem = async(id) => {
      try{
        const response = await deleteFromDatabase(id);
        setResult(response)
        const currentItems = await getCartItems();
        setUpdatedItems(currentItems.items)
      }
      catch(err){
        setResult(err)
      }
      finally{
        const timerId = setTimeout(() => {setResult(null); clearTimeout(timerId)}, 5000)
      }
    }
//return the context object used in the child components
  return (
    <productContext.Provider value={{newQuantity, isSuccess, message, items, totalP, totalQ, updateProducts, updatedItems, handleUpdateItems, result, deleteItem, handleUpdate}}>
        {children}
    </productContext.Provider>
  )
}
