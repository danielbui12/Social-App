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
    padding-bottom: 8px;
    padding-left: 16px;

`
export const UserImg = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 50;
`

export const UserText = styled.View`
    flex-direction: column;
    justify-content: center;
    margin: 8px;
`
export const UserName = styled.Text`
    font-size: 14px;
    font-weight: bold;
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

export const PostImg = styled.Image`
    width: 100%;
    height: 250px;
    margin-top: 16px;
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
    width: 90%;
    margin-vertical: 24px;
    background-color: #eee;
`
export const Avartar = styled.Image`
    width: 50px;
    height: 50px;
    margin: 8px;
    border-radius: 50;
    justify-content: flex-start;
`
export const TextStatusWrapper = styled.TouchableOpacity`
    justify-content: center;
    margin-left: 20%;
`

export const TextStatus = styled.Text`
    font-size: 15px;
    opacity: 0.3;
    font-weight: bold;
`
export const StatusWrapper = styled.View`
    flex: 1;
    background-color: #03a9f4;
`

export const buttonWrapper = styled.View`
    flex-direction: row;
`