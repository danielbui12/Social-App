import React from 'react'
import { Ionicons } from 'react-native-vector-icons'
import { Avartar, TextStatus, TextStatusWrapper, UserStatus } from '../screen/styled/styledHome'

const CustomStatusBar = ({ imageUrl, onMoving }) => {
    return (
        <UserStatus>
            <Avartar source={{ uri: imageUrl }} />
                <TextStatusWrapper onPress={onMoving}>
                    <TextStatus>What's on your mind ... ?</TextStatus>
                    <Ionicons name="send" size={24} color="#346eeb"/>
                </TextStatusWrapper>
        </UserStatus>
    )
}

export default CustomStatusBar


