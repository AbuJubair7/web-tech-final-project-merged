import * as React from 'react';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import { useFeedback } from '@/app/context/FeedbackContext';
import { useEffect } from 'react';

const labels: { [index: string]: string } = {
  1: 'Useless',
  2: 'Poor',
  3: 'Ok',
  4: 'Good',
  5: 'Excellent',
};

function getLabelText(value: number) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default function FeedbackRating() {
  // const [value, setValue] = React.useState<number | null>(0);
  const [hover, setHover] = React.useState(-1);
  const {SetFeedbackRating, feedbackRating} = useFeedback();

 


  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={feedbackRating}
        precision={1}
        getLabelText={getLabelText}
        onChange={(event, newValue) => {
            if(newValue !== null)
            {
              SetFeedbackRating(newValue);
            }
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
        size="large"
      />
      {feedbackRating !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : feedbackRating]}</Box>

      )}
    </Box>
  );
}