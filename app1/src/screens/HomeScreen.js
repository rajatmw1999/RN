import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View style={styles.views}>

      <Button title="Component Button" onPress={() =>
        props.navigation.navigate('Components')
      } />
      <Text style={styles.text}>This is my home screen.</Text>

      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Lists')
        } >
        <Text>
          List Button
        </Text>
      </TouchableOpacity>

      <Button title="Image Screen Button" onPress={() =>
        props.navigation.navigate('Image')
      } />

      <Button title="State Screen Button" onPress={() =>
        props.navigation.navigate('State')
      } />

      <Button title="Color Screen Button" onPress={() =>
        props.navigation.navigate('Color')
      } />

      <Button title="Adjustable Color Screen Button" onPress={() =>
        props.navigation.navigate('Adjustable')
      } />

      <Button title="Text Input Screen Button" onPress={() =>
        props.navigation.navigate('TextInput')
      } />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50
  },
  views: {
    backgroundColor: '#00FF00'
  }
});

export default HomeScreen;