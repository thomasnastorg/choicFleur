import React, { useState,useEffect  } from 'react';
import {StyleSheet,Alert, Button, View,Text,Image, Dimensions} from 'react-native';
import ChaussureSolo from '../Components/chaussureSolo'
import ChaussureGauche from '../Components/chaussureGauche';


function Game(){

 const [chaussureSolo, setchaussureSolo] = useState(0);
 const [chaussureGauche, setchaussureGauche] = useState(0);
 const [trune, settrune] = useState(true);
 const [textEvent, settextEvent] = useState('c\'est au tour de la chaussure gauche de jouer');
 const [button, setbutton] = useState(false);
 const screenWidth = Dimensions.get("screen").width
 
 
 

 const text = () =>{
     if(trune == true ){
        
         settextEvent('c\'est au tour de la chaussure droite de jouer')
         settrune(false)
         
     }
     else if(trune == false ){
        
        settextEvent('c\'est au tour de la chaussure gauche de jouer')
        settrune(true)
        
     }
 }


 useEffect(() =>{
    if ((chaussureSolo + 70 + chaussureGauche + 70) > screenWidth){
        if (trune == true){
           settextEvent('la chaussure droite a gagné')
           setbutton(true)

        }
        if (trune == false){
           settextEvent('la chaussure gauche a gagné')
           setbutton(true)

        }
    }
});

 const onPressHandlerChou = () => {
   
    if ( chaussureSolo < (screenWidth/2) && trune == true){
        setchaussureSolo(chaussureSolo => chaussureSolo + (screenWidth/2)/5)
        text()
          
     } else if(chaussureGauche < (screenWidth/2) && trune == false){
        setchaussureGauche(chaussureGauche => chaussureGauche + (screenWidth/2)/5)
        text() 
          
     }
 }
 
 const onPressHandlerChouFleur = () => {
    
    if ( chaussureSolo < (screenWidth/2) && trune == true){
        setchaussureSolo(chaussureSolo => chaussureSolo + (screenWidth/2)/10)    
        text()
            
     }else if(chaussureGauche < (screenWidth/2) && trune == false){
        setchaussureGauche(chaussureGauche => chaussureGauche + (screenWidth/2)/10)
        text()
          
     } 

   
 }
 
return(
    <View style ={styles.viewGeneral}>
    <ChaussureSolo 
    chaussureSolo = {chaussureSolo}
    />
    <ChaussureGauche
    chaussurGauche = {chaussureGauche}
    />


    <View>
    <Text>
        {textEvent}
    </Text>
    
    </View>

    <View style={styles.viewbutton}>
                        <View style={styles.viewOneButton}>
                            <Button 
                                disabled={button}
                                title='Chou'
                                onPress={onPressHandlerChou}  />
                                
                    </View>
                    
                        <View style={styles.viewOneButton}>
                            <Button 
                            disabled={button}
                            title="Chou-Fleur"
                            onPress={onPressHandlerChouFleur}
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

export default Game;