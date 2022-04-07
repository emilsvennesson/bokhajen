import React from 'react'
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Cards = () => {
  return ( 
      <Card> 
        <CardMedia
            component="img"
            height="140"
            image="app\src\assets\images\bok..png"
            alt="cardImg"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            Lorem ipsum dolor sit amet
            </Typography>
        </CardContent>
      </Card>
  )
}

export default Cards;




