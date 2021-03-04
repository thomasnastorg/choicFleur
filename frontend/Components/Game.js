import React from 'react';
import {StyleSheet,Alert, Button, View,Text,Image} from 'react-native';


class Game extends React.Component{
    render(){
        return(
            
            <View style ={styles.viewGeneral}>
                <View style ={styles.viexTitre}>
                    <Text style = {({fontSize: 60})}>Choux-Fleur</Text>
                </View>
                <View style ={styles.viewChaussur}>
                    <Image
                        style={styles.chaussurImage}
                        source={require('../assets/rougeblancgris.png')}
                 
                    />

                    <Image
                    style={styles.chaussurImage}
                    source={require('../assets/bleugrisnoir.png')}
                 
                    />

                </View>
                    <View style={styles.viewbutton}>
                        <View style={styles.viewOneButton}>
                            <Button 
                        title="un pied"
                        color="#2196F3"
                        onPress = {() => Alert.alert('all right')}
            
                     />
                    </View>
                        <View style={styles.viewOneButton}>
                            <Button 
                    
                            title="un demi pied"
                
                            />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    viewGeneral: {
        flex: 1,
        flexDirection: 'colum',
        
        
        
    },
    viexTitre:{
        flex: 1,
        alignItems: 'center',
        
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
    viewChaussur:{
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    buttonleft: {
        flex: 1,
        
        color:"#2196F3"
    },
    buttonRight: {
        flex: 1,
        
        color:"#2196F3"
    },
    chaussurImage: {
        width: 100,
        height: 100
    }
})
export default Game
