import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#FDD835',
        marginBottom: 40,
        fontFamily: 'Cursive', // 적절한 폰트로 대체 필요
    },
    inputContainer: {
        width: '80%',
    },
    input: {
        backgroundColor: '#FFF9C4',
        borderRadius: 20,
        padding: 15,
        marginBottom: 20,
        fontSize: 16,
        color: '#333333',
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 20,
    },
    link: {
        color: '#999999',
        textDecorationLine: 'underline',
        fontSize: 14,
    },
    loginButton: {
        backgroundColor: '#FBC02D',
        padding: 15,
        borderRadius: 25,
        width: '80%',
        alignItems: 'center',
        marginBottom: 20,
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    bottomText: {
        color: '#999999',
        fontSize: 14,
    },
    registerLink: {
        color: '#333333',
        textDecorationLine: 'underline',
    },
});

export default styles;