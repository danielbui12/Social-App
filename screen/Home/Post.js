import React, { useLayoutEffect, useState, useEffect } from 'react'
import { TextInput, Platform, Alert, Text, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import {
  AddImage, 
  StatusWrapper,
  PostButton,
  PostText
} from "../styled/styledHome"
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';
import * as firebase from 'firebase'


export default PostScreen = ({ navigation }) => {
    const [userStt, setUserStt] = useState("");
    const [image, setImage] = useState(null);
    const [uploading, setUpLoading] = useState(false)
  
    let styles = {
      fontSize: 20,
      height: 22,
      color: 'white',
    }
    
    useLayoutEffect(() => {
      navigation.setOptions({
        headerBackTitleVisible: false,
        headerRight: () => (
          <PostButton onPress={postStt}>
            <PostText>Post</PostText>
          </PostButton>
        )
      })
    }, [navigation])

    useEffect(() => {
      (async () => {
        if (Platform.OS !== 'web') {
          const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
          if (status !== 'granted') {
            Alert.alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      })();
    }, []);
    
    const takePhoto = async () => {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect:[4,3],
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
        aspect: [4, 3],
        quality: 1,
      })
  
  
      if (!result.cancelled) {
        setImage(result.uri);
      }
  
      // console.log(result)
    }
  
    const postStt = async () => {
      if(!image && userStt.trim() == null)  return
    
      const uploadUri = image
      let fileName = uploadUri.substring(uploadUri.lastIndexOf("/") + 1)
      const extension = fileName.split(".").pop() //duoi file
      const name = fileName.split(".").slice(0,-1).join(".")
      fileName = name + Date.now() + "." + extension

      let newImageUri

      try {
        const response = await fetch(image)
        const blob = await response.blob()
      
        await firebase.default.storage().ref().child(fileName).put(blob)
        var ref = firebase.default.storage().ref().child(fileName).put(blob)
      
        newImageUri = await ref.snapshot.ref.getDownloadURL()
        setUploading(false)
        setImage(null)
      } catch (error) {
        console.log(error)    
      }
    }
  
    return (
      <>
        <KeyboardAvoidingView behavior={"height"} style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          {image != null  && <AddImage source={{ uri: image }}/>}
          <TextInput 
            placeholder="What's on your mind ?" 
            value={userStt} 
            onChangeText={(text) => setUserStt(text)}
            autoCorrect={false}
            style={{fontSize: 20, flex: 1, alignSelf: 'center'}}
          />
          {uploading ? (
            <StatusWrapper>
              <Text>Uploading ... !</Text>
              <ActivityIndicator size={"large"} color="#0000ff"/>
            </StatusWrapper>
          ): <></>
          }
        </KeyboardAvoidingView>
        <ActionButton buttonColor="rgba(231,76,60,1)">
          <ActionButton.Item buttonColor='#3498db' title="Add Image" onPress={pickImage}>
            <Icon name="md-image" style={styles} />
          </ActionButton.Item>
          <ActionButton.Item buttonColor='#3415db' title="Take a photo" onPress={takePhoto}>
            <Icon name="md-camera" style={styles} />
          </ActionButton.Item>
        </ActionButton> 
      </>
    )
  }