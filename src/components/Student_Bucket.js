import * as React from "react";
import "./Manage.css";
import SideBar from "./views/StudentHeader";
import BucketTableBox from "./views/BucketTableBox";
import StudentTimeTable from "./views/StudentTimeTable";
import withRoot from "./withRoot";
import AppFooter from "./views/AppFooter";
import styled from "styled-components";
import * as BsIcons from "react-icons/bs";
import { Container } from "@mui/material";
import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
import BucketEnrollmentTableBox from "./views/BucketEnrollmentTableBox";

const Info = styled.h1``;

function StudentBucket() {
  return (
    <div>
      <SideBar></SideBar>
      <div class="top_bar">
        <div class="title">
          <h1>장바구니 신청</h1>
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
              onClick={() => (window.location.href = "../")}
            />
          </div>
        </div>
      </div>
      <Container>
        <div>
          <BucketEnrollmentTableBox></BucketEnrollmentTableBox>
          <BucketTableBox></BucketTableBox>
          <StudentTimeTable></StudentTimeTable>
        </div>
      </Container>
      <AppFooter></AppFooter>
    </div>
  );
}

export default withRoot(StudentBucket);
