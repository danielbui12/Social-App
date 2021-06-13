import styled from 'styled-components';

export const UserImg = styled.Image`
    width: 150px;
    height:150px;
    border-radius: 80;
    margin-vertical: 17px; 
    align-self: center;
`

export const UserName = styled.Text`
    font-size: 20px;
    font-weight: bold;
    align-self: center;
`

export const UserHistory = styled.Text`
    font-size: 20px;
    align-self: center;
`
export const UserButtonWrapper = styled.View`
    flex-direction: row;
    align-self: center;
`
export const ProfileButton = styled.TouchableOpacity`
    width: 100px; 
    height: 50px; 
    margin-vertical: 24px;
    margin-horizontal: 30px;
    border-color: #346eeb;
    border-width: 2px;
    align-items:center;
    justify-content: center;
`
export const ButtonText = styled.Text`
    font-size: 16px;
    color: #346eeb;
    font-weight: 500
`
export const UserInfoWrapper = styled.View`
    flex-direction: row;
    margin-top: 16px;
    justify-content: space-around;
    margin-bottom: 24px;
`
export const UserInfoItem = styled.View`
    flex-direction: column;
    align-items: center;
`
export const Number = styled.Text`
    font-size: 20px;
    font-weight: bold;
`

export const Content = styled.Text`
    font-size: 14px;
    opacity: 0.5;
`