import React from 'react';
import {StyleSheet,Alert, Button, View,Text} from 'react-native';

class BoutonGeam extends React.Component{
    render(){
        return(
            
            <View style={styles.viewbutton}>
                <View>
                    <Text style ={styles.viewText}>coucou</Text>
                </View>
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
        )
    }
}
const styles = StyleSheet.create({
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
    viewText:{
        flex: 1,
    },
    buttonleft: {
        flex: 1,
        
        color:"#2196F3"
    },
    buttonRight: {
        flex: 1,
        
        color:"#2196F3"
    }
})
export default BoutonGeam
