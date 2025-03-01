import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Perfume.css'
import MainHeader from '../mainheader/MainHeader';
import { FaHeart } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import pic1 from '../imgs/Cosmetic.png';
import pic2 from '../imgs/Passion.png';
import pic3 from '../imgs/BodyWash.png';
import pic4 from '../imgs/Chrome_Azzaro.png';
import pic5 from '../imgs/newArrivalI.png';
import pic6 from '../imgs/newArrivalII.png';
import pic7 from '../imgs/newArrivalIII.png';
import pic8 from '../imgs/newArrivalIV.png';
import pic9 from '../imgs/BestSellersI.png'
import pic10 from '../imgs/BestSellersII.png'
import pic11 from '../imgs/BestSellersIII.png'
import pic12 from '../imgs/BestSellersIV.png'

import DividerII from '../dividerII/DividerII';
import Subscriber from '../subscribe/Subscriber';
import MainFooter from '../mainfooter/MainFooter';
import { ViewProvider, ViewChild} from '../ViewContext/ViewContext';
import Recommended from '../recommended/Recommended';
import ProductTab from '../productTab/ProductTab';
import { getCartItems, updateCart } from '../../apis/indexedDB.js';
import Toaster from '../toaster/Toaster.jsx';

const collections = [
    
        {id: 0, name: 'Luminizing Clay', supplier: 'Jo Malone Vitizier', price: '$51.74', gender: "WOMEN", pic: pic1 },
        {id: 1, name: 'Eau De Parfum', supplier: 'Armaf Passion', price: '$51.74', gender: "WOMEN", pic: pic2 },
        {id: 2, name: 'Eau De Tollete', supplier: 'Jo Malone Vitizier', price: '$51.74', gender: "WOMEN", pic: pic3 },
        {id: 3, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', gender: "WOMEN", pic: pic4 },
        {id: 4, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', gender: "WOMEN", pic: pic5 },
        {id: 5, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', gender: "WOMEN", pic: pic6 },
        {id: 6, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', gender: "WOMEN", pic: pic7 },
        {id: 7, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', gender: "WOMEN", pic: pic8 },
        {id: 8, name: 'Luminizing Clay', supplier: 'BVLGARI EXTREME', price: '$51.74', gender: "WOMEN", pic: pic8 },
    
    ]
export default function Perfume() {

    const {id} = useParams();
    const selectedImg = collections.find(collection => collection.id == id)
    const [value, setValue] = useState(1);
    useEffect(() => {
        const getCurrentImg = async() => {
            const carts = await getCartItems();
            const allItems = carts?.items;
            const currentItem = allItems.find(item => item.name === selectedImg.name)
            setValue(currentItem?.quantity)
        }
        getCurrentImg();
    }, [])

    const [title, setTitle] = useState('DESC');
    
    const [selectedId, setSelectedId] = useState(null);
    const [loading, setLoading] = useState(null);
    const [message, setMessage] = useState(null)
    const handleTabClick = (title) => {
       setTitle(title)
    }

    const handleUpdateQuantity = async (e, id, name, price, pic, quantity, supplier) => {
        if (id) {
          setValue(e.target.value);
          try{
            await updateCart(name, price, pic, quantity=e.target.value, supplier)
          }
          catch(err){
            console.log(err)
          }
          
        }
        setSelectedId(id)  
      }

      const cartUpdate = async (name, price, pic, quantity, supplier) => {
        setLoading(true)
        try{
            const response = await updateCart(name, price, pic, quantity=value, supplier)
            setMessage(response)
        }
          catch(err){
            console.log(err)
          }
          finally{
            setLoading(false)
          }
      }

  return (
    <div className='perfume-container'>
        <MainHeader/>
            <ViewProvider>
                <div style={{position: 'relative'}} className="perfume-section">
                <ViewChild>
                    <h1>{selectedImg && selectedImg.supplier}</h1>
                    <Link to={'/cart'} className='link-cart' style={{float: 'right', position:'absolute', right: '100px', top:'0px'}}>Proceed To Cart</Link>
                    <div className="small-picture">
                        <img src={`${selectedImg && selectedImg.pic}`} alt='' width={74} height={74} />
                    </div>
                </ViewChild>
                    <ViewChild>
                        <div className="perfume">
                            <div className="picture">
                                <img src={`${selectedImg && selectedImg.pic}`} alt='' width={74} height={74} />
                            </div>
                            <div style={{position: 'relative'}} className="description">
                                <p className="gender">{selectedImg.gender}</p>
                                <p className="name">{selectedImg.name}</p>
                                <p className='price'>{selectedImg.price}</p>
                                <div className="payment-section">
                                    {/* <select name="quantity" id="quantity">
                                        <option value="1">1</option>
                                    </select> */}
                                    <input type="number" name='quantity' value={value} onChange={(e) => handleUpdateQuantity(e, id, selectedImg.name, selectedImg.price, selectedImg.pic, selectedImg.quantity, selectedImg.supplier)}  />
                                    <button onClick={()=>cartUpdate(selectedImg.name, selectedImg.price, selectedImg.pic, value, selectedImg.supplier)} className="addToCart">ADD TO CART</button>
                                    <FaHeart fill='green' size={20} />         
                                </div>
                               
                            </div>
                            
                        </div>
                    </ViewChild>
                    {message && <Toaster message={message}/>}
                </div>
                <ViewChild> 
                    <div className="product-desc">
                            <button style={title=='BRAND'? {backgroundColor: '#f5f6f6'} : {backgroundColor: 'white'}} onClick={()=>handleTabClick('BRAND')} class="tablink">
                                BRAND INFORMATION
                            </button>
                            <button style={title=='DESC'? {backgroundColor: '#f5f6f6'} : {backgroundColor: 'white'}} onClick={()=>handleTabClick('DESC')} class="tablink" id="defaultOpen">
                                PRODUCT DESCRIPTION
                            </button>
                    </div>  
                        <ProductTab title={title} name={selectedImg.name}/>
                </ViewChild>  
                    
                    <ViewChild id={'other-recommended'}>
                        <div className="other-recommended">
                            <Recommended id={'other-recommended'}/>
                        </div>  
                        <DividerII/>
                        <Subscriber/>
                        <MainFooter/>
                    </ViewChild>
                    
            </ViewProvider>  
            
    </div>
  )
}
