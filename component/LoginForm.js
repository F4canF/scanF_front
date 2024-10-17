import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../component/style/loginStyle';

const LoginForm = ({ onLoginComplete }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        // 로그인 로직 처리 (예: 서버 요청 등)
        if (username === 'user' && password === 'password') {
        onLoginComplete(); // 로그인 성공 시 메인 페이지로 이동
        } else {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return (
        <View style={styles.container}>
        <Text style={styles.title}>로그인</Text>

        <TextInput
            style={styles.input}
            placeholder="아이디를 입력해주세요"
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
        />

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginText}>로그인</Text>
        </TouchableOpacity>
        </View>
    );
};


export default LoginForm;
