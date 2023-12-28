import * as React from 'react';
import AppFooter from './views/AppFooter';
import AppBar from './views/AppBar';
import withRoot from './withRoot';
import apiAxios from '../apiAxios';

function Testtpage() {
    // 서버시간 변수 선언
    const [ip, setIp] = React.useState('');

    // 서버시간 값을 설정합니다.
    function callback(data) {
        setIp(data);
    }

    // 첫번째 렌더링을 다 마친 후 실행합니다.
    React.useEffect(
        () => {
        // 클라이언트의 서버시간를 알아내는 백엔드의 함수를 호출합니다.
        apiAxios('/timer', callback);
        }, []
    );

  return (
    <header className="App-header">
      현재시간은 {ip}입니다.
    </header>
  );
}

export default withRoot(Testtpage);
