import * as React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import AppBar from '../assets/AppBar';
import Toolbar from '../assets/Toolbar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};
const LogoImage =
  'https://user-images.githubusercontent.com/82520143/161506667-c500b236-f034-4d85-b3b2-b16933d7403a.png';

// ./asset 에서 레이아웃 틀을 가져다가 사용함
function AppAppBar() {
  return (
    <div>
      <AppBar
        style={{background: '#24527a'}} // 배경색 지정
        position="fixed"
      >
        {/* 팀 로고 이미지 & 텍스트 배치 */}
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          {/* 로고 이미지 */}
          <Box
            component="img"
            sx={{
            height: 120,
            }}
            alt="Logo"
            src={LogoImage}
          />
          {/* 텍스트 배치 */}
          <Link
            variant="h6"
            underline="none"
            color="inherit"
            href="/"
            sx={{ fontSize: 24 }}
          >
            {'모두의 수강신청'}
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;
