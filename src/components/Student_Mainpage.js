import * as React from 'react';
import AppFooter from './views/AppFooter';
import AppBar from './views/AppBar';
import withRoot from './withRoot';
import StudentFirstPageBox from './views/StudentFirstPageBox'

function Nextpage() {
  return (
    <React.Fragment>
      {/* 
        AppBar: 맨 위 상단바 구현
        StudentFirstPageBox: 가운데 이미지 버튼
        AppFooter: 페이지 하단바 구현
      */}
      <AppBar></AppBar>
      <StudentFirstPageBox></StudentFirstPageBox>
      <AppFooter></AppFooter>
    </React.Fragment>
  );
}

export default withRoot(Nextpage);
