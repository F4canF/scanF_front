import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5dc',  // 연한 노란색 배경
        justifyContent: 'space-between',
    },
    header: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#ffdd57', // 노란색 글자
    },
    subtitle: {
        fontSize: 16,
        color: '#808080', // 회색 글자
    },
    body: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cloudButton: {
        backgroundColor: '#ffffff',  // 구름처럼 흰색 배경
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 15,
        borderRadius: 50,
        shadowColor: '#000', // 구름의 그림자
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        width: 250,
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
        color: '#000000', // 검은색 글자
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom: 30,
    },
    personImage: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
});

export default styles;
