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
                    backgroundColor: '#fff',    
                    image: <Image source={require('../images/1.jpg')} />,
                    title: 'Connect to the World',
                    subtitle: 'A New Way To Connect To The World',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../images/1.jpg')} />,
                    title: 'Share your favorite',
                    subtitle: 'Share Your Thoughts With Similar Kind Of People',
                },
                {
                    backgroundColor: '#fff',
                    image: <Image source={require('../images/1.jpg')} />,
                    title: 'Become the Start',
                    subtitle: 'Let The Spot Light Capture You',
                },
            ]}
        />          
    )
}