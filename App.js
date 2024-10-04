// App.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LoadingScreen from './component/Loading'; // 별도 로딩 컴포넌트 가져오기
import Loading from './component/Loading';

const App = () => {
  const [loading, setLoading] = useState(true);

  // 2초 동안 강제로 로딩 화면을 표시한 후 로딩 종료
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2초 후 로딩 상태 해제
    return () => clearTimeout(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, []);

  // 로딩 중일 때는 LoadingScreen을 보여줌
  if (loading) {
    return <Loading />;
  }

  // 로딩이 끝난 후 실제 콘텐츠 표시
  return (
    <View style={styles.contentContainer}>
      <Text>피그마에서 main이라 적힌 페이지 이곳에 ㄱㄱ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
