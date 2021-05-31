import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import FormInput from '../Components/FormInput'
import { auth } from '../Constant/firebase'

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [name, setName] = useState('')

    const register = (email, pass) =>{ 
        auth.createUserWithEmailAndPassword(email, pass)
        .then(authUser => {
            authUser.user.updateProfile({
                displayName: name,
                photoURL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmedium.com%2Finsider-coub%2Fdefault-avatars-4275c0e41f62&psig=AOvVaw0ZYOy30Kedpb0lAO2LhR2a&ust=1622197977911000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKCwnM7U6fACFQAAAAAdAAAAABAD",
            })
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <KeyboardAvoidingView behavior={"padding"} style={styles.container}>
            <Text style={styles.text}>Create an account</Text>

            <FormInput
                labelVal={name}
                onChangeText={name => setName(name)}
                placeholder='Full name'
                iconName='user'
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput
                labelVal={email}
                onChangeText={userEmail => setEmail(userEmail)}
                placeholder='Email'
                iconName='user'
                keyBoardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
            />

            <FormInput 
                labelVal={pass}
                onChangeText={userPass => setPass(userPass)}
                placeholder='Password'
                iconName='lock'
                secureTextEntry={true}
            />

            <FormButton 
                buttonTitle="Register"
                onPress={() => register(email, pass)}
            />

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login')}>
                <Text style={styles.navButtonText}>Have an account? Sign In!</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafd',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover'
    },
    text: {
        // fontFamily
        fontSize: 28,
        fontWeight: '500',
        color: '#2e64e5',
        top: -20
    },
    navButton: {
        marginTop: 15
    },
    forgotButton: {
        marginVertical: 35
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        // fontFamily
    },

})