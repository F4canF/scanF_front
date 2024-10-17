import React, { useState, useEffect } from 'react';
import Loading from './component/Loading'; // 로딩 컴포넌트
import LoginForm from './component/LoginForm'; // 로그인 컴포넌트
import Main from './component/Main'; // 메인 페이지 컴포넌트

const App = () => {
  const [loading, setLoading] = useState(true);  // 로딩 상태 관리
  const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태 관리

  // 3초 동안 로딩 화면을 표시한 후 로딩 종료
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3초 후 로딩 상태 해제
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  // 로그인 완료 시 호출될 함수
  const handleLoginComplete = () => {
    setIsLoggedIn(true); // 로그인 상태를 true로 변경
  };

  // 로딩 중일 때는 Loading 컴포넌트를 보여줌
  if (loading) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <Main />; // 로그인 완료 시 메인 페이지로 이동
  }

  return <LoginForm onLoginComplete={handleLoginComplete} />;
};

export default App;
