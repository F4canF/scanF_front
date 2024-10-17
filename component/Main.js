import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import styles from '../component/style/mainStyle'; 
import MyPage from '../component/screens/MyPage';
import DrawingCanvas from '../component/screens/DrawingCanvas';
import TextInputScreen from '../component/screens/TextInputScreen';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* 헤더 섹션 */}
            <View style={styles.header}>
                <Text style={styles.title}>scanF</Text>
                <Text style={styles.subtitle}>더 즐겁게, 더 재밌게</Text>
            </View>

            {/* 버튼(구름 모양) 섹션 */}
            <View style={styles.body}>
                <TouchableOpacity
                    style={styles.cloudButton}
                    onPress={() => navigation.navigate('MyPage')}>
                    <Text style={styles.buttonText}>회원페이지</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cloudButton}
                    onPress={() => navigation.navigate('DrawingCanvas')}>
                    <Text style={styles.buttonText}>그림 배우기</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.cloudButton}
                    onPress={() => navigation.navigate('TextInputScreen')}>
                    <Text style={styles.buttonText}>글자학습 및 교정</Text>
                </TouchableOpacity>
            </View>

            {/* 하단의 사람 이미지 */}
            {/* <View style={styles.footer}>
                <Image source={require('../assets/readingPerson.png')} style={styles.personImage} />
            </View> */}
        </View>
    );
};

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MyPage" component={MyPage} />
                <Stack.Screen name="DrawingCanvas" component={DrawingCanvas} />
                <Stack.Screen name="TextInputScreen" component={TextInputScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Main;
