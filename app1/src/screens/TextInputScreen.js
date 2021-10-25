import React, { useState } from 'react'
import { Text, View, StyleSheet, TextInput } from 'react-native'

const TextInputScreen = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    return (
        <View>
            <TextInput style={styles.input}
                value={name}
                onChangeText={(newValue) => setName(newValue)}
            />
            <Text>Your name is {name}</Text>
            <TextInput style={styles.input}
                value={password}
                onChangeText={(newValue) => {
                    setName(newValue);
                }}
            />
            {password.length < 5 ? <Text>"Password must be atleast 5 characters"</Text> : null}
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextInputScreen;