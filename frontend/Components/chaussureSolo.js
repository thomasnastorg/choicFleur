import { BackgroundFetch } from 'expo';
import React from 'react';
import {StyleSheet,Alert, Button, View,Text,Image, Dimensions} from 'react-native';

const ChaussureSolo = ({chaussurGauche, chaussurBas}) =>{
    const screenWidth = Dimensions.get("screen").width
    const screenHeight = Dimensions.get("screen").height
    return(
       
        <Image 
                       
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            position: 'absolute',
            width: screenWidth/5,
            height: screenHeight / 12,
            left: chaussurGauche

        }}
        source={require('../assets/rougeblancgris.png')}

    />
        
       
    )
}

export default ChaussureSolo

