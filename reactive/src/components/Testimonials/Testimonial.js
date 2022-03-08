import React from 'react'
import Container from '@mui/material/Container'
import Card from '@mui/material/Card'
import { Typography, Stack, CardContent, CardActions, Button, IconButton, Paper } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Testimonial() {
  return (
    <div>
     
            <Container sz={{ position: 'relative'}}>
            <Stack direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    spacing={2}>
            <Card sx={{ maxWidth: 400, maxHeight: 250, marginright: 'auto', align: 'center' }}>
                <CardContent>
                <Typography variant='h5'>
                "The app helps me organize all my writing projects. And that makes it an indispensable tool both in business and in life."
                </Typography>
                </CardContent>
                <Stack direction="row" spacing={2}>
                <CardContent>
                    <Typography variant="body2" gutterBottom>
                        Irene Mworia
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                        Student
                    </Typography>
                </CardContent>
                <CardActions>
                    
                        <IconButton color="primary">
                        <ArrowForwardIcon />
                        </IconButton>
                        <Button variant="text">Learn More</Button>
                        
                </CardActions>
                </Stack>
            </Card>
            <Paper>
                <img height="250" width="250" src="https://ik.imagekit.io/ugyodiq15/Group_70__gPPJRuxu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1625689465393" />
            </Paper>
            </Stack>
            </Container>
    </div>
  )
}

export default Testimonial