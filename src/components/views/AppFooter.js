import * as React from "react";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Container from "@mui/material/Container";
import Typography from "../assets/Typography";

// Copyright(): 팀 워크스페이스로 이동
function Copyright() {
  return (
    <React.Fragment>
      {new Date().getFullYear()}
      {" © "}
      <Link
        color="inherit"
        href="https://plox.notion.site/Project-404-9daa9fa758394476aeb18de9647b9dff"
      >
        RECA 4th - Group 1
      </Link>{" "}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "secondary.light" }}
    >
      <Container sx={{ my: 4, display: "flex" }}>
        <Grid container spacing={5}>
          {/* 팀 Copyright */}
          <Grid item>
            <Copyright />
          </Grid>
          {/*  원래 있던 footer  */}
          <Grid item>
            <Typography variant="caption">
              {"팀장: "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="성시민"
              >
                성시민
              </Link>
              {" / "}
              {"팀원: "}
              <Link
                href="https://www.freepik.com"
                rel="sponsored"
                title="강가희"
              >
                강가희
              </Link>
              {", "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="김주윤"
              >
                김주윤
              </Link>
              {", "}
              <Link
                href="https://github.com/JJeong5"
                rel="sponsored"
                title="오정호"
              >
                오정호
              </Link>
              {", "}
              <Link
                href="https://www.flaticon.com"
                rel="sponsored"
                title="홍경래"
              >
                홍경래
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
