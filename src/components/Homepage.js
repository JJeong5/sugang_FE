import * as React from 'react';
import AppFooter from './views/AppFooter';
import MainpageBox from './views/StudentMainpageBox';
import AppBar from './views/AppBar';
import withRoot from './withRoot';

function Homepage({location}) {
  return (
    <React.Fragment>
      {/* 
        AppBar: 맨 위 상단바 구현
        MainpageBox: 가운데 이미지박스 + 학교 셀렉트 부분 구현
        AppFooter: 페이지 하단바 구현
      */}
      <AppBar></AppBar>
      <MainpageBox></MainpageBox>
      <AppFooter />
    </React.Fragment>
  );
}

export default withRoot(Homepage);
