import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../ultis/Dimentions'
import AntDesign from 'react-native-vector-icons/AntDesign'

export default FormButton = ({ iconName, placeholder, labelVal, ...rest }) => {
    return (
        <View style={styles.containInput}>
            <View style={styles.icon}>
                <AntDesign name={iconName} size={25} color='#666'/>
            </View>
            <TextInput
                style={styles.input}
                numberOfLines={1} 
                value={labelVal}
                placeholder={placeholder}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    containInput: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: SCREEN_HEIGHT/15,
        borderColor: '#ccc',
        borderRadius: 3,
        borderWidth: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    icon: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        // fontFamily
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width: SCREEN_WIDTH /1.5,
        height: SCREEN_HEIGHT/15,
        fontSize: 16,
        borderRadius: 8,
        borderWidth: 1
    }
})