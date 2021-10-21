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