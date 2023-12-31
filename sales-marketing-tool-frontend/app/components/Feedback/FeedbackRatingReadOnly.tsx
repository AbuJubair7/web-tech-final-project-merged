import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';

export default function BasicRating({rating}: {rating:number}) {

  return (
    
      <Rating name="read-only" value={rating} readOnly />
  );
}
