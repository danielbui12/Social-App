import styled from 'styled-components';

export const Container = styled.View`
    flex: 1;
    padding-vertical: 20px;
    background-color: #fff;
    align-items: center;
`
export const Card = styled.TouchableOpacity`
    width: 100%;
`
export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: space-between;
`
export const UserImgWrapper = styled.View`
    padding-vertical: 16px;
`
export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 25;
`
export const TextSection = styled.View`
    flex-direction: column;
    justify-content: center;
    padding: 16px;
    padding-left: 0;
    margin-left: 10px;
    width: 300px;
    border-bottom-width: 1px;
    border-bottom-color: #eee; 
`
export const UserInfoText = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 6px;
    
`
export const UserName = styled.Text`
    font-size: 15px;
    font-weight: bold;

`
export const PostTime = styled.Text`
    font-size: 13px;
    opacity: 0.5;
`
export const MessageText = styled.Text`
    font-size: 14px;
    opacity: 0.8;
`
export const UserImg1 = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 25;
`

export const UserStatusWrapper = styled.View`
    flex-direction: column;
    margin-left: 16px;
`
export const HandlerUserMedia = styled.View`
    flex-direction: row;
    justify-content: space-between; 
    width: 70px;
    marginRight: 16px;
`
export const ChatBar = styled.TextInput`
    width: 90%;
    justify-content: flex-start;
    border-radius: 20px;
    background-color: #ececec;
    bottom: 0;
    color: grey;
    padding: 10px;
    height: 40px;
    margin-right: 8px;
`

export const UserChatWrapper = styled.View`
    border-radius: 20px;
    background-color: "#3086fb";
    margin-right: 10px;
    align-self: flex-end;
    margin-bottom: 20px;
    max-width: 80%
`

export const UserChatText = styled.View`
    font-size:16px;
    font-weight: 800;
    color: #fff;
    padding: 8px;
`

export const User2ChatWrapper = styled.View`
    border-radius: 20px;
    background-color: "#aaaaae";
    margin-right: 10px;
    align-self: flex-end;
    margin-bottom: 20px;
    max-width: 80%
`

export const User2ChatText = styled.View`

`