import * as React from 'react';
import { Box } from '@mui/system';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Container from '@mui/material/Container';
import StupageBoxLayout from './StudentpageBoxLayout'
import Typography from '../assets/Typography';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

const ImageBackdrop = styled('div')(({ theme }) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: '#000',
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  }));

const ImageIconButton = styled(ButtonBase)(({ theme }) => ({
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '50vh',
    [theme.breakpoints.down('md')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover .imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover .imageMarked': {
      opacity: 0,
    },
    '&:hover .imageTitle': {
      border: '4px solid currentColor',
    },
    '& .imageTitle': {
      position: 'relative',
      padding: `${theme.spacing(2)} ${theme.spacing(4)} 14px`,
    },
    '& .imageMarked': {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));
  
const images = [

    {
        id: 1,
        url: 'https://images.unsplash.com/photo-1530971013997-e06bb52a2372?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGFjYWRlbWljfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60',
        title: '수강신청',
        link: '../student/enrolment',
        width: '40%',
    },
    {
        id: 2,
        url: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YWNhZGVtaWN8ZW58MHx8MHx8&auto=format&fit=crop&w=400&q=60',
        title: '교과목 조회',
        link: '../student/class',
        width: '40%',  
    },
    {
        id: 3,
        url: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80',
        title: '장바구니',
        link: '../student/bucket',
        width: '40%',
    }
];

export default function AppFooter() {
  return (
    <StupageBoxLayout>
        <Container component="section" sx={{ mt: 8, mb: 4 }}>
                <Box sx={{mt: 8, display: 'flex', flexwrap: 'wrap'}}>
                {images.map((image) => (
                  <ImageIconButton
                      component={Link}
                      to={image.link}
                      key={image.title}
                      style={{
                          width: image.width,
                      }}
                  >
                      <Box
                          sx={{
                              position: 'absolute',
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center 40%',
                              backgroundImage: `url(${image.url})`,
                          }}
                      />
                      <ImageBackdrop className="imageBackdrop" />
                      <Box
                          sx={{
                              position: 'absolute',
                              left: 0,
                              right: 0,
                              top: 0,
                              bottom: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              color: 'common.white',
                          }}
                      >
                      <Typography
                          component="h3"
                          variant="h6"
                          color="inherit"
                          className="imageTitle"
                      >
                          {image.title}
                          <div className="imageMarked" />
                      </Typography>
                      </Box>
                  </ImageIconButton>
                ))}
            </Box>
        </Container>
    </StupageBoxLayout>
    
  );
}
