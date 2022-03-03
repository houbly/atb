import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import StoreIcon from '@mui/icons-material/RocketLaunchOutlined';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }} mb={4}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <StoreIcon fontSize="large" />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, textTransform: 'uppercase', fontWeight: 700 }}
            >
              Houston's shop
            </Typography>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
