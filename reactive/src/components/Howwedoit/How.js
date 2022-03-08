import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import EqualizerIcon from '@mui/icons-material/Equalizer';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

export default function How() {
  return (
      <div>
          <Box 
        sx={{mx: 'auto',
            mt: 15,
             width: 500,
             textAlign: 'center'}}>
                <Typography color={"primary"} align="center" variant="h2"> HOW WE DO IT</Typography></Box>
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'none' }}
    >
        
      <Container sx={{ mt: 5, mb: 15, display: 'flex', position: 'relative' }}>
          
        <Box
          component="img"
          src=""
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'relative', top: -180 }}
        />
        <Grid container spacing={5}>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                alt="Choose Habit"
                sx={{ height: 55 }}
              />
              <AddReactionIcon sx={{ fontSize: 100 }}/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Pick a habit
              </Typography>
              <Typography variant="h5">
                {
                  'The first step to any real habit change is identifying what habit you want to begin'
                }

                {
                  ', go for a mini-vacation just a few subway stops away from your home.'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                
                alt="Set Goals"
                sx={{ height: 55 }}
              />
              <DashboardCustomizeIcon sx={{ fontSize: 100 }}/>
              <Typography variant="h6" sx={{ my: 5 }}>
                Set your goals
              </Typography>
              <Typography variant="h5">
                {
                  'Set a systematic way to achieve your goals. You can do this by setting a goal for each habit.'
                }

                {'Track your day to day progress of your goals set.'}
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={item}>
              <Box
                
                alt="clock"
                sx={{ height: 55 }}
              />
              <EqualizerIcon sx={{ fontSize: 100, color: 'secondary' }} />
              <Typography variant="h6" sx={{ my: 5 }}>
                Track of your Habits
              </Typography>
              <Typography variant="h5">
                {'Keep track of your progress and achieve more from your newly formed habits.'}
                {'that you have absolute control over'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
    </div>
  )
}
