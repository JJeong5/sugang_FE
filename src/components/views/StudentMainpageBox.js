import React, { useState, useEffect } from "react";
import Typography from "../assets/Typography";
import MainpageBoxLayout from "./MainpageBoxLayout";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Home } from "@mui/icons-material";
import Homepage from "../Homepage";
import FileUploadButton from "../assets/FileUploadButton";
import MainImage from "../assets/images/Mainpage_bg.jpg";

const backgroundImage = MainImage;

export default function MainpageBox() {
  const [univ, setAge] = React.useState("");
  console.log(univ);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // call the list of university
  const [univ_list, setUser] = useState("");
  // useEffect(() => {
  //   Axios.post("/home/univ").then((response) => {
  //     if (response.data) {
  //       console.log(response.data);
  //       setUser(response.data);
  //     } else {
  //       alert("failed to ");
  //     }
  //   });
  // }, []);
  useEffect(() => {
    const InitPostMethod = async () => {
      await axios({
        url: "/api/home/univ",
        method: "POST",
        baseURL:
          "http://k8s-stage-game2049-bb9247bafa-590478206.ap-northeast-2.elb.amazonaws.com:8080",
        withCredentials: true.valueOf,
      })
        .then(function callback(response) {
          // Table data -> 서버에서 받은 데이터
          setUser(response.data);
        })
        .catch(function CallbackERROR(response) {
          console.log("fail");
          alert("ERROR");
        });
    };
    InitPostMethod();
  }, []);

  return (
    <MainpageBoxLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: "#7fc7d9", // Average color of the background image.
        backgroundPosition: "center",
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: "none" }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        에티버스 수강신청
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        {/* 복잡했던 수강신청. 이제 안녕 */}
      </Typography>
      <Box
        sx={{
          bgcolor: "background.paper",
          minWidth: 240,
        }}
      >
        <FormControl fullWidth>
          {/* <InputLabel id="demo-simple-select-label">대학교를 선택해주세요</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={univ}
            label="Univ"
            onChange={handleChange}
          >
            {Object.values(univ_list).map((name) => (
              <MenuItem value={name.univname}>{name.univname}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box
        sx={{
          bgcolor: "background.paper",
          minWidth: 60,
        }}
      >
        <Link to="/SignIn">
          <Button
            onClick={() => sessionStorage.setItem("univ", univ)}
            variant="contained"
            disabled={!univ}
          >
            확인
          </Button>
        </Link>
      </Box>
    </MainpageBoxLayout>
  );
}
