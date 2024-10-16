import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import styles from '../component/style/mainStyle';
import MyPage from '../component/screens/MyPage'; 
import DrawingCanvas from '../component/screens/DrawingCanvas'; 
import TextInputScreen from '../component/screens/TextInputScreen'; 
// import Title  from '../assets/Title.svg';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {/* <Title /> */}
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
                        onPress={() => navigation.navigate('TextInputScreen')}> 
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
