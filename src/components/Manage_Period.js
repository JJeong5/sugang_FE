import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './Manage.css';
import SideBar from './views/Manage_Header';
import styled from "styled-components";
import * as BsIcons from 'react-icons/bs';
import { Container } from '@mui/material';
import { AiOutlineUser, AiTwotoneHome, AiFillCarryOut } from "react-icons/ai";
import AppFooter from './views/AppFooter';
import withRoot from './withRoot';

const Info = styled.h1``; 

function ManagePeriod() {
  return (
    <div>
        <SideBar></SideBar>
        <div class="top_bar">
            <div class="title"><h1>수강신청 기한 설정</h1></div>
          <div class="bar_options">
            <div class="User"><AiOutlineUser size={35}/></div>
            <div class="Logout"><input type='button' class='Logout_button' value='LogOut' onClick={() => window.location.href = "../"}/></div>
            <div class="Message"><BsIcons.BsEnvelopeFill size={35}/></div>
            <div class="Home"><AiTwotoneHome size={35} onClick={() => window.location.href = "../"}/></div>
          </div>
        </div>
        <Container>

        <div>
          <select name="job">
            <option id='PeriodSemester' value="2022_1">2022-1학기</option>
            <option id='PeriodSemester' value="2022_2">2022-2학기</option>
          </select>
        </div>

        <div class="Input_period">
            <form id='SubmitPeriodBasket'>
                <AiFillCarryOut size={30}/>
                <div class="Period_title">장바구니 기간</div>
                <div class="Period_start"><input type="datetime-local" id='PeriodBasketStartDate'/></div> 
                <div class="Period_blank"><text>~</text></div> 
                <div class="Period_end"><input type="datetime-local" id='PeriodBasketEndDate'/></div> 
                <div class="Period_submit"><input type="button" onClick={(e) => AxiosPeriodBasket()}  value="확인"/></div> 
            </form>
            </div>
            <div class="Input_period">
            <form>
                <AiFillCarryOut size={30}/>
                <div class="Period_title">수강신청 기간</div>
                <div class="Period_start"><input type="datetime-local" id='PeriodRegisterStartDate'/></div> 
                <div class="Period_blank"><text>~</text></div> 
                <div class="Period_end"><input type="datetime-local" id='PeriodRegisterEndDate'/></div> 
                <div class="Period_submit"><input type="button" onClick={(e) => AxiosPeriodRegister()} value="확인"/></div> 
            </form>
            </div>
            <div class="Input_period">
            <form>
                <AiFillCarryOut size={30}/>
                <div class="Period_title">수강정정 기간</div>
                <div class="Period_start"><input type="datetime-local" id='PeriodModifyStartDate'/></div> 
                <div class="Period_blank"><text>~</text></div> 
                <div class="Period_end"><input type="datetime-local" id='PeriodModifyEndDate'/></div> 
                <div class="Period_submit"><input type="button" onClick={(e) => AxiosPeriodModify()} value="확인"/></div> 
            </form>
            </div>
            <div class="Input_period">
            <form>
                <AiFillCarryOut size={30}/>
                <div class="Period_title">수강취소 기간</div>
                <div class="Period_start"><input type="datetime-local" id='PeriodCancleStartDate'/></div> 
                <div class="Period_blank"><text>~</text></div> 
                <div class="Period_end"><input type="datetime-local" id='PeriodCancleEndDate'/></div> 
                <div class="Period_submit"><input type="button" onClick={(e) => AxiosPeriodCancle()} value="확인"/></div> 
            </form>
            </div>
        </Container>
        <AppFooter></AppFooter>
    </div>
  );
}


export default withRoot(ManagePeriod)

function AxiosPeriodBasket(e){

  const handlePost = async(joinData) =>{
    await axios({
      url: 'api/manager/FormPeriod/basket',
      method: "post",
      baseURL: 'http://localhost:8080',
      withCredentials: true,
      data: joinData
    })
    .then(function callback(response){
    })
    .catch(  function CallbackERROR(response){
      alert("ERROR!");
    });
  };

  let start = document.getElementById('PeriodBasketStartDate').value;
  let end = document.getElementById("PeriodBasketEndDate").value;
  let semester = document.getElementById("PeriodSemester").value;

  if(start == "" || end == "") {
    alert("기한을 설정해주세요.");
  }
  else {
  const joinData = {
    start: start,
    end : end,
    semester : semester,
  };
  if(true){
    handlePost(joinData);
  }
}
}   

function AxiosPeriodRegister(e){
  
  const handlePost = async(joinData) =>{
    await axios({
      url: 'api/manager/FormPeriod/register',
      method: "post",
      baseURL: 'http://localhost:8080',
      withCredentials: true,
      data: joinData
    })
    .then(function callback(response){
    })
    .catch(  function CallbackERROR(response){
      alert("ERROR!");
    });
  };
  
  let start = document.getElementById('PeriodRegisterStartDate').value;
  let end = document.getElementById("PeriodRegisterEndDate").value;
  let semester = document.getElementById("PeriodSemester").value;

  if(start == "" || end == "") {
    alert("기한을 설정해주세요.");
  }
  else {
  const joinData = {
    start: start,
    end : end,
    semester : semester,
  };
  if(true){
    handlePost(joinData);
  
  }
}
}  


function AxiosPeriodModify(e){
  
  const handlePost = async(joinData) =>{
    await axios({
      url: 'api/manager/FormPeriod/modify',
      method: "post",
      baseURL: 'http://localhost:8080',
      withCredentials: true,
      data: joinData
    })
    .then(function callback(response){
    })
    .catch(  function CallbackERROR(response){
      alert("ERROR!");
    });
  };
  
  let start = document.getElementById('PeriodModifyStartDate').value;
  let end = document.getElementById("PeriodModifyEndDate").value;
  let semester = document.getElementById("PeriodSemester").value;

  if(start == "" || end == "") {
    alert("기한을 설정해주세요.");
  }
  else {
  const joinData = {
    start: start,
    end : end,
    semester : semester,
  };
  if(true){
    handlePost(joinData);
    
  }
}
}  


function AxiosPeriodCancle(e){
  
  const handlePost = async(joinData) =>{
    await axios({
      url: 'api/manager/FormPeriod/cancle',
      method: "post",
      baseURL: 'http://localhost:8080',
      withCredentials: true,
      data: joinData
    })
    .then(function callback(response){
    })
    .catch(  function CallbackERROR(response){
      alert("ERROR!");
    });
  };
  
  let start = document.getElementById('PeriodCancleStartDate').value;
  let end = document.getElementById("PeriodCancleEndDate").value;
  let semester = document.getElementById("PeriodSemester").value;

  if(start == "" || end == "") {
    alert("기한을 설정해주세요.");
  }
  else {
  const joinData = {
    start: start,
    end : end,
    semester : semester,
  };
  if(true){
    handlePost(joinData);
    
  }
}
}  
