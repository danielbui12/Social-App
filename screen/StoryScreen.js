import React, { useState, useEffect } from "react";
import Post from "../Components/Post";
import { FlatList, TextInput, Platform, Alert } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import { 
  Avartar, 
  Container, 
  TextStatus, 
  UserStatus, 
  TextStatusWrapper, 
  AddImage, 
} from "./styled/styledComponent";
import { auth, db } from '../Constant/firebase'
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
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const postStt = () => {

  }

  return (
    <>
      {image && <AddImage source={{ uri: image }}/>}
      <TextInput 
        placeholder="What's on your mind ?" 
        value={userStt} 
        onChangeText={(text) => setUserStt(text)}
        autoCorrect={false}
        style={{fontSize: 20, flex: 1, alignSelf: 'center'}}
      />
      <ActionButton buttonColor="rgba(231,76,60,1)">
        <ActionButton.Item buttonColor='#9b59b6' title="Post Status" onPress={postStt}>
          <Icon name="md-create" style={styles} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#3498db' title="Add Image" onPress={pickImage}>
          <Icon name="md-image" style={styles} />
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
        />
    </Stack.Navigator>
  )
}


export default StoryScreen;
