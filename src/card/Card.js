
import { CardMedia } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const StyledCardContainer = styled.div`
  position: relative;
`;

const ScrollButton = styled.button`
  position: absolute;
  top: 40%;
  transform: translateY(-50%);
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  padding: 0 30px;
  scroll-behavior: smooth;
  scrollbar-width: none; // Hide scrollbar in Firefox
  -ms-overflow-style: none; // Hide scrollbar in IE and Edge
  margin-top:2px;

  &::-webkit-scrollbar {
    display: none; // Hide scrollbar in WebKit browsers
  }

  -webkit-overflow-scrolling: touch; // Enable momentum scrolling on iOS devices

  //  @media (max-width: 599px) {
  //   max-width: 100%;
  //   padding: 0; // Adjust padding for mobile
  // }
  
  @media (max-width: 600px) {
    max-width: calc(2 * 160px + 1 * 8px + 40px); // 2 cards for larger mobile devices
  }

  @media (min-width: 768px) {
    max-width: calc(4 * 170px + 3 * 8px + 50px); // 3 cards for tablets
  }

  @media (min-width: 1024px) {
    max-width: calc(5 * 180px + 4 * 8px + 80px); // 4 cards for laptops
  }

  @media (min-width: 1440px) {
    max-width: calc(6 * 180px + 5 * 8px + 290px); // 5 cards for larger screens
  }
`;

export default function Cards({ languages }) {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount =
        direction === 'next'
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
    <StyledCardContainer>
      {scrollPosition > 0 && (
        <ScrollButton onClick={() => handleScroll('prev')} style={{ left: '0' }} aria-label="Scroll Left">
          &lt;
        </ScrollButton>
      )}

      <ScrollButton onClick={() => handleScroll('next')} style={{ right: '0' }} aria-label="Scroll Right">
        &gt;
      </ScrollButton>

      <CardsContainer ref={scrollRef}>
        {languages.map((language, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: 150, sm: 160, md: 180, lg: 260 },
              height: { xs: 140, sm: 150, md: 160, lg: 200 },
              margin: `0 ${8}px`,
              flex: '0 0 auto',
              position: 'relative',
              borderRadius: '7px',
              border: 'none', // Remove border
              boxShadow: 'none', // Remove shadow if any
              overflow: 'hidden', // Ensure no overflow is visible
              backgroundColor: 'transparent', 
            }}
          >
            <div style={{ position: 'relative' }}>
              <CardMedia
                component="img"
                width="200"
                height="auto"
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
            <CardContent sx={{ backgroundColor: 'black' }}>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ color: 'white', textAlign: 'left', marginLeft: '-12px' }}
              >
                {language.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </StyledCardContainer>
  );
}
