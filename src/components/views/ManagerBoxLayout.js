import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FileUploadButton from '../assets/FileUploadButton';

const MainPageBoxLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  // display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '75vh',
    minHeight: 500,
    maxHeight: 1300,
  },
}));

const Background = styled(Box)({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
});

function MainPageBoxLayout(props) {
  const { sxBackground, children } = props;

  return (
    <>
      <MainPageBoxLayoutRoot>
        <Container
          sx={{
            mt: 10,
            mb: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {children}
          <Box
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
              backgroundColor: 'white',
              opacity: 0.5,
              zIndex: -1,
            }}
          />
          <Background sx={sxBackground} />
        
        </Container>
      </MainPageBoxLayoutRoot>
    </>

  );
}

MainPageBoxLayout.propTypes = {
  children: PropTypes.node,
  sxBackground: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default MainPageBoxLayout;
