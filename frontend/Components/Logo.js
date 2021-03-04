import React from 'react';
import {View, FlatList, Text} from 'react-native'

class Logo extends React.Component{
    render(){
        return(
            <View>
            <FlatList
            data={[{key: a},{key : b}]}
            renderItem={({item}) => <Text>{item.key}</Text>}
          />
          </View>
        )
    }
}

export default Logo