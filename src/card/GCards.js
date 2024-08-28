import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useRef } from 'react';

export default function GCards({ genres }) {
  const scrollRef = useRef(null);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = direction === 'next' 
        ? Math.min(scrollLeft + clientWidth, scrollWidth) 
        : Math.max(scrollLeft - clientWidth, 0);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <button 
        onClick={() => handleScroll('prev')} 
        style={{
          position: 'absolute',
          left: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px',
          cursor: 'pointer',
        }}
      >
        &lt;
      </button>

      <button 
        onClick={() => handleScroll('next')} 
        style={{
          position: 'absolute',
          right: '0',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          padding: '8px',
          cursor: 'pointer',
        }}
      >
        &gt;
      </button>

      <div 
        style={{
          display: 'flex',
          overflowX: 'auto',
          whiteSpace: 'nowrap',
          maxWidth: '100%', // Ensure the container doesn't overflow the viewport
          scrollbarWidth: 'none', // Hide scrollbar in Firefox
          msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
          padding: '0 40px', // Add padding to ensure cards don't touch the buttons
        }} 
        ref={scrollRef}
      >
        {genres.map((genre, index) => (
          <Card 
            key={index} 
            sx={{
              minWidth: 150, // Adjust as needed
              margin: '0 8px',
              flex: '0 0 auto', // Prevent cards from shrinking
              boxSizing: 'border-box',
            }}
          >
            <div style={{ position: 'relative' }}>
              <CardMedia 
                component="img"
                width="150"
                height="140"
                image={genre.image}
                alt={genre.name}
                sx={{ objectFit: 'cover' }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  color: 'white',
                  textAlign: 'center',
                  padding: 1,
                  width: '100%',
                }}
              >
                {genre.name}
              </Typography>
            </div>
            <CardContent sx={{
                backgroundColor:"black"
              }}>
              <Typography gutterBottom variant="body2" component="div"
              sx={{color:"white",
                textAlign: 'left'
              }}>
                {genre.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
