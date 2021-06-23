import React, { useState,useEffect  } from 'react';
import {StyleSheet,Alert, Button, View,Text,Image, Dimensions} from 'react-native';
import ChaussureSolo from '../Components/chaussureSolo'

export default function Game(){

 const [chaussurGauche, setchaussurGauche] = useState(0);
 let deplacement = 0
 useEffect(() => {
    // Update the document title using the browser API
    deplacement =  chaussurGauche;
  });

return(
    <View style ={styles.viewGeneral}>
    <ChaussureSolo 
    chaussurGauche = {deplacement}
    />
    <View style={styles.viewbutton}>
                        <View style={styles.viewOneButton}>
                            <Button 
                                title="Chou"
                                onPress={this.handleClick}  />
                    </View>
                        <View style={styles.viewOneButton}>
                            <Button 
                            title="Chou-Fleur"
                            
                            />
                    </View>
                </View>
    </View>
    
)

}

const styles = StyleSheet.create({
    viewGeneral: {
        flex: 1,
        //flexDirection: 'colum',
       backgroundColor: '#F2EBBF',
        alignItems:'center',
        justifyContent:'center'
        
    },
    viewbutton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    viewOneButton: {
        flex: 1,
        alignItems: 'center',
        height: 50,
        width: 40,
    },
});