import React from "react";
import { View, ScrollView } from "react-native";
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import { SCREEN_WIDTH } from '../ultis/Dimentions'

export default LoadingProfile = () => {
    return (
        <ScrollView style={{flex:1}} contentContainerStyle={{alignItems: 'center'}}>
            <View style={{marginTop: 50}}/>
            <SkeletonPlaceholder>
                <View style={{justifyContent: "center", alignItems:'center', marginTop: 16, marginBottom: 40}}>
                    <View style={{width: 120, height:120, borderRadius: 60, marginBottom: 24 }}/>
                    <View style={{flexDirection: "row", marginTop: 8}}>
                        <View style={{width: 80, height: 40, marginRight: 24}}/>
                        <View style={{width: 80, height: 40}}/>
                    </View>
                </View>
                <View style={{ flexDirection: "row", alignItems: 'center'}}>
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                        <View
                            style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                        />
                    </View>
                </View>
                <View>
                    <View style={{width: SCREEN_WIDTH*0.9, height: 20, marginTop: 10}} />
                    <View style={{width: SCREEN_WIDTH*0.9, height: 20, marginTop: 6}} />
                    <View style={{width: SCREEN_WIDTH*0.9, height: 350, marginTop: 6}} />
                </View>
            </SkeletonPlaceholder>

            <View style={{marginTop: 20}}/>
            <SkeletonPlaceholder>
                <View style={{ flexDirection: "row", alignItems: 'center'}}>
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                    <View
                        style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                    />
                    </View>
                </View>
                <View>
                    <View style={{width: SCREEN_WIDTH*0.9, height: 20, marginTop: 10}} />
                    <View style={{width: SCREEN_WIDTH*0.9, height: 20, marginTop: 6}} />
                    <View style={{width: SCREEN_WIDTH*0.9, height: 350, marginTop: 6}} />
                </View>
            </SkeletonPlaceholder>

            <View style={{marginTop: 20}}/>
            <SkeletonPlaceholder>
                <View style={{ flexDirection: "row", alignItems: 'center'}}>
                    <View style={{ width: 60, height: 60, borderRadius: 50 }} />
                    <View style={{ marginLeft: 20 }}>
                    <View style={{ width: 120, height: 20, borderRadius: 4 }} />
                    <View
                        style={{ marginTop: 6, width: 80, height: 20, borderRadius: 4 }}
                    />
                    </View>
                </View>
                <View>
                    <View style={{width: SCREEN_WIDTH*0.9, height: 20, marginTop: 10}} />
                    <View style={{width: SCREEN_WIDTH*0.9, height: 20, marginTop: 6}} />
                    <View style={{width: SCREEN_WIDTH*0.9, height: 350, marginTop: 6}} />
                </View>
            </SkeletonPlaceholder>
        </ScrollView>
    );
}