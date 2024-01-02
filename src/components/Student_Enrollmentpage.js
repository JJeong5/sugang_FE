import * as React from "react";
import AppFooter from "./views/AppFooter";
import AppBar from "./views/AppBar";
import withRoot from "./withRoot";
import StuEnrolmentpageBox from "./views/StudentEnrollmentpageBox";
import "./Manage.css";
import SideBar from "./views/StudentHeader";
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";
import { Container } from "@mui/material";
import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";

const Info = styled.h1``;

function StudentEnrolmentpage() {
  return (
    <div>
      <SideBar></SideBar>
      <div class="top_bar">
        <div class="title">
          <h1>수강신청</h1>
        </div>
        <div class="bar_options">
          <div class="Logout">
            <input
              type="button"
              class="Logout_button"
              value="LogOut"
              onClick={() => (window.location.href = "../")}
            />
          </div>
          <div class="Home">
            <AiTwotoneHome
              size={35}
              onClick={() => (window.location.href = "/student")}
            />
          </div>
        </div>
      </div>
      <Container>
        <div>
          <StuEnrolmentpageBox></StuEnrolmentpageBox>
        </div>
      </Container>
      <AppFooter></AppFooter>
    </div>
  );
}

export default withRoot(StudentEnrolmentpage);
