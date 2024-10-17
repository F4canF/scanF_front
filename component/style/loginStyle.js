import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        width: '80%',
        padding: 15,
        borderColor: '#DDD',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 10,
    },
    loginButton: {
        backgroundColor: '#FBC02D',
        padding: 15,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
    },
    loginText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});


export default styles;