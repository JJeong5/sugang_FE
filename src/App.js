import "./App.css";
import Homepage from "./components/Homepage";
import SignIn from "./components/SignIn";
import Manage from "./components/Manage";
import Manage_UploadTimeTable from "./components/Manage_UploadTimeTable";
import Manage_UploadStudent from "./components/Manage_UploadStudent";
import ManagePeriod from "./components/Manage_Period";
import ManageSearch from "./components/Manage_Search";
import Student from "./components/Student";
import StudentBucket from "./components/Student_Bucket";
import StudentClass from "./components/Student_Class";
import StudentMyPage from "./components/Student_Mypage";
import StudentMainpage from "./components/Student_Mainpage";
import StudentEnrollmentpage from "./components/Student_Enrollmentpage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Testpage from "./components/Testpage";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="test/" element={<Testpage />} />
          <Route path="signIn/*" element={<SignIn />} />
          <Route path="manage/" element={<Manage />} />
          <Route path="manage/timetable" element={<Manage_UploadTimeTable />} />
          <Route path="manage/info" element={<Manage_UploadStudent />} />
          <Route path="manage/period" element={<ManagePeriod />} />
          <Route path="manage/search" element={<ManageSearch />} />
          <Route path="student/" element={<Student />} />
          <Route path="student/bucket" element={<StudentBucket />} />
          <Route path="student/class" element={<StudentClass />} />
          <Route path="student/mypage" element={<StudentMyPage />} />
          <Route
            path="/StudentMainpage"
            element={<StudentMainpage></StudentMainpage>}
          ></Route>
          <Route
            path="student/enrolment"
            element={<StudentEnrollmentpage></StudentEnrollmentpage>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
    // =======
    // import {HashRouter as Router, Routes, Route} from 'react-router-dom'
    // import Next from './components/nextpage'
    // import StudentMainpage from './components/StudentMainpage'
    // import StudentEnrolmentpage from './components/StudentEnrolmentpage';
    // import React from 'react';

    // function App() {
    //   return (
    //     <Router>
    //       <Routes>
    //         <Route path='/' element={<Homepage></Homepage>}></Route>
    //         <Route path='/Next' element={<Next></Next>}></Route>

    //       </Routes>
    //     </Router>

    //     // <div className="App">
    //     //   <Homepage></Homepage>  {/* 첫 메인페이지 */}
    //     // </div>
  );
}

export default App;
