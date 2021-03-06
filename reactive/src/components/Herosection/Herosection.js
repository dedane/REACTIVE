import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  
import Herolayout from './Herolayout';
import { Link } from 'react-router-dom'

const backgroundImage =
  'https://ik.imagekit.io/ugyodiq15/jeremy-thomas-FO7bKvgETgQ-unsplash_21ykwsjmxaPc.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1646363152753'
export default function HeroSection() {
  return (
    <Herolayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Upgrade your life by picking on new habits
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        create new habits by tracking your day to day progress
      </Typography>
      <Button
        dark
        variant="contained"
        size="large"
        align="center"
        sx={{ minWidth: 200 }}
      >
          <Link
          style={{ textDecoration: 'none', color: 'white' }}
           to="/register">
        Register
        </Link>
      </Button>
      <Typography variant="body2" color="inherit" align="center" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </Herolayout>
  );
}