import React, { useContext } from 'react'
import { View, Button, SafeAreaView, ScrollView } from 'react-native'
import {AuthContext} from '../Navigation/AuthProvider'


function SettingScreen() {

    const { logOut } = useContext(AuthContext)

    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <ScrollView>
                <Button title="Log out" onPress={() => logOut()}/>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SettingScreen