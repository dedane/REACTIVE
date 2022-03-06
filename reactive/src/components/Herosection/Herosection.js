import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  
import Herolayout from './Herolayout';

const backgroundImage =
  'https://ik.imagekit.io/ugyodiq15/stacking_b-Z8Fr_qi.jfif?ik-sdk-version=javascript-1.4.3&updatedAt=1646075086534';

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
        color="secondary"
        variant="contained"
        size="large"
        align="center"
        component="a"
        href="/premium-themes/onepirate/sign-up/"
        sx={{ minWidth: 200 }}
      >
        Register
      </Button>
      <Typography variant="body2" color="inherit" align="center" sx={{ mt: 2 }}>
        Discover the experience
      </Typography>
    </Herolayout>
  );
}