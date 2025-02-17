import logo from './logo.svg';
import './App.css';
import MainHeader from './components/mainheader/MainHeader.jsx';
import Divider from './components/divider/Divider.jsx';
import HeroSection from './components/heroSection/HeroSection.jsx';
import Collections from './components/collections/Collections.jsx';
import Recommended from './components/recommended/Recommended.jsx';
import NewArrivals from './components/newArrivals/NewArrivals.jsx';
import BestSellers from './components/bestSellers/BestSellers.jsx';
import DividerII from './components/dividerII/DividerII.jsx';
import Subscriber from './components/subscribe/Subscriber.jsx';
import inViewChild, { ViewChild, ViewProvider } from './components/ViewContext/ViewContext.jsx';
import MainFooter from './components/mainfooter/MainFooter.jsx';
import { Routes, Route } from 'react-router-dom';
import Product from './components/products/Product.jsx';

function App() {

 

  return (
    <div className="App">
      
     <ViewProvider>
      <ViewChild id={'mainheader'} >
        <MainHeader id={'mainheader'}/>
      </ViewChild>
      {/* <ViewChild id={'tabmenu'} >
        <TabMenu id={'tabmenu'}/>
      </ViewChild> */}
      <ViewChild id={'divider'} >
        {/* <Divider /> */}
      </ViewChild>
      <div className={'heroSection'} style={{zIndex:-9999}}>
      <ViewChild id={'heroSection'} >
      
          <HeroSection id={'heroSection'} />
        
      </ViewChild>
      </div>
        {/* <HeroSection /> */}
      <ViewChild id={'collections'} >
        <Collections id={'collections'} />
      </ViewChild>
      <ViewChild id={'recommended'} >
        <Recommended id={'recommended'}/>
      </ViewChild>
        {/* <Recommended/> */}
      <ViewChild id={'newArrivals'} >
        <NewArrivals id={'newArrivals'}/>
      </ViewChild>
        {/* <NewArrivals/> */}
      <ViewChild id={'bestSellers'} >
        <BestSellers id={'bestSellers'}/>
      </ViewChild>
        {/* <BestSellers/> */}
      <ViewChild id={'dividerII'} >
        <DividerII />
      </ViewChild>
        {/* <DividerII/> */}
      <ViewChild id={'subscriber'} >
        <Subscriber />
      </ViewChild>
      <ViewChild id={'mainFooter'} >
        <MainFooter id={'mainFooter'} />
      </ViewChild>
        {/* <Subscriber/> */}
      </ViewProvider>
    </div>
  );
}

export default App;
