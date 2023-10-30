import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native';
import Back from '../assets/Back.png';
import Calendar from '../assets/Calendar.png';
const FillProfile = ({ navigation }) => {

    const goBack = () => {
        navigation.navigate("Signup")
    }
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, marginHorizontal: 22 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 58, }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={Back} style={{ width: 28, height: 28, }} />
                    </TouchableOpacity>
                    <Text style={{
                        fontSize: 24,
                        flexDirection: 'column',
                        fontWeight: '700',
                        letterSpacing: 0.2,
                        color: '#000',
                        marginLeft: 10,
                    }}>
                        Fill Your Profile
                    </Text>
                </View>
                <View style={{
                    width: 355,
                    height: 53,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderRadius: 10,
                    borderColor: "#C4C4C4",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                    marginTop: 200,
                }}>
                    <TextInput
                        placeholder='Full Name'
                        placeholderTextColor='#000'

                        style={{
                            width: "100%",
                            fontSize: 17,
                            fontWeight: '500',
                            letterSpacing: 0.2,
                        }}
                    />
                </View>

                <View style={{
                    width: 355,
                    height: 53,
                    borderWidth: 1,
                    borderColor: '#C4C4C4',
                    borderStyle: 'solid',
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                    marginTop: 14
                }}>
                    <TextInput
                        placeholder='Nick Name'
                        placeholderTextColor='#000'

                        style={{
                            width: "100%",
                            fontSize: 17,
                            fontWeight: '500',
                            letterSpacing: 0.2,
                        }}
                    />
                </View>

                <View style={{
                    width: 355,
                    height: 53,
                    borderWidth: 1,
                    borderColor: '#C4C4C4',
                    borderStyle: 'solid',
                    borderRadius: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 22,
                    marginTop: 14
                }}>
                    <TextInput
                        placeholder='Date of Birth'
                        placeholderTextColor='#000'
                        keyboardType='numeric'
                        style={{
                            width: "100%",
                            fontSize: 17,
                            fontWeight: '500',
                            letterSpacing: 0.2,
                        }}
                    />
                </View>
                
            </View>
            <StatusBar style="auto" />
        </SafeAreaView>
    )
}

export default FillProfile;