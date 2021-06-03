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