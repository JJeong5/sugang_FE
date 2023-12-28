import React from 'react';
import * as BsIcons from 'react-icons/bs';
export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: 'nav-text'
  },
  {
    title: '시간표 업로드/수정',
    path: '/manage/timetable',
    icon: <BsIcons.BsCloudArrowUpFill />,
    cName: 'nav-text'
  },
  {
    title: '수강신청 기한 설정',
    path: '/manage/period',
    icon: <BsIcons.BsCalendarPlus />,
    cName: 'nav-text'
  },
  {
    title: '자료 조회',
    path: '/manage/search',
    icon: <BsIcons.BsSearch />,
    cName: 'nav-text'
  },
  {
    title: '학생 자료 업로드',
    path: '/manage/info',
    icon: <BsIcons.BsFillPeopleFill />,
    cName: 'nav-text'
  }
];