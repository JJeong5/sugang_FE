import React from "react";
import * as BsIcons from "react-icons/bs";
export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <BsIcons.BsFillHouseDoorFill />,
    cName: "nav-text",
  },
  {
    title: "수강신청",
    path: "/student/enrolment",
    icon: <BsIcons.BsMouse2 />,
    cName: "nav-text",
  },
  {
    title: "My Page/신청결과",
    path: "/student/mypage",
    icon: <BsIcons.BsFillBookFill />,
    cName: "nav-text",
  },
];
