// import { CardMedia } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import React, { useRef, useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles=makeStyles(()=>{
//   @media only screen and (min-width: 1024px) and (max-width: 1440px) {
//     :'calc(4 * 180px + 3 * 8px + 60px)',
//   }
// })



// export default function Cards({ languages }) {
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
//       const scrollAmount = direction === 'next' 
//         ? Math.min(scrollLeft + clientWidth, scrollWidth) 
//         : Math.max(scrollLeft - clientWidth, 0);
//       scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
//       setScrollPosition(scrollAmount);
//     }
//   };

//   const handleScrollEvent = () => {
//     if (scrollRef.current) {
//       setScrollPosition(scrollRef.current.scrollLeft);
//     }
//   };

//   useEffect(() => {
//     const ref = scrollRef.current;
//     if (ref) {
//       ref.addEventListener('scroll', handleScrollEvent);
//       return () => ref.removeEventListener('scroll', handleScrollEvent);
//     }
//   }, []);

//   return (
//     <div style={{ position: 'relative' }}>
//       {scrollPosition > 0 && (
//         <button 
//           onClick={() => handleScroll('prev')} 
//           style={{
//             position: 'absolute',
//             left: '0',
//             top: '40%',
//             transform: 'translateY(-50%)',
//             zIndex: 1,
//             backgroundColor: 'rgba(0, 0, 0, 0.5)',
//             color: 'white',
//             border: 'none',
//             borderRadius: '4px',
//             padding: '8px',
//             cursor: 'pointer',
//           }}
//         >
//           &lt;
//         </button>
//       )}

//       <button 
//         onClick={() => handleScroll('next')} 
//         style={{
//           position: 'absolute',
//           right: '0',
//           top: '40%',
//           transform: 'translateY(-50%)',
//           zIndex: 1,
//           backgroundColor: 'rgba(0, 0, 0, 0.5)',
//           color: 'white',
//           border: 'none',
//           borderRadius: '4px',
//           padding: '8px',
//           cursor: 'pointer',
//         }}
//       >
//         &gt;
//       </button>

//       <div 
//         style={{
//           display: 'flex',
//           overflowX: 'hidden',
//           whiteSpace: 'nowrap',
//           maxWidth: 'calc(5 * 155px + 4 * 8px + 460px)', // Ensure the container fits exactly 5 cards + margins
//           // maxWidth: {
//           //   xs:'calc(1 * 150px + 30px)', 
//           //   sm:'calc(2 * 160px + 1 * 8px + 40px)',
//           //   md:'calc(3 * 170px + 2 * 8px + 50px)',
//           //   lg:'calc(4 * 180px + 3 * 8px + 60px)',
//           //   xl:'calc(5 * 200px + 4 * 8px + 70px)',},
//           scrollbarWidth: 'none', // Hide scrollbar in Firefox
//           msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
//           padding: '0 30px', // Add padding to ensure cards don't touch the buttons
//         }} 
//         ref={scrollRef}
//       >
//         {languages.map((language, index) => (
//           <Card 
//             key={index} 
//             sx={{
//               width:240,
//               // width:{xs:150,sm:160,md:210, lg:240,xl:300},
//               height:180,
//               // height:{xs:140,sm:150,md:160, lg:170,xl:200},
//               margin: `0 ${8}px`,
//               flex: '0 0 auto', // Prevent cards from shrinking
//               position: 'relative',
//               borderRadius:'7px',

//             }}
//           >
//             <div style={{ position: 'relative' }}>
//               <CardMedia 
//                 component="img"
//                 width="180"
//                 // width="100%"
//                  height="140"
//                 // height="auto"
//                 image={language.image}
//                 alt={language.nativeName}
//                 sx={{ objectFit: 'cover' }}
//               />
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   color: 'white',
//                   textAlign: 'center',
//                   padding: 1,
//                   width: '100%',
//                 }}
//               >
//                 {language.nativeName}
//               </Typography>
//             </div>
//             <CardContent sx={{
//                 backgroundColor:"black"
//               }}>
//               <Typography gutterBottom variant="body2" component="div"
//               sx={{color:"white",
//                 textAlign: 'left',
//                  marginLeft:'-12px'
//               }}>
//                 {language.name}
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
// import { CardMedia } from '@mui/material';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
// import React, { useRef, useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     position: 'relative',
//     display: 'flex',
//     overflowX: 'hidden',
//     whiteSpace: 'nowrap',
//     maxWidth: 'calc(5 * 155px + 4 * 8px + 460px)', // Default for desktop
//     scrollbarWidth: 'none', // Hide scrollbar in Firefox
//     msOverflowStyle: 'none', // Hide scrollbar in IE and Edge
//     padding: '0 30px',
//     [theme.breakpoints.up('xs')]: {
//       maxWidth: 'calc(1 * 150px + 30px)', // Mobile
//     },
//     [theme.breakpoints.up('sm')]: {
//       maxWidth: 'calc(2 * 160px + 1 * 8px + 40px)', // Tablet
//     },
//     [theme.breakpoints.up('md')]: {
//       maxWidth: 'calc(3 * 170px + 2 * 8px + 50px)', // Small Laptop
//     },
//     [theme.breakpoints.up('lg')]: {
//       maxWidth: 'calc(4 * 180px + 3 * 8px + 60px)', // Desktop
//     },
//     [theme.breakpoints.up('xl')]: {
//       maxWidth: 'calc(5 * 200px + 4 * 8px + 70px)', // Large Screen (TV)
//     },
//   },
//   card: {
//     width: 240,
//     height: 180,
//     margin: '0 8px',
//     flex: '0 0 auto', // Prevent cards from shrinking
//     position: 'relative',
//     borderRadius: '7px',
//     [theme.breakpoints.up('xs')]: {
//       width: 150,
//       height: 140,
//     },
//     [theme.breakpoints.up('sm')]: {
//       width: 160,
//       height: 150,
//     },
//     [theme.breakpoints.up('md')]: {
//       width: 210,
//       height: 160,
//     },
//     [theme.breakpoints.up('lg')]: {
//       width: 240,
//       height: 170,
//     },
//     [theme.breakpoints.up('xl')]: {
//       width: 300,
//       height: 200,
//     },
//   },
//   cardMedia: {
//     objectFit: 'cover',
//     width: '100%',
//     height: 'auto',
//   },
//   cardButton: {
//     position: 'absolute',
//     top: '40%',
//     transform: 'translateY(-50%)',
//     zIndex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)',
//     color: 'white',
//     border: 'none',
//     borderRadius: '4px',
//     padding: '8px',
//     cursor: 'pointer',
//   },
// }));

// export default function Cards({ languages }) {
//   const classes = useStyles();
//   const scrollRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   const handleScroll = (direction) => {
//     if (scrollRef.current) {
//       const { scrollLeft, clientWidth, scrollWidth } = scrollRef.current;
//       const scrollAmount = direction === 'next'
//         ? Math.min(scrollLeft + clientWidth, scrollWidth)
//         : Math.max(scrollLeft - clientWidth, 0);
//       scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
//       setScrollPosition(scrollAmount);
//     }
//   };

//   const handleScrollEvent = () => {
//     if (scrollRef.current) {
//       setScrollPosition(scrollRef.current.scrollLeft);
//     }
//   };

//   useEffect(() => {
//     const ref = scrollRef.current;
//     if (ref) {
//       ref.addEventListener('scroll', handleScrollEvent);
//       return () => ref.removeEventListener('scroll', handleScrollEvent);
//     }
//   }, []);

//   return (
//     <div style={{ position: 'relative' }}>
//       {scrollPosition > 0 && (
//         <button
//           onClick={() => handleScroll('prev')}
//           className={classes.cardButton}
//           style={{ left: '0' }}
//         >
//           &lt;
//         </button>
//       )}

//       <button
//         onClick={() => handleScroll('next')}
//         className={classes.cardButton}
//         style={{ right: '0' }}
//       >
//         &gt;
//       </button>

//       <div className={classes.container} ref={scrollRef}>
//         {languages.map((language, index) => (
//           <Card key={index} className={classes.card}>
//             <div style={{ position: 'relative' }}>
//               <CardMedia
//                 component="img"
//                 image={language.image}
//                 alt={language.nativeName}
//                 className={classes.cardMedia}
//               />
//               <Typography
//                 variant="h5"
//                 component="div"
//                 sx={{
//                   position: 'absolute',
//                   top: '50%',
//                   left: '50%',
//                   transform: 'translate(-50%, -50%)',
//                   color: 'white',
//                   textAlign: 'center',
//                   padding: 1,
//                   width: '100%',
//                 }}
//               >
//                 {language.nativeName}
//               </Typography>
//             </div>
//             <CardContent sx={{ backgroundColor: "black" }}>
//               <Typography
//                 gutterBottom
//                 variant="body2"
//                 component="div"
//                 sx={{
//                   color: "white",
//                   textAlign: 'left',
//                   marginLeft: '-12px'
//                 }}
//               >
//                 {language.name}
//               </Typography>
//             </CardContent>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }
