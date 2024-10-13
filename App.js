import React, { useState, useEffect } from 'react';
import Loading from './component/Loading';
import Main from './component/Main';

const App = () => {
  const [loading, setLoading] = useState(true);

  // 3초 동안 로딩 화면을 표시한 후 로딩 종료
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3초 후 로딩 상태 해제
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  // 로딩 중일 때는 LoadingScreen을 보여줌
  if (loading) {
    return <Loading />;
  }

  // 로딩이 끝난 후 실제 메인 페이지 표시
  return (
    <Main/>
  );
};



export default App;
