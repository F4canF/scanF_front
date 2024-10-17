import React, { useState, useEffect } from 'react';
import Loading from './component/Loading';
import LoginForm from './component/LoginForm';
import Main from './component/Main';

const App = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 3초 후 로딩 종료
    return () => clearTimeout(timer);
  }, []);

  const handleLoginComplete = () => {
    setIsLoggedIn(true); // 로그인 상태 변경
  };

  if (loading) {
    return <Loading />;
  }

  if (isLoggedIn) {
    return <Main />;
  }

  return <LoginForm onLoginComplete={handleLoginComplete} />;
};

export default App;
