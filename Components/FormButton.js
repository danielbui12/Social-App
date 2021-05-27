import React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../ultis/Dimentions'

export default FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <TouchableOpacity style={styles.containButton} {...rest}>
            <Text style={styles.textButton}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containButton: {
        marginTop: 10,
        width: '100%',
        height: SCREEN_HEIGHT/15,
        backgroundColor: '#2e64e5',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        // fontFamily
    }
})