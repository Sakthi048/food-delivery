import React from 'react'
import Shopnow from './Shopnow'

export default function Banner({title}) {
  console.log(title);
  return (
    <>
   <div className="bgimgcommon">
           <div className="container">
             <div className="row">
               <div className=" col-lg-12 content">
                 <h1 className="text-light font-h1 text-center">
                  {title}
                 </h1>
               </div>
             </div>
           </div>
         </div>
    </>
  )
}
