import { Button, CardActions, CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import React, { useRef, useState, useEffect } from 'react';

export default function Cards({ languages }) {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount = direction === 'next' 
        ? Math.min(scrollLeft + clientWidth, scrollWidth) 
        : Math.max(scrollLeft - clientWidth, 0);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(scrollAmount);
    }
  };

  const handleScrollEvent = () => {
    if (scrollRef.current) {
      setScrollPosition(scrollRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener('scroll', handleScrollEvent);
      return () => ref.removeEventListener('scroll', handleScrollEvent);
    }
  }, []);

  return (
    <div style={{ position: 'relative' }}>
      {scrollPosition > 0 && (
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
      )}

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
          overflowX: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: 'calc(5 * 150px + 4 * 8px + 420px)', // Ensure the container fits exactly 5 cards + margins
          scrollbarWidth: 'none', // Hide scrollbar in Firefox
          msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
          padding: '0 30px', // Add padding to ensure cards don't touch the buttons
        }} 
        ref={scrollRef}
      >
        {languages.map((language, index) => (
          <Card 
            key={index} 
            sx={{
              minWidth: 180, // Adjust as needed
              margin: '0 8px',
              flex: '0 0 auto', // Prevent cards from shrinking
              boxSizing: 'border-box',
            }}
          >
            <div style={{ position: 'relative' }}>
              <CardMedia 
                component="img"
                width="180"
                height="140"
                image={language.image}
                alt={language.nativeName}
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
                {language.nativeName}
              </Typography>
            </div>
            <CardActions sx={{ backgroundColor: "black" }}>
              <Button size="small" sx={{ color: "white" }}>
                {language.name}
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </div>
  );
}
