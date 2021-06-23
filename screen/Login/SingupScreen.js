import React, { useState } from 'react'
import { TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import FormInput from '../../Components/FormInput'
import { auth, db } from '../../Constant/firebase'

export const defaultImg = "https://firebasestorage.googleapis.com/v0/b/storageuser-41682.appspot.com/o/default-avartar.png?alt=media&token=0906739a-83ae-40d9-80a6-b3e345dd03e6"

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [phone, setPhone] = useState("")

    const register = () =>{ 
        auth.createUserWithEmailAndPassword(email, pass).then(() => {
            db.collection('users').doc(auth.currentUser.uid).set({
                fname: fname,
                lname: lname,
                phone: phone,
                userImg: defaultImg,
                history: "",
                city: '',
                country: '',
            })
        })
    }

    return (
        <KeyboardAvoidingView behavior={ Platform.OS == 'ios' ? 'padding' :"height"} style={styles.container}>
                <Text style={styles.text}>Create an account</Text>
                <FormInput
                    iconName='user'
                    labelVal={email}
                    placeholder='Email'
                    onChangeText={userEmail => setEmail(userEmail)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                />

                <FormInput 
                    iconName='lock'
                    labelVal={pass}
                    placeholder='Password'
                    onChangeText={userPass => setPass(userPass)}
                    secureTextEntry={true}
                />

                <FormInput
                    iconName='user'
                    labelVal={fname}
                    placeholder='first name'
                    onChangeText={name => setFName(name)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <FormInput
                    iconName='user'
                    labelVal={lname}
                    placeholder='last name'
                    onChangeText={name => setLName(name)}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

<               FormInput
                    iconName='phone'
                    labelVal={phone}
                    placeholder='phone'
                    onChangeText={phone => setPhone(phone)}
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="numeric"
                />
                
                

                <FormButton 
                    buttonTitle="Register"
                    onPress={register}
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