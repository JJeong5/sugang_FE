import * as React from 'react';
import './Manage.css';
import SideBar from '../components/views/Manage_Header';
import styled from "styled-components";
import TimetableBox from './views/TimetableBox2'
import * as BsIcons from 'react-icons/bs';
import { Container } from '@mui/material';
import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
import AppFooter from './views/AppFooter';
import withRoot from './withRoot';

const Info = styled.h1``;

function ManageInfo() {
  return (
    <div>
        <SideBar></SideBar>
        <div class="top_bar">
            <div class="title"><h1>학생 자료 업로드</h1></div>
          <div class="bar_options">
            <div class="User"><AiOutlineUser size={35}/></div>
            <div class="Logout"><input type='button' class='Logout_button' value='LogOut' onClick={() => window.location.href = "../"}/></div>
            <div class="Message"><BsIcons.BsEnvelopeFill size={35}/></div>
            <div class="Home"><AiTwotoneHome size={35} onClick={() => window.location.href = "../"}/></div>

          </div>
        </div>
        <Container>
          <TimetableBox></TimetableBox>
        </Container>
        <AppFooter></AppFooter>
    </div>
  );
}


export default withRoot(ManageInfo)