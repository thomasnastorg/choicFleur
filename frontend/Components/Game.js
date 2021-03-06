import React from 'react';
import {StyleSheet,Alert, Button, View,Text,Image} from 'react-native';


class Game extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          bouton: ''
        };
      };
      updateText = (result) => {
        if( this.state.bouton != 'Chou'){
            this.setState({bouton: 'Chou'})
    }else if( this.state.bouton = 'Chou')
    this.setState({bouton: 'vous avez déja selection se bouton'})
    }
    
    updateText1 = (result) => {
        if( this.state.bouton != 'Chou-Fleur'){
            this.setState({bouton: 'Chou-Fleur'})
    }else if( this.state.bouton = 'Chou-Fleur')
    this.setState({bouton: 'vous avez déja selection se bouton'})
    }
      
    render(){
        return(
            
            <View style ={styles.viewGeneral}>
                <View style ={styles.viexTitre}>
                    <Text style = {({fontSize: 60,paddingBottom: 20})} > Choux-Fleur </Text>
                </View>
                <View style ={styles.viewChaussur}>
                    <Image
                        style={styles.chaussurImage}
                        source={require('../assets/rougeblancgris.png')}
                 
                    />
                    <Text>{this.state.bouton}</Text>
                    <Image
                    style={styles.chaussurImage}
                    source={require('../assets/bleugrisnoir.png')}
                 
                    />

                </View>
                    <View style={styles.viewbutton}>
                        <View style={styles.viewOneButton}>
                            <Button 
                                title="Chou"
                                onPress = {this.updateText}
                            />
                    </View>
                        <View style={styles.viewOneButton}>
                            <Button 
                            title="Chou-Fleur"
                            onPress = {this.updateText1}
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
        //flexDirection: 'colum',
       backgroundColor: '#F2EBBF'
        
        
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
        width: 50,
        height: 50
    }
})
export default Game
