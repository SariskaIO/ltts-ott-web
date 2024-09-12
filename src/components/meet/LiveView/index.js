import React from 'react';
import { Grid, Card, CardMedia } from '@mui/material';
import imgLarge from '../../../assets/images/aajtak-large.png';
import zeeNews from '../../../assets/images/zee-news.png';
import indiaToday from '../../../assets/images/india-today.png';
import zeeBusiness from '../../../assets/images/zee-business.png';
import aajTak from '../../../assets/images/aajtak.png';
import goodNews from '../../../assets/images/good-news.png';

const LiveView = () => {
    const imgList = [
        aajTak, zeeNews, indiaToday, goodNews, zeeBusiness
    ]
  return (
    <Grid container style={{height: '100vh', width: '100%', margin: 0 }}>
      {/* Large Image */}
      <Grid item xs={12} style={{ height: '70vh' }}>
        <Card style={{ height: '100%', width:'100%' }}>
          <CardMedia
            component="img"
            height="100%"
            image={aajTak}
            alt="Large Image"
            style={{ objectFit: 'fill', transform: 'scale(-1, 1)', height: '100%', width: '100%'  }}
          />
        </Card>
      </Grid>

      {/* Small Images in a Rail View */}
      <Grid container item xs={12} spacing={0.5} justifyContent="space-between" style={{ height: '30vh' }}>
        <Grid item xs={3} style={{ height: '35vh' }}>  {/* First image is slightly larger */}
            <Card style={{ height: '100%', width: '100%' }}>
                <CardMedia
                component="img"
                height="100%"
                image={ imgList[0]}
                alt="Small Image 1"
                style={{ objectFit: 'contain', height: '100%', width: '100%' }}
                />
            </Card>
            </Grid>
        {imgList.slice(1).map((imge, index) => (
          <Grid item xs={2.25} key={index} style={{ height: '100%' }}>
            <Card style={{ height: '100%' }}>
              <CardMedia
                component="img"
                height="100%"
                image={imge}
                alt={`Small Image ${index}`}
                style={{ objectFit: 'fill', transform: imge === aajTak ? 'scale(-1, 1)' : 'initial' }}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default LiveView;
