import React from 'react';


const chaussur = ({chaussurBottom, chaussurLeft}) =>{
    
    return(
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
    )
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
        //flex:1,
        width: screenWidth / 5,
        height: screenheight / 12,
        
    }
})

export default chaussur