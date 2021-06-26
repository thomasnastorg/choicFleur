import { BackgroundFetch } from 'expo';
import React from 'react';
import {StyleSheet,Alert, Button, View,Text,Image, Dimensions} from 'react-native';

const ChaussureGauche = ({chaussurGauche}) =>{
    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height
    return(
       
        <Image 
                       
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            width: screenWidth/5,
            height: screenHeight/12,
            right: chaussurGauche

        }}
        source={require('../assets/bleugrisnoir.png')}

    />
        
       
    )
}

export default ChaussureGauche

