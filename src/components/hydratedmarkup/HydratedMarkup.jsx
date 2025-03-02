// import React, {useEffect, useState} from 'react'
// import Loader from '../loader/Loader.jsx';
// import App from '../../App.js';

// export default function HydratedMarkup() {
//     const [isClient, setIsClient] = useState(false);

//     useEffect(() => {
//         const timerId = setTimeout(() => {
//             setIsClient(true)
//         }, 3000)
//         return() => {
//             clearTimeout(timerId)
//         }
//     }, [])

//   return (
//     // <!DOCTYPE html>
//     <>
//     {isClient? <html lang="en">
//       <head>
//         <meta charset="utf-8" />
//         <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
//         <meta name="viewport" content="width=device-width, initial-scale=1" />
//         <meta name="theme-color" content="#000000" />
//         <meta
//           name="description"
//           content="Web site created using create-react-app"
//         />
//         <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        
//         <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        
//         <title>React App</title>
//       </head>
//       <body>
        
//         {/* <!-- <noscript>You need to enable JavaScript to run this app.</noscript> --> */}
//         <div id="root">
//           <h1>Hello World</h1>
//           <Loader/>
//         </div>
//       </body>
//     </html> : <div><Loader/></div>}
//     </>
    
    

//   )
// }


import { renderToString } from "react-dom/server";
import App from "../../App.js";
import React from 'react'
import Loader from "../loader/Loader.jsx";

export default function HydratedMarkup() {
    const appHtml = renderToString(<h1>Hello Kelechi</h1>);


  return(
    <html lang='en'>
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* <link rel="stylesheet" href="/styles.css"></link> */}
      <title>My app</title>
    </head>
    <body>
    {/* <div id="root"> */}
     {/* <h1>Hello Kelechi</h1> */}
    {/* </div> */}
    </body>
  </html>
  )
}


  