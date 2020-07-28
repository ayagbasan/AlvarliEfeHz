import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Input, Card, ListItem, Button, Icon } from "react-native-elements";
import SignUp from "./Component/SignUp";

class App extends Component {
  render() {
    return (
      <View style={styles.app}>
        <SignUp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    alignItems: "center"
  }
});

export default App;
