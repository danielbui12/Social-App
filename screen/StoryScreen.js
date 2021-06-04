import React, { useState, useEffect } from "react";
import Post from "../Components/Post";
import { FlatList, TextInput, Platform, Alert, Text, ActivityIndicator, KeyboardAvoidingView } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { 
  Avartar, 
  Container, 
  TextStatus, 
  UserStatus, 
  TextStatusWrapper, 
  AddImage, 
  StatusWrapper
} from "./styled/styledHome";
import { auth, fireStore } from '../Constant/firebase'
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import * as ImagePicker from 'expo-image-picker';

const Stack = createStackNavigator()


const Home = ({ navigation }) => {
  const User = [
    {
      id: 0,
      name: "Jenny Doe",
      active: "4 hours ago",
      caption: "Hi there !",
      img: 'none',
      liked: false,
      likes: "0",
      comment: "4"
    },
    {
      id: 1,
      name: "Martin John",
      active: "1 hours ago",
      caption: "Hi friends!",
      img: require("../images/1.jpg"),
      liked: false,
      likes: "2",
      comment: "0"
    },
    {
      id: 2,
      name: "Denis Bucu",
      active: "3 hours ago",
      caption: "Hello mother f*cker!",
      img: 'none',
      liked: true,
      likes: "0",
      comment: "0"
    },
  ];

  return (
    <Container>
      <UserStatus>
        <Avartar source={{uri: auth?.currentUser?.photoURL}} />
        <TextStatusWrapper onPress={() => navigation.navigate("Post")}>
          <TextStatus>What's on your mind ... ?</TextStatus>
        </TextStatusWrapper>
      </UserStatus>
      <FlatList
        data={User}
        renderItem={({ item }) => <Post item={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        style={{flexGrow: 0, width: "90%"}}
      />
    </Container>
  )
};


const PostStatusScreen = () => {
  const [userStt, setUserStt] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUpLoading] = useState(false)

  let styles = {
    fontSize: 20,
    height: 22,
    color: 'white',
  }

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  }

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

  const postStt = async () => {
    const uploadUri = image
    let fileName = uploadUri.substring(uploadUri.lastIndexOf("/") + 1);
    const extension = 'png'
    const name = fileName.split(".").slice(0,-1).join(".");
    fileName = name + Date.now() + "." + extension;
    // console.log(fileName);
    
    setUpLoading(true)
    
    var metadata = {
      contentType: 'image/png'
    }

    const task = fireStore.ref(fileName).put(uploadUri, metadata)
    
    try {
      await task
      setUpLoading(false)
    } catch(err) {
      console.log(err)
    }

    setImage(null)
    setUserStt(null)
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
        <ActionButton.Item buttonColor='#9b59b6' title="Post Status" onPress={postStt}>
          <Icon name="md-create" style={styles} />
        </ActionButton.Item>
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


const StoryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen 
        name="Post" 
        component={PostStatusScreen}
        options={{
          headerBackTitleVisible: false
        }}
        />
    </Stack.Navigator>
  )
}


export default StoryScreen;