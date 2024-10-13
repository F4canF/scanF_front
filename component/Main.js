import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Main = () => {
    return (
      <View style={styles.container}>
        {/* 제목 부분 */}
        <View style={styles.header}>
          <Text style={styles.title}>scanF</Text>
          <Text style={styles.subtitle}>더 즐겁게, 더 재밌게</Text>
        </View>
  
        {/* 버튼 부분 */}
        <View style={styles.body}>
          <TouchableOpacity style={styles.buttonSide} onPress={() => { /* myPage로 이동 */ }}>
            <Text style={styles.buttonText}>My-page</Text>
          </TouchableOpacity>
          <View >
            <TouchableOpacity style={styles.button} onPress={() => { /* DrawingCanvas로 이동 */ }}>
              <Text style={styles.buttonText}>그림배우기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => { /* TextInput으로 이동 */ }}>
              <Text style={styles.buttonText}>글자학습 및 교정</Text>
            </TouchableOpacity>
          </View>
        </View>
  
        {/* 이미지 부분 */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Footer Image or Illustration Here</Text>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#F8F152', 
        WebkitTextStrokeWidth: '2px', // 사용하려면 Webkit 접두사를 추가
        WebkitTextStrokeColor: '#000000',
        fontFamily: 'Agbalumo', 
        fontSize: '4rem', 
        fontWeight: '450', 
    },
    subtitle: {
        color: 'rgba(85, 85, 85, 0.87)', 
        fontFamily: 'Jua', 
        fontSize: '2.4rem', 
        fontStyle: 'normal', 
        fontWeight: '200', 
    },
    body: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#D3D3D3',
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonSide: {
        backgroundColor: '#D3D3D3',
        width: '25.62vw',
        height: '63.48vh',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    footer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerText: {
        color: '#6A6A39',
    },
});

export default Main;