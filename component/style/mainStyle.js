import { StyleSheet } from 'react-native';

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

export default styles;