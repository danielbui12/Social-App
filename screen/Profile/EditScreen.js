import React, { useState } from 'react'
import { 
    TouchableOpacity, 
    Text, 
    View, 
    KeyboardAvoidingView, 
    Platform, 
    Keyboard,
    ScrollView,
    Alert
} from 'react-native'
import FormInput from '../../Components/FormInput'
import FormButton from '../../Components/FormButton'
import { UserImg } from '../styled/styledProfile'
import { SCREEN_WIDTH } from '../../ultis/Dimentions'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'

const EditScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [bio, setBio] = useState('')
    const [history, setHistory] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState('')

    const takePhoto = async () => {
      await Permissions.askAsync(Permissions.CAMERA)
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect:[3,3],
        quality: 1,
      })
  
      if(!result.cancelled) {
        setImage(result.uri)
      }
    }

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [3, 3],
        quality: 1,
      })
  
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
  
      // console.log(result)
    }

    const changeImg = () => {
        Alert.alert("Choose", "", [
            {
                text: "Choose from library",
                onPress: pickImage
            },
            {
                text: "Take a photo",
                onPress: takePhoto
            },
            {
                text: 'Cancle'
            }
        ])
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{width: SCREEN_WIDTH * 0.9, alignSelf: 'center', flex: 1}}
            >
                <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}>
                <TouchableOpacity onPress={changeImg}>
                    <UserImg source={{uri: image}}/>
                </TouchableOpacity>
                    <FormInput 
                        iconName={"user"}
                        labelVal={firstName} 
                        placeholder="first name"
                        onChangeText={(text) => setFirstName(text)}
                    />
                    <FormInput 
                        iconName={"user"}
                        labelVal={lastName} 
                        placeholder="last name"
                        onChangeText={(text) => setLastName(text)}
                    />
                    <FormInput
                        iconName={"phone"}
                        labelVal={phone} 
                        placeholder="phone number"
                        onChangeText={(text) => setPhone(text)}
                        keyboardType={"numeric"}
                    />
                    <FormInput 
                        iconName={"user"}
                        labelVal={history}
                        placeholder="about you"
                        onChangeText={(text) => setHistory(text)}
                    />
                    <FormInput 
                        iconName={"user"}
                        labelVal={city} 
                        placeholder="city"
                        onChangeText={(text) => setCity(text)}
                    />
                    <FormInput 
                        iconName={"user"}
                        placeholder="country"
                        labelVal={country} 
                        onChangeText={(text) => setCountry(text)}
                    />
                    


                    <FormButton 
                        buttonTitle="Update"
                        onPress={() => {}}
                    />
                </TouchableOpacity>
            </View>
            <View style={{height: 100}}/>
        </ScrollView>
        
    )
}

export default EditScreen
