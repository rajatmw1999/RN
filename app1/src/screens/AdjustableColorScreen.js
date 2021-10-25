import React, { useState } from 'react'
import { View, Button, Text } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const AdjustableColorScreen = () => {
    const COLOR_CHANGE = 15;
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);
    return (
        <View>
            <Text>Adjustable Color Screen</Text>
            <ColorCounter color="Red"
                onIncrease={() => setRed(red + COLOR_CHANGE)}
                onDecrease={() => setRed(red - COLOR_CHANGE)} />
            <ColorCounter color="Green"
                onIncrease={() => setGreen(green + COLOR_CHANGE)}
                onDecrease={() => setGreen(green - COLOR_CHANGE)} />
            <ColorCounter color="Blue"
                onIncrease={() => setBlue(blue + COLOR_CHANGE)}
                onDecrease={() => setBlue(blue - COLOR_CHANGE)} />
            <View style={{ height: 200, width: 200, backgroundColor: `rgb(${red},${green},${blue})` }}>
            </View>
        </View>
    )
}

export default AdjustableColorScreen;