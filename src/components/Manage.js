import * as React from 'react';
import './Manage.css';
import SideBar from './views/Manage_Header';
import styled from "styled-components";
import * as BsIcons from 'react-icons/bs';
import { Container } from '@mui/material';
import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
import NoticeBoard from './views/NoticeBoard'
import ManagerBoxLayout from './views/ManagerBoxLayout';
import AppFooter from './views/AppFooter';
import withRoot from './withRoot'

const Info = styled.h1``;

function Manage_UploadTimeTable() {
  return (
    <>
      <div>
          <SideBar></SideBar>
          <div class="top_bar">
              <div class="title"><h1>알림</h1></div>
            <div class="bar_options">
              <div class="User"><AiOutlineUser size={35}/></div>
              <div class="Logout"><input type='button' class='Logout_button' value='LogOut' onClick={() => window.location.href = "../"}/></div>
              <div class="Message"><BsIcons.BsEnvelopeFill size={35}/></div>
              <div class="Home"><AiTwotoneHome size={35} onClick={() => window.location.href = "../"}/></div>

            </div>
          </div>
          <Container>
              <ManagerBoxLayout>
                <NoticeBoard></NoticeBoard>
              </ManagerBoxLayout>
          </Container>
      </div>
      <AppFooter></AppFooter>
    </>
  );
}


export default withRoot(Manage_UploadTimeTable);