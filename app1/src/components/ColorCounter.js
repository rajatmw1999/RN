import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
    return (
        <View>
            <Text>{color}</Text>
            <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />

        </View>
    )
}

export default ColorCounter;