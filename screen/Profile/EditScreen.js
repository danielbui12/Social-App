import React, { useState } from 'react'
import { TouchableOpacity
, Text, View, KeyboardAvoidingView, Platform, Keyboard } from 'react-native'
import FormInput from '../../Components/FormInput'
import FormButton from '../../Components/FormButton'
import { UserImg } from '../styled/styledProfile'
import { SCREEN_WIDTH } from '../../ultis/Dimentions'

const EditScreen = () => {
    const [firstName, setFirstName] = useState('Tung')
    const [lastName, setLastName] = useState('Bui Huy')
    const [email, setEmail] = useState('huybi')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')

    return (
            <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"} style={{width: SCREEN_WIDTH * 0.9, alignSelf: 'center', flex: 1}}>
                <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}>
                    <UserImg source={require("../../images/default-avartar.png")}/>
                    <FormInput 
                        iconName={"user"}
                        labelVal={firstName} 
                        onChangeText={(text) => setFirstName(text)}
                    />
                    <FormInput 
                        iconName={"user"}
                        labelVal={lastName} 
                        onChangeText={(text) => setLastName(text)}
                    />
                    <FormInput 
                        iconName={"user"}
                        labelVal={email} 
                        onChangeText={(text) => setEmail(text)}
                        keyboardType={"email-address"}
                    />
                    <FormInput
                        iconName={"phone"}
                        labelVal={phone} 
                        onChangeText={(text) => setPhone(text)}
                        keyboardType={"numeric"}
                    />
                    <FormInput 
                        iconName={"user"}
                        labelVal={bio} 
                        onChangeText={(text) => setBio(text)}
                        keyboardType={"email-address"}
                    />

                    <FormButton 
                        buttonTitle="Update"
                        onPress={() => {}}
                    />
                </TouchableOpacity>
            </KeyboardAvoidingView>
            
        
    )
}

export default EditScreen
