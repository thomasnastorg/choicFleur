import React from 'react';
import {StyleSheet,Alert, Button, View,Text,Image,TouchableOpacity} from 'react-native';


const Home = props => {
 
  
    const goTo = () => {
        props.navigation.navigate("game");
    }

      
  
        return(
            
            <View style ={styles.viewGeneral}>
                <View style ={styles.viexTitre}>
                    <Text style = {({fontSize: 60})} > Choux-Fleur</Text>
                </View>
                    <View style={styles.viewbutton}>
                        <View style={styles.viewOneButton}>
                            <Button 
                                title="a deux sur le même device"
                                onPress = {goTo}
                            />
                    </View>
                        <View style={styles.viewOneButton}>
                            <Button 
                            disabled={true}
                            title="multijoueur"
                            //onPress = {this.demiPied}
                            />
                    </View>
                </View>
                </View>
        );
    }

const styles = StyleSheet.create({
    viewGeneral: {
        flex: 1,
        //flexDirection: 'colum',
       backgroundColor: '#F2EBBF',
       position: 'relative'
        
    },
    viexTitre:{
        paddingTop: 15,
        flex: 0,
        alignItems: 'center',
        
    },
    viewbutton: {
        
        flex: 1,
        //flexDirection: 'row',
        
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center', 
        //height: 10,

    },
    viewOneButton: {
        
        //flex: 0,
        alignItems: 'center',
        padding: 10,
        //height: 50,
        //width: 40,
    },
 

})




export default Home