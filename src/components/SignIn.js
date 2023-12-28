import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"RECA 4th - Group 1 © "}
      <Link color="inherit" href="../">
        모두의 수강신청
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

function SignIn() {
  // Homepage에서 univ값 가져온거 확인 & 변수 할당
  const univName = sessionStorage.getItem("univ");

  // id, passwd, isManager
  const [userId, setUserId] = React.useState("");
  const [passwd, setPasswd] = React.useState("");
  const [isManager, setManager] = React.useState(false);

  // Send FormData to Server
  const handlePost = async (joinData) => {
    const dir = joinData.isManager;
    await axios({
      url: "/api/login",
      method: "POST",
      baseURL: "http://localhost:8080",
      withCredentials: true,
      data: joinData,
    })
      .then(function callback(response) {
        // 사용자 정보 SessionStorage에 저장
        sessionStorage.setItem("id", userId);

        // response(isManager)의 값에 따라 이동
        if (response.data === true) {
          if (dir === true) {
            window.location.href = "/manage";
          } else {
            window.location.href = "/student";
          }
        } else {
          alert("ID 또는 비밀번호가 잘못되었습니다.");
        }
      })
      .catch(function CallbackERROR(response) {
        alert("ERROR!");
      });
  };

  // Handle isManager checkbox
  const handleManager = (e) => {
    e.target.checked ? setManager(true) : setManager(false);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);
    const joinData = {
      univ: univName,
      id: data.get("userId"),
      password: data.get("password"),
      isManager,
    };
    console.log(joinData);

    // Validation check 염두
    if (true) {
      handlePost(joinData);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          margin="normal"
          required
          fullWidth
          variant="outlined"
          id="userId"
          label="Username"
          name="userId"
          autoComplete="userId"
          autoFocus
          onChange={(e) => {
            setUserId(e.target.value);
          }}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          variant="outlined"
          id="password"
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={(e) => {
            setPasswd(e.target.value);
          }}
        />

        <Stack spacint={2} direction="row">
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
            {" "}
            SIGN IN{" "}
          </Button>
          <Button variant="contained" sx={{ mt: 3, mb: 2, ml: 5 }}>
            {" "}
            ID/PW찾기{" "}
          </Button>
        </Stack>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}

export default SignIn;
