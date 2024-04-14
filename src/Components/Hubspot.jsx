import React from 'react'
import { useEffect } from "react";

function Hubspot() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "//js.hsforms.net/forms/embed/v2.js";
        script.charset = "utf-8";
        script.type = "text/javascript";
        document.head.appendChild(script);
    
        script.addEventListener('load',() => {
          if (window.hbspt) {
            window.hbspt.forms.create({
              region: "na1",
              portalId: "45803348",
              formId: "cf1b3059-c404-4c89-b116-b2192b28857d",
              target: "#hubspot",
            });
          }
        });
      }, []);
  return (
    <>
    {/* <h2 className='text-[#fff] text-center lg:text-4xl sm:text-2xl text-xl mb-2'>Need further assistance?</h2> */}
    <div className="w-[15rem] md:w-[20rem] outline outline-[#515050] p-4 rounded-lg" id='hubspot'></div>
    </>
  )
}

export default Hubspot;

