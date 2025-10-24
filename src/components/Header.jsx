import { format } from "date-fns";
import React from "react";

export default function Header() {
  return (
    <div className="font-light  text-zinc-800 text-xm py-2">
      <div className="flex justify-between px-4">
        <p>WarmPaws – Pet Care in Winter - Bangladesh</p>
         <p className='text-secondary'>{format( new Date(), "EEEE. MMMM dd. MM. yyyy")}</p>
        <p>taposhbarai03@gmail.com (+880) 01516587170</p>
       

      </div>
    </div>
  );
}