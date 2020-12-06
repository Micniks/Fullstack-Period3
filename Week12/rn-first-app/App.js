import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, Dimensions, TouchableOpacity } from "react-native";
import GetLoginData from "./GetLoginData";

export default function App() {
  const [visible, setVisible] = useState(false);

  function onCancel() {
    setVisible(false);
  }

  function toggleVisibility() {
    setVisible(true);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Team Finder App</Text>
      <View style={styles.mapStyle}>
        <Text>Add your map here</Text>
      </View>
      <Button title="Try" onPress={toggleVisibility} />
      <GetLoginData visible={visible} onCancel={onCancel} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  button: {
    alignItems: "center",
    backgroundColor: "darkgray",
    padding: 10,
    margin: 4,
  },
  headerText: {
    fontSize: 26,
    flex: 1,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
    flex: 10,
  },
});
