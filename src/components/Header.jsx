import { format } from "date-fns";
import React from "react";

export default function Header() {
  return (
    <div className=" font-semibold text-accent-400 text-sm py-2">
      <div className="flex justify-between px-4">
        <p>WarmPaws – Pet Care in Winter - Bangladesh</p>
         <p className='font-semibold'>{format( new Date(), "EEEE, MMMM, MM, yyyy")}</p>
        <p>taposhbarai03@gmail.com · (+880) 01516587170</p>
       

      </div>
    </div>
  );
}