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
import { ViewChild, ViewProvider } from './components/ViewContext/ViewContext.jsx';
import MainFooter from './components/mainfooter/MainFooter.jsx';
import { openProductDatabase } from './apis/indexedDB.js';
import React, {useEffect, useState} from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import Toaster from './components/toaster/Toaster.jsx';
import Loader from './components/loader/Loader.jsx';

function App() {

  // Queries
  const query = useQuery({ queryKey: ['products'], queryFn: openProductDatabase })
  const [isActive, setActive] = useState(null);

  const { status, error, data } = query;
  let timerOutId

  useEffect(() => {
    if (status === 'success' || data){
      timerOutId = setTimeout(() => setActive(true), 5000)
    }else{
      setActive(false)
    }
    return () => clearTimeout(timerOutId)
  }, [data, isActive])

    return status === 'pending' ? <Loader/>

  : status === 'error' ? <h1>Error...{error}</h1>
 
  :
   (
    <div className="App">  
    {console.log(data)}
   
      {isActive && data && <Toaster message={data?.name.toUpperCase() +' DATABASE IS OPENED SUCCESSFULLY.'} />}
    
      <ViewProvider>
        <ViewChild id={'mainheader'} >
          <div className='header-contianer'>
            <MainHeader 
            id={'header-container'}/>
          </div>
        </ViewChild>
        {/* <ViewChild id={'tabmenu'} >
          <TabMenu id={'tabmenu'}/>
        </ViewChild> */}
        {/* <ViewChild id={'divider'} > */}
          {/* <Divider /> */}
        {/* </ViewChild> */}
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
