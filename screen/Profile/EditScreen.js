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
import { UserImg, UserName } from '../styled/styledProfile'
import { SCREEN_WIDTH } from '../../ultis/Dimentions'
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'
import { auth, db } from '../../Constant/firebase'

const EditScreen = () => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [history, setHistory] = useState('')
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [image, setImage] = useState(null)
    const [userData, setUserData] = useState(null)
    

    const getUser = async () => {
        await db
        .collection("users")
        .doc(auth.currentUser.uid)
        .get().then(snapshot => setUserData(snapshot.data()))
        .catch(err => console.log(err))
        .then(() => {
            const { fname, lname, history, userImg, phone, country, city } = userData
            setFirstName(fname)
            setLastName(lname)
            setPhone(phone)
            setCountry(country)
            setCity(city)
            setHistory(history)
            setImage(userImg)
        })
    }

    const handleUpdate = async () => {
        const imageUrl = await uploadImg()
        
        setUpLoading(true)

        db.collection('users').doc(auth.currentUser.uid).update({
                fname: firstName,
                lname: lastName,
                userImg: imageUrl,
                phone: phone,
                history: history,
                city: city,
                country: country,
          }).then(() => {
            Alert.alert("Successful!", "Your profile has been uploaded!")
            setImage(null)
            setUpLoading(false)
          }).catch(err => Alert.alert("Something went wrong!"))
    }

    const uploadImg = async () => {
      if(!image) return null

      let fileName = image.substring(image.lastIndexOf("/") + 1);
      const extension = fileName.split(".").pop(); //duoi file
      const name = fileName.split(".").slice(0,-1).join(".");
      fileName = name + Date.now() + "." + extension;
  
      let newImageUri
      try {
        const response = await fetch(image)
        const blob = await response.blob()
        await storage.ref().child(`${auth.currentUser.uid}/posts/${fileName}`).put(blob)

        var ref = storage.ref().child(`${auth.currentUser.uid}/posts/${fileName}`).put(blob)
        newImageUri = await ref.snapshot.ref.getDownloadURL()
        return newImageUri
      } catch(err) {
        console.log(err)
        return null
      }
    }


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

    useEffect(() => {
        getUser()
    }, [])

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View
                style={{width: SCREEN_WIDTH * 0.9, alignSelf: 'center', flex: 1}}
            >
                <TouchableOpacity activeOpacity={1} onPress={Keyboard.dismiss}>
                    <TouchableOpacity onPress={changeImg}>
                        <UserImg source={{uri: image}}/>
                    </TouchableOpacity>
                    <UserName>{firstName += lastName}</UserName>
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
                        iconName={"City"}
                        labelVal={city} 
                        placeholder="city"
                        onChangeText={(text) => setCity(text)}
                    />
                    <FormInput 
                        iconName={"Country"}
                        placeholder="country"
                        labelVal={country} 
                        onChangeText={(text) => setCountry(text)}
                    />
                    


                    <FormButton 
                        buttonTitle="Update"
                        onPress={handleUpdate}
                    />
                </TouchableOpacity>
            </View>
            <View style={{height: 100}}/>
        </ScrollView>
        
    )
}

export default EditScreen
