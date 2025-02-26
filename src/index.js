import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import Product from './components/products/Product.jsx';
import Account from './components/account/Account.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Perfume from './components/perfume/Perfume.jsx';
// import reportWebVitals from './reportWebVitals.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ShoppingCart from './components/shoppingcart/ShoppingCart.jsx';
import WishList from './components/wishlist/WishList.jsx';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/account' element={<Account/>} />
            <Route path='/perfume/:id' element={<Perfume/>} />
            <Route path='/cart' element={<ShoppingCart/>} />
            <Route path='/wishlist' element={<WishList/>} />
        </Routes>
        {/* <App /> */}
      </BrowserRouter> 
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
