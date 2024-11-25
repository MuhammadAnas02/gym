import React from "react";

import Nutrition from "./About/page";
import Plans from "./Plan/page";
import Contact from "./Contact/page";
import Banner from "./component/Home";



export default function Home() {
  return (
  <>
  <Banner/>
   <Nutrition/>
   <Plans/>
   <Contact/>
  </>
 
  );
}