import React, { useState, useContext } from 'react'
import { 
    TouchableOpacity,
    View,
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
import { auth, db, storage } from '../../Constant/firebase'
import { AuthContext } from '../../Navigation/AuthProvider'

const EditScreen = () => {
    const [image, setImage] = useState(null)
    const {userData, setUserData} = useContext(AuthContext)
    


    const handleUpdate = async () => {
        const imageUrl = await uploadImg()
        Alert.alert(imageUrl)
        db.collection('users').doc(auth.currentUser.uid).update({
                fname: userData.fname,
                lname: userData.lname,
                userImg: imageUrl ? imageUrl : userData.userImg,
                phone: userData.phone,
                history: userData.history,
                city: userData.city,
                country: userData.country,
          }).then(() => {
            Alert.alert("Successful!", "Your profile has been uploaded!")
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
          await storage.ref().child(`${auth.currentUser.uid}/avartar/${fileName}`).put(blob)
  
          var ref = storage.ref().child(`${auth.currentUser.uid}/avartar/${fileName}`).put(blob)
          newImageUri = await ref.snapshot.ref.getDownloadURL()
          Alert.alert(newImageUri)
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
                text: 'Cancel'
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
                        <UserImg source={{uri : image ?  image : userData.userImg}}/>
                    </TouchableOpacity>
                    <UserName>{userData ? userData.fname : ""} {userData ? userData.lname : ""}</UserName>
                    <FormInput 
                        iconName={"user"}
                        labelVal={userData ? userData.fname : ""} 
                        placeholder="first name"
                        onChangeText={(text) => setUserData({...userData, fname: text})}
                    />
                    <FormInput 
                        iconName={"user"}
                        labelVal={userData ? userData.lname : ""} 
                        placeholder="last name"
                        onChangeText={(text) => setUserData({...userData, lname: text})}
                    />
                    <FormInput
                        iconName={"phone"}
                        labelVal={userData ? userData.phone : ""} 
                        placeholder="phone number"
                        onChangeText={(text) => setUserData({...userData, phone: text})}
                        keyboardType="numeric"
                    />
                    <FormInput 
                        iconName={"form"}
                        labelVal={userData? userData.history : ""}
                        placeholder="about you"
                        onChangeText={(text) => setUserData({...userData, history: text})}
                    />
                    <FormInput 
                        iconName={"home"}
                        labelVal={userData ? userData.city : ""} 
                        placeholder="city"
                        onChangeText={(text) => setUserData({...userData, city: text})}
                    />
                    <FormInput 
                        iconName={"earth"}
                        placeholder="country"
                        labelVal={userData ? userData.country : ""} 
                        onChangeText={(text) => setUserData({...userData, country: text})}
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
