import React from 'react'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../ultis/Dimentions'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const SocialButton = ({ buttonTitle, buttonName, color, backgroundColor, ...rest }) => {
    let bgColor = backgroundColor
    return (
        <TouchableOpacity style={[styles.containButton, {backgroundColor: bgColor}]} {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={buttonName} style={styles.icon} size={22} color={color}/>
            </View>

            <View style={styles.btnWrapper}>
                <Text style={[styles.textButton, { color: color }]}>{buttonTitle}</Text>
            </View>

        </TouchableOpacity>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    containButton: {
        marginTop: 10,
        width: '100%',
        height: SCREEN_HEIGHT/15,
        backgroundColor: '#2e64e5',
        padding: 10,
        borderRadius: 3,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    textButton: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
        // fontFamily
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        fontWeight: 'bold'
    },
    btnWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})