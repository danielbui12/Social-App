import styled from 'styled-components';

export const Container = styled.View`
    background-color: #fff;
    flex: 1;
    align-items: center;
`

export const Card = styled.View`
    width: 100%;
    background-color: #f8f8f8;
    margin-bottom: 10px;
    border-radius: 10px;
`
export const UserInfo = styled.View`
    flex-direction: row;
    justify-content: flex-start;
    padding-vertical: 8px;
    padding-left: 16px;

`
export const UserImg = styled.Image`
    width: 45px;
    height: 45px;
    border-radius: 50;
    margin-top: 10px;
`

export const UserText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin: 8px;
`
export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
    padding: 5px;
`

export const UserActive = styled.Text`
    font-size: 12px;
    opacity: 0.6;
`

export const Caption = styled.Text`
    font-size: 14px;
    padding-left: 16px;
    padding-right: 16px;
`

export const Divided = styled.View`
    border: 1px solid #333;
    border-bottom-width: 1px;
    width: 90%;
    align-self: center;
    margin-top: 16px;
    opacity: 0.3;
`

export const InteractionWrapper = styled.View`
    flex-direction: row;
    justify-content: space-evenly;
    padding: 16px;
`

export const Interaction = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: center;
    border-radius: 8px;
    padding: 2px 5px;
`

export const InteractionText = styled.Text`
    font-size:12px;
    font-weight: bold;
    color: #333;
    margin-top: 5px;
    margin-left: 5px;
`

export const UserStatus = styled.View`
    flex-direction: row;
    width: 100%;
    margin-vertical: 24px;
    background-color: #fff;
`
export const Avartar = styled.Image`
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50;
    justify-content: flex-start;
`
export const TextStatusWrapper = styled.TouchableOpacity`
    flex-direction: row;
    align-self: center;
    align-items:center;
    justify-content: center;
    border-width: 1px;
    border-radius: 20;
    height: 70%;
    width: 80%;
    border-color: #eee;
`

export const TextStatus = styled.Text`
    font-size: 15px;
    opacity: 0.3;
    font-weight: bold;
    margin-horizontal: 32px;
    align-self: center;
`
export const AddImage = styled.Image`
    flex:1;
    width: 100%;
    height: 500;
    margin-vertical: 16px;
    align-self: center;
`

export const PostImg = styled.Image`
    width: 100%;
    height: 350px;
    margin-top: 16px;
`

export const ButtonWrapper = styled.Text`
    font-size: 18px;
    margin-right: 15px;
    opacity: 0.8;
`

export const StatusWrapper = styled.View`
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
`
export const CustomInput = styled.TextInput`
    font-size: 20px;
    flex: 1; 
    align-self: center; 
    width: 80%;
    padding-bottom: 20px;
    text-align: center;
`