import React from 'react'
import {Text, StyleSheet} from 'react-native'

const ComponentScreen = function() {
    return <Text style={myStyle.textStyle}>This is the party house baby. Not really. This is the component screen.</Text>
}

const myStyle = StyleSheet.create({
    textStyle: {
        fontSize: 40     
    }
})

export default ComponentScreen;