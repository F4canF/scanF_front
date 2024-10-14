// Loading.js
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Loading = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>scanF</Text>
            <Text style={styles.text}>더 즐겁게, 더 재밌게</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width : '100vw' ,
        height : '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff', 
    },
    titleText: {
        color: '#F8F152', 
        WebkitTextStrokeWidth: '2px', // 사용하려면 Webkit 접두사를 추가
        WebkitTextStrokeColor: '#000000',
        fontFamily: 'Agbalumo', 
        fontSize: '7rem', 
        fontWeight: '400', 
        lineHeight: 'normal', 
    },
    text: {
        color: 'rgba(85, 85, 85, 0.87)', 
        fontFamily: 'Jua', 
        fontSize: 64, 
        fontStyle: 'normal', 
        fontWeight: '200', 
    },
});

export default Loading;
