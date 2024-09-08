import { CardMedia } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; // Import useNavigate


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
  overflow-x: hidden;
  white-space: nowrap;
  padding: 0 30px;

  // Responsiveness: Adjust the number of visible cards based on the screen size
  // max-width: calc(1 * 150px + 50px); // Default for small screens

  // @media (min-width: 600px) {
  max-width: calc(
    2 * 160px + 1 * 8px + 40px
  ); // 2 cards for larger mobile devices
  // }

  @media (min-width: 768px) {
    max-width: calc(4 * 170px + 3 * 8px + 50px); // 3 cards for tablets
  }

  @media (min-width: 1024px) {
    max-width: calc(5 * 180px + 4 * 8px + 80px); // 4 cards for laptops
  }

  @media (min-width: 1440px) {
    max-width: calc(6 * 180px + 5 * 8px + 290px); // 5 cards for larger screens
  }

  scrollbar-width: none; // Hide scrollbar in Firefox
  -ms-overflow-style: none; // Hide scrollbar in IE and Edge
`;

export default function GCards({ genres }) {
  const scrollRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navigate = useNavigate(); // Initialize navigate function

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
      const scrollAmount =
        direction === "next"
          ? Math.min(scrollLeft + clientWidth, scrollWidth)
          : Math.max(scrollLeft - clientWidth, 0);
      scrollRef.current.scrollTo({ left: scrollAmount, behavior: "smooth" });
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
      ref.addEventListener("scroll", handleScrollEvent);
      return () => ref.removeEventListener("scroll", handleScrollEvent);
    }
  }, []);

  const handleCardClick = (genre) => {
    if (genre.name === "News") {
      navigate("/mainwindow"); // Navigate to MainWindow if the card is "News"
    }
  };

  return (
    <StyledCardContainer>
      {/* {scrollPosition > 0 && (
        <ScrollButton onClick={() => handleScroll('prev')} style={{ left: '0' }} aria-label="Scroll Left">
          &lt;
        </ScrollButton>
      )}
      <ScrollButton onClick={() => handleScroll('next')} style={{ right: '0' }} aria-label="Scroll Right">
        &gt;
      </ScrollButton> */}

      <CardsContainer ref={scrollRef}>
        {genres.map((genre, index) => (
          <Card
            key={index}
            sx={{
              width: { xs: 150, sm: 160, md: 180, lg: 260 },
              height: { xs: 140, sm: 150, md: 160, lg: 200 },
              margin: `0 ${8}px`,
              flex: "0 0 auto", // Prevent cards from shrinking
              position: "relative",
              borderRadius: "7px",
              border: "none", // Remove border
              boxShadow: "none",
              overflow: "hidden", // Ensure no overflow is visible
              backgroundColor: "transparent", // Ensure background color does not show any border effect
              cursor:"pointer",
            }}
            onClick={() => handleCardClick(genre)} // Handle card click

          >
            <div style={{ position: "relative" }}>
              <CardMedia
                component="img"
                width="200"
                height="auto"
                image={genre.image}
                alt={genre.name}
                sx={{ objectFit: "cover", borderRadius: "inherit" }}
              />
              <Typography
                variant="h5"
                component="div"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  color: "white",
                  textAlign: "center",
                  padding: 1,
                  width: "100%",
                }}
              >
                {/* {genre.name} */}
              </Typography>
            </div>
            <CardContent sx={{ backgroundColor: "black" }}>
              <Typography
                gutterBottom
                variant="body2"
                component="div"
                sx={{ color: "white", textAlign: "left", marginLeft: "-12px" }}
              >
                {genre.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </CardsContainer>
    </StyledCardContainer>
  );
}
