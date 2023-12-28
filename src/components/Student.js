import * as React from 'react';
import './Manage.css';
import SideBar from './views/StudentHeader';
import styled from "styled-components";
import * as BsIcons from 'react-icons/bs';
import { Container } from '@mui/material';
import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
import AppFooter from './views/AppFooter';
import withRoot from './withRoot';
import StuFirstPageBox from './views/StudentFirstPageBox'

const Info = styled.h1``;


function Student() {
  return (
    <React.Fragment>
        <SideBar></SideBar>
        <div class="top_bar">
            <div class="title"><h1>수강신청</h1></div>
          <div class="bar_options">
            <div class="User"><AiOutlineUser size={35}/></div>
            <div class="Logout"><input type='button' class='Logout_button' value='LogOut' onClick={() => window.location.href = "../"}/></div>
            <div class="Message"><BsIcons.BsEnvelopeFill size={35}/></div>
            <div class="Home"><AiTwotoneHome size={35} onClick={() => window.location.href = "../"}/></div>
          </div>
        </div>
        <Container>
          <div>
          <StuFirstPageBox></StuFirstPageBox>
          </div>
        </Container>
        <AppFooter></AppFooter>
    </React.Fragment>
  );
}

export default withRoot(Student);
