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
        color: '#F8F152', // 문자열로 수정
        textStrokeWidth: 4, // -webkit-text-stroke-width를 textStrokeWidth로 변경
        textStrokeColor: '#000', // -webkit-text-stroke-color를 textStrokeColor로 변경
        fontFamily: 'Agbalumo', // font-family를 fontFamily로 변경
        fontSize: '7rem', // px 제거 및 값 조정
        fontStyle: 'normal', // 정상
        fontWeight: '400', 
        lineHeight: 'normal', 
    },
    text: {
        color: 'rgba(85, 85, 85, 0.87)', // RGBA 문자열로 지정
        fontFamily: 'Jua', // font-family를 fontFamily로 변경
        fontSize: '2.4rem', // font-size를 fontSize로 변경
        fontStyle: 'normal', // font-style을 fontStyle로 변경
        fontWeight: '200', // font-weight를 fontWeight로 변경
        lineHeight: 100, // line-height는 숫자로 지정, 필요에 따라 조정 가능
    },
});

export default Loading;
