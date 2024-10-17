import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginForm = () => {
    const [page, setPage] = useState(1); // 현재 페이지 번호
    const [name, setName] = useState('');
    const [birthDate, setBirthDate] = useState('');

    const renderPage = () => {
        switch (page) {
        case 1:
            return (
            <View style={styles.card}>
                <Text style={styles.label}>
                <Text style={styles.highlight}>이름</Text>을 입력해주세요
                </Text>
                <TextInput
                style={styles.input}
                placeholder="이름"
                value={name}
                onChangeText={setName}
                />
                <TouchableOpacity style={styles.button} onPress={() => setPage(2)}>
                <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>
            </View>
            );
        case 2:
            return (
            <View style={styles.card}>
                <Text style={styles.label}>
                사용할 <Text style={styles.highlight}>생일</Text>을 입력해주세요
                </Text>
                <TextInput
                style={styles.input}
                placeholder="생일"
                value={birthDate}
                onChangeText={setBirthDate}
                />
                <TouchableOpacity style={styles.button} onPress={() => setPage(3)}>
                <Text style={styles.buttonText}>확인</Text>
                </TouchableOpacity>
            </View>
            );
        case 3:
            return (
            <View style={styles.card}>
                <Text style={styles.label}>입력정보를 확인해주세요</Text>
                <Text style={styles.input}>{name}</Text>
                <Text style={styles.input}>{birthDate}</Text>
                <TouchableOpacity style={styles.button} onPress={() => setPage(1)}>
                <Text style={styles.buttonText}>다음</Text>
                </TouchableOpacity>
            </View>
            );
        default:
            return null;
        }
    };

    return <View style={styles.container}>{renderPage()}</View>;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3d3d3d',
        padding: 20,
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        marginBottom: 20,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
        color: '#333',
    },
    highlight: {
        color: '#FFD700',
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FFD700',
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#333',
    },
    });

export default LoginForm;
