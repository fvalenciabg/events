import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

type MediaCardPropsType = {
  title: string,
  description: string,
  imageUrl: string
}

export default function MediaCard({title, description, imageUrl}: MediaCardPropsType) {
  return (
    <Card >
      <CardMedia
        component="img"
        height="400"
        image={imageUrl}
        alt={title}
      />

      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
		<CardActions
			sx={{ justifyContent: 'right', overflowX: 'auto', paddingTop:3 }}
		 >
        <Button  size="medium">Más información</Button>
        <Button variant="outlined" size="medium">Entradas</Button>

      </CardActions>
      </CardContent>
    </Card>
  );
}
