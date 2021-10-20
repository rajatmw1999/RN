import React from "react";
import { Text, StyleSheet, View } from "react-native";

const HomeScreen = () => {
  return(
    <View style={styles.views}>
      <Text style={styles.text}>This is my home screen.</Text>
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