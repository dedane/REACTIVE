import React, { useState, useEffect } from "react";
import  Paper  from "@mui/material/Paper";
import  { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import { styled } from '@mui/material/styles';
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Herosection/Herosection";
import { Zoom } from "@mui/material";




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