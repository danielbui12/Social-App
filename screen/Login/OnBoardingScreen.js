import React from 'react'
import { TouchableOpacity, Text, Image } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({ ...props }) => {
    return (
        <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
            <Text style={{fontSize: 16}}>Done</Text>
        </TouchableOpacity>
    )
}

export default function OnBoardScreen({ navigation }) {
    return (
        <Onboarding
            DoneButtonComponent={Done}
            onSkip={() => navigation.replace("Login")}
            onDone={() => navigation.replace("Login")}
            pages={[
                {
                    backgroundColor: '#00bfa5',    
                    image: <Image source={require('../../images/onboarding-img1.png')} />,
                    title: 'Connect to the World',
                    subtitle: 'A New Way To Connect To The World',
                },
                {
                    backgroundColor: '#6683af',
                    image: <Image source={require('../../images/onboarding-img2.png')} />,
                    title: 'Share your favorite',
                    subtitle: 'Share Your Thoughts With Similar Kind Of People',
                },
                {
                    backgroundColor: '#825790',
                    image: <Image source={require('../../images/onboarding-img3.png')} />,
                    title: 'Become the Start',
                    subtitle: 'Let The Spot Light Capture You',
                },
            ]}
        />          
    )
}