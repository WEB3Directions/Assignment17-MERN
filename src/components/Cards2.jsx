import * as React from 'react';

import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Cards2({ title, description, price, image }) {
  return (
    <div className="max-w-xs mx-12 mb-20 p-3">
      <CardMedia
        className="h-96 w-full object-cover"  // Adjust height and width as needed
        image={image}
        title={title}
      />
     
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      
      <div className="flex justify-between items-center"> 
        <Button>Price: ${price}</Button>
       
      </div>
    </div>
  );
}
