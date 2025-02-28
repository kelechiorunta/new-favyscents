import React, {useCallback, useContext, useEffect, useState} from "react";
import { useViewChild, ViewChild } from "../ViewContext/ViewContext.jsx";
import { FaHeart } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { updateCart, addToCart } from "../../apis/indexedDB.js";
import Loader from "../loader/Loader.jsx";
import Toaster from "../toaster/Toaster.jsx";
import { getCartItems } from "../../apis/indexedDB.js";
import { productContext } from "../useProducts/ProductsContext.jsx";

export const Item = ({id, name, pic, supplier, price, quantity}) => {
    const navigate = useNavigate();
    // const [message, setMessage] = useState(null);
    // const [newQuantity, setQuantity] = useState(0);
    // const [loading, setIsLoading] = useState(null);
    // const [isSuccess, setSuccess] = useState(null);
    const { handleUpdateItems, handleUpdate, isSuccess, message, newQuantity } = useContext(productContext);

    // const handleUpdate = async (name, price, pic, quantity=parseFloat(quantity) + parseFloat(newQuantity), supplier) => {
    //     setIsLoading(true)
        
    //     try{
    //         setQuantity(prev => prev + 1);
    //         const response = await updateCart(name, price, pic, quantity=parseFloat(quantity) + parseFloat(newQuantity) + 1, supplier);
    //         setMessage(response)
    //         setSuccess(true)
            
    //     }
    //     catch(error) {
    //         alert(error)
    //         console.error(error)
    //         setSuccess(false)
    //     }
    //     finally{
    //         setIsLoading(false)
            
    //         // setMessage(null)
    //     }
    // }
    return (
        <>
        
        <div className="child-collection"
        style={{position: 'relative'}}
       >
            
            <img onClick={()=>navigate(`/perfume/${id}`)} className='img-collection' src={pic} width={'auto'} height={'auto'} />
            <div className="collection-details">
                {isSuccess ? 
                    <Toaster message={message}/>
                    : 
                    null
                }  
                <h1 className="title">{parseFloat(quantity)}</h1>
                <p className="supplier">{supplier}</p>
                <p className="price">{price}</p>
                <button 
                style={{ zIndex: 0}}
                onClick={() => handleUpdate(name, price, pic, quantity=parseFloat(quantity), supplier)}
                className="addToCart"
                >
                    ADD TO CART      
                    {/* {loading && <Loader/>} */}
                </button> 
            </div>
            
        </div>
        </>
        
    )
}

export const Carousel = ({refId, id, title, brands, gender}) => {
    const { isVisible } = useViewChild(refId);
    const [selectedItems, setSelectedItems] = useState([]);
    const [itemQuantity, setItemQuantity] = useState(1)
    const { handleUpdateItems } = useContext(productContext);

    const getProducts = useCallback(async () => {
        try {
            const allItems = await getCartItems();
            setSelectedItems(allItems.items);
        } catch (err) {
            console.error(err);
        }
    }, []); // ✅ Removed `selectedItems` dependency to prevent unnecessary re-renders
    
    useEffect(() => {
        getProducts();
    }, [getProducts, handleUpdateItems]); // ✅ Added `getProducts` as a dependency to avoid unnecessary calls
    
        const getQuantity = (item) => {
            try{
                if (selectedItems) {
                    const selectedItem = selectedItems.find(allitem => allitem.name === item.name)
                    if (selectedItem) {
                        console.log(selectedItem.name)
                        // if (selectedItem.quantity){
                        return selectedItem.quantity
                        // } 
                    }else {
                        return 0;
                    }
                }
            }catch(err){
                console.error(err)
            }   
        }

        useEffect(() => {
            console.log(selectedItems); // ✅ Logs correctly when `selectedItems` updates
        }, [selectedItems, getQuantity, handleUpdateItems]); // ✅ Runs when `selectedItems` changes

    return (
        <div className="carousel">
            
            {brands.map((brand, idx) => (
                
             <ViewChild animateStyle={
                {opacity: `${isVisible ? "1" : "0"}`,
                margin: 'auto',
                transform: ` ${isVisible ? "translateY(0px)" : `translateY(${100 * idx}px)`}`,
                transition: `opacity ${1}s ease ${idx * 0.1}s, transform ${1}s ease ${idx * 0.1}s`
            }}>
                <div key={brand.id}
                className="item">
                    {console.log(getQuantity(brand))}
                    <div className="label-container">
                        <h1 className="label-title">{title}</h1>
                        <FaHeart className="label-icon" fill='green' size={19}/>
                    </div>
                    <Item key={brand.id} id={brand.id} name={brand.name} title = {brand.name} price = {brand.price} supplier = {brand.supplier} pic={brand.pic} quantity={getQuantity(brand)}/>
                </div>
            </ViewChild>
            ))}
            
        </div>
    )
}