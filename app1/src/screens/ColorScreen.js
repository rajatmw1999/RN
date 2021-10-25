import React, { useState } from 'react'
import { View, Button, FlatList } from 'react-native'

const ColorScreen = () => {
    const [colors, setColor] = useState([]);
    return (
        <View>
            <Button title="Add Color" onPress={() => {
                setColor([...colors, generateRandomColor()])
            }} />

            <FlatList
                keyExtractor={item => item}
                data={colors}
                renderItem={(item) => {
                    return <View style={{ height: 300, width: 300, backgroundColor: item }}></View>
                }}
            />
        </View>
    )
}

const generateRandomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red},${green},${blue})`;
}

export default ColorScreen;