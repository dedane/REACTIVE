import React, { useState, useEffect } from "react";

import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Herosection/Herosection";





export default function Home() {
 
  return (
    <div>
      <Navbar />
     {/*  <Paper className={styles.section}> */}
      <HeroSection />
      
      
      
      
   {/*  </Paper> */}
    </div>
  );
}