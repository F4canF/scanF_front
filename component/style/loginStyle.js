import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    body: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    container: {
      width: 458,
      height: 524,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFF7C5', // 연한 노란색 배경
      padding: 40,
      borderRadius: 20, // 모서리를 둥글게
    },
    image: {
      width: '12%',  // 적당한 크기로 설정
      aspectRatio: 1, // 이미지의 비율 유지
      resizeMode: 'contain',
    //   marginBottom: 10, // 이미지와 컨테이너 사이 간격 추가
    },
    input: {
      width: '90%',
      padding: 15,
      backgroundColor: '#FFF',
      borderColor: '#DDD',
      borderWidth: 1,
      marginBottom: 15,
      borderRadius: 30, // 입력 필드 모서리를 둥글게
    },
    loginButton: {
      backgroundColor: '#FBC02D',
      padding: 15,
      borderRadius: 30,
      width: '90%',
      alignItems: 'center',
      marginTop: 20,
    },
    loginText: {
      color: '#FFFFFF',
      fontSize: 18,
      fontWeight: 'bold',
    },
    footer: {
      marginTop: 15,
      alignItems: 'center',
    },
    footerText: {
      color: '#AAAAAA',
      fontSize: 12,
      marginTop: 10,
    },
  });


export default styles;


