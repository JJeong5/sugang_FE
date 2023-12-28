import * as React from 'react';
import './Manage.css';
import SideBar from '../components/views/StudentHeader';
import withRoot from './withRoot';
import StudentMypageLayout from './views/StudentMypageLayout'
import AppFooter from './views/AppFooter';
import styled from "styled-components";
import * as BsIcons from 'react-icons/bs';
import { Container } from '@mui/material';
import { AiOutlineUser, AiTwotoneHome } from "react-icons/ai";
const Info = styled.h1``;
function StudentMyPage() {
  return (
    <div>
        <SideBar></SideBar>
        <div class="top_bar">
            <div class="title"><h1>마이페이지 / 신청결과</h1></div>
          <div class="bar_options">
            <div class="User"><AiOutlineUser size={35}/></div>
            <div class="Logout"><input type='button' class='Logout_button' value='LogOut' onClick={() => window.location.href = "../"}/></div>
            <div class="Message"><BsIcons.BsEnvelopeFill size={35}/></div>
            <div class="Home"><AiTwotoneHome size={35} onClick={() => window.location.href = "../"}/></div>
          </div>
        </div>
        <Container>
          <div>
            <StudentMypageLayout></StudentMypageLayout>
            {/* <br></br><br></br>
            <table border="1" bordercolor="gray" width ="100%" height="250" align = "center" >
              <th width ="15%" bgcolor="gray">시간</th>
              <th bgcolor="gray">월</th>
              <th bgcolor="gray">화</th>
              <th bgcolor="gray">수</th>
              <th bgcolor="gray">목</th>
              <th bgcolor="gray">금</th>
              <tr>
                  <td>09:00 ~ 10:30</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>10:45 ~ 12:15</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>12:30 ~ 15:00</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>15:15 ~ 16:45</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>17:00 ~ 18:30</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
              <tr>
                  <td>18:45 ~ 20:15</td>  
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
              </tr>
            </table>
            <br></br><br></br>

            <table border="1" bordercolor="gray" width ="40%" height="75" align = "left" >
              <th bgcolor="gray">전공 학점</th>
              <th bgcolor="gray">교양 학점</th>
              <th bgcolor="gray">실험 학점</th>
              <tr>
                  <td>10</td>
                  <td>10</td>
                  <td>10</td>
              </tr>
            </table>
            <br></br><br></br>
            <br></br><br></br> */}
          </div>
        </Container>
        <AppFooter></AppFooter>
    </div>
  );
}
export default withRoot(StudentMyPage)