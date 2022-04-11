import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



const Cards = () => {
  return ( 
      <Card sx={{maxWidth:195, maxHeight:245}}> 
        <CardMedia
            component="img"
            height="140"
            image="bokhajen.png"
            alt="cardImg"
        />
        <CardContent sx={{textOverflow: "ellipsis", overflow: "hidden"}}>
            <Typography noWrap gutterBottom variant="h6" component="div">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium veritatis aliquid repudiandae totam. Iure asperiores ipsa eum voluptatibus eius itaque illum doloribus sequi perspiciatis! Ratione quis reiciendis magnam facilis consequatur?
            </Typography>
        </CardContent>
      </Card>
  )
}

export default Cards;







