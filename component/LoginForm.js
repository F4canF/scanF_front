import React, { useState } from 'react'; // useState 추가
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from '../component/style/loginStyle'; // 스타일 경로를 실제로 맞게 수정

const LoginForm = ({ onLoginComplete }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 로그인 로직 처리
        if (username === 'user' && password === 'password') {
            onLoginComplete(); // 로그인 성공 시 호출
        } else {
            alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <View style={styles.body}>
            <Image
                source={require('../assets/Title.png')} // "scanF" 이미지를 불러오는 경로
                style={styles.image}
            />
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder="아이디를 입력해주세요."
                    placeholderTextColor="#AAAAAA"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="비밀번호를 입력해주세요."
                    placeholderTextColor="#AAAAAA"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry={true}
                />
                <Text style={styles.footerText}>아이디 찾기 | 비밀번호 찾기</Text>

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginText}>로그인</Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>계정이 없으신가요? | 회원가입</Text>
                </View>
            </View>
        </View>
    );
};

export default LoginForm;
