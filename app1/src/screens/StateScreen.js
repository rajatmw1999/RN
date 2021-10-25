import React, { useState } from 'react';
import { View, Button, Text } from 'react-native';

const StateScreen = () => {
    const [counter, setCounter] = useState(0);
    return (
        <View>
            <Button title="Increase" onPress={() => {
                setCounter(counter + 1)
            }} />
            <Button title="Decrease" onPress={() => {
                setCounter(counter - 1)
            }} />
            <Text>Counter value is {counter}</Text>
        </View>
    )
};

export default StateScreen;