import { StyleSheet } from 'react-native';

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

export default styles;