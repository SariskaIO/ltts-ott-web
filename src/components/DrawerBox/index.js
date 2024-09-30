import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export default function DrawerBox({toggleDrawer, open}) {

  const DrawerList = (
    <Box sx={{ width: 500 }} role="presentation" onClick={toggleDrawer(false)}>
        <iframe 
            src={'https://chat.sariska.io/'}
            width={'500'}
            height={'700'}
        ></iframe>
    </Box>
  );

  return (
    <div>
        {/* <Box sx={{'&:hover': {
            cursor: 'pointer'
        }}}>  
            <ChatIcon sx={{zIndex: 9990}} onClick={toggleDrawer(true)} />
        </Box> */}
      
      <Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
