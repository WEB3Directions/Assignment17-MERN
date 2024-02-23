// Cards.jsx

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards({ title, description, price, image }) {
  return (
    <Card className="max-w-xs mx-2 mb-4 p-4"> 
    
      <CardMedia
        className="h-48"
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button> Price:${price}</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
