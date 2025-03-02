import React from 'react';
import ReactDOM, {createRoot, hydrateRoot} from 'react-dom/client';
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
import ProductsContext from './components/useProducts/ProductsContext.jsx';
import ErrorBoundary from './components/errorboundary/ErrorBoundary.jsx';
// import { hydrateRoot } from 'react-dom/client';
import HydratedMarkup from './components/hydratedmarkup/HydratedMarkup.jsx';
import Loader from './components/loader/Loader.jsx';
const queryClient = new QueryClient();

// hydrateRoot(document, <HydratedMarkup/>)

const root = createRoot(document.getElementById('root'), <App/>);
root.render(
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
      </BrowserRouter> 
    </QueryClientProvider>
    </ProductsContext>
    </ErrorBoundary>
  </React.StrictMode>
);

// const RootComponent = () => {
//   const [hydrated, setHydrated] = useState(false);

//   useEffect(() => {
//     // Allow a small delay before rendering the main app
//     setTimeout(() => setHydrated(true), 0);
//   }, []);

//   return hydrated ? (
//     <React.StrictMode>
//       <ErrorBoundary>
//         <ProductsContext>
//           <QueryClientProvider client={queryClient}>
//             <BrowserRouter>
//               <Routes>
//                 <Route path="/" element={<App />} />
//                 <Route path="/product" element={<Product />} />
//                 <Route path="/account" element={<Account />} />
//                 <Route path="/perfume/:id" element={<Perfume />} />
//                 <Route path="/cart" element={<ShoppingCart />} />
//                 <Route path="/wishlist" element={<WishList />} />
//               </Routes>
//             </BrowserRouter>
//           </QueryClientProvider>
//         </ProductsContext>
//       </ErrorBoundary>
//     </React.StrictMode>
//   ) : (
//     <HydratedMarkup />
//   );
// };

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
