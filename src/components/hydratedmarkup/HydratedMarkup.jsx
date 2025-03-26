import React, { useEffect, useState } from 'react'
import Loader from '../loader/Loader.jsx'
import App from '../../App.js'

// import React from 'react';
import ReactDOM, { createRoot, hydrateRoot } from 'react-dom/client'
import '../../index.css'
// import App from '../../App.js';
import Product from '../products/Product.jsx'
import Account from '../account/account.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Perfume from '../perfume/Perfume.jsx'
// import reportWebVitals from './reportWebVitals.js';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ShoppingCart from '../shoppingcart/ShoppingCart.jsx'
import WishList from '../wishlist/WishList.jsx'
import ProductsContext from '../useProducts/ProductsContext.jsx'
import ErrorBoundary from '../errorboundary/ErrorBoundary.jsx'
// import { hydrateRoot } from 'react-dom/client';

// import Loader from '../loader/Loader.jsx';
const queryClient = new QueryClient()

export default function HydratedMarkup() {
  // const [isClient, setIsClient] = useState(true);

  // useEffect(() => {
  //     const timerId = setTimeout(() => {
  //         setIsClient(true)
  //     }, 3000)
  //     return() => {
  //         clearTimeout(timerId)
  //     }
  // }, [])

  return (
    <>
      {/* {isClient?  */}
      {/* // <!DOCTYPE html> */}
      {/* <html lang="en">
        <head>
            <meta charset="utf-8" />
            <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#000000" />
            <meta
            name="description"
            content="Web site created using create-react-app"
            />
            <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
            <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
            <title>React App</title>
        </head>
        <body>
            <noscript>You need to enable JavaScript to run this app.</noscript>
            <div id="root">
            <React.StrictMode>
                <ErrorBoundary>
                <ProductsContext>
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
      {/* </BrowserRouter> 
                </QueryClientProvider>
                </ProductsContext>
                </ErrorBoundary>
            </React.StrictMode>
            </div>
        </body>
    </html> */}

      <h1>Hello Dear Kelechi, well done.</h1>
    </>
  )
}

// import { renderToString } from "react-dom/server";
// import App from "../../App.js";
// import React from 'react'
// import Loader from "../loader/Loader.jsx";

// export default function HydratedMarkup() {
//     const appHtml = renderToString(<Loader/>);

//   return(
//     // <html lang='en'>
//     // <head>
//     //   <meta charSet="utf-8" />
//     //   <meta name="viewport" content="width=device-width, initial-scale=1" />
//     //   {/* <link rel="stylesheet" href="/styles.css"></link> */}
//     //   <title>My app</title>
//     // </head>
//     // <body>
//     // <div id="root">
//         <h1>Hello Micheal</h1>
//         // <Loader/>
//         // {appHtml}
//     // </div>
// //     </body>
// //   </html>
//   )
// }
