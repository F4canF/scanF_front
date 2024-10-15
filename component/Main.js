import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MyPage from '../component/screens/MyPage'; // 새로운 페이지 임포트
import DrawingCanvas from '../component/screens/DrawingCanvas'; // 새로운 페이지 임포트
import TextInputScreen from '../component/screens/TextInput'; // 이름 변경
import Title from '../assets/title.svg';

const Stack = createStackNavigator();

const MainPage = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Title />
                <Text style={styles.subtitle}>더 즐겁게, 더 재밌게</Text>
            </View>

            <View style={styles.body}>
                <TouchableOpacity
                    style={styles.buttonSide}
                    onPress={() => navigation.navigate('MyPage')} // 문자열로 변경
                >
                    <Text style={styles.buttonText}>My-page</Text>
                </TouchableOpacity>
                <View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('DrawingCanvas')} // 문자열로 변경
                    >
                        <Text style={styles.buttonText}>그림배우기</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('TextInputScreen')}> {/* 이름 변경 */}
                        <Text style={styles.buttonText}>글자학습 및 교정</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Main">
                <Stack.Screen name="Main" component={MainPage} />
                <Stack.Screen name="MyPage" component={MyPage} />
                <Stack.Screen name="DrawingCanvas" component={DrawingCanvas} />
                <Stack.Screen name="TextInput" component={TextInputScreen} />
            </Stack.Navigator>
        </NavigationContainer>
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
    subtitle: {
        color: 'rgba(85, 85, 85, 0.87)', 
        fontFamily: 'Jua', 
        fontSize: 24,
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
        width: '25%',
        height: '63%',
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
