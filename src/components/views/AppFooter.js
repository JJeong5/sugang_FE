import * as React from 'react';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../assets/Typography';

// Copyright(): 팀 워크스페이스로 이동
function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://plox.notion.site/Project-404-9daa9fa758394476aeb18de9647b9dff">
        Produce 404
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 4, display: 'flex' }}>
        <Grid container spacing={5}>
          {/* 팀 Copyright */}
          <Grid item>
            <Copyright />
          </Grid>
          {/*  원래 있던 footer  */}
          <Grid item>
            <Typography variant="caption">
              {'Icons made by '}
              <Link href="https://www.freepik.com" rel="sponsored" title="Freepik">
                Freepik
              </Link>
              {' from '}
              <Link href="https://www.flaticon.com" rel="sponsored" title="Flaticon">
                www.flaticon.com
              </Link>
              {' is licensed by '}
              <Link
                href="https://creativecommons.org/licenses/by/3.0/"
                title="Creative Commons BY 3.0"
                target="_blank"
                rel="noopener noreferrer"
              >
                CC 3.0 BY
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
