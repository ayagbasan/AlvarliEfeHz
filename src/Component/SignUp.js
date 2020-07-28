import React, { Component } from "react";
import { View, Text, Image, StyleSheet, ActivityIndicator } from "react-native";
import { Input, Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Back4App from "../Business/Back4App";
import { Logger, Config, Errors, Response } from "../Toolbox/index";

export default class SignUp extends Component {
  state = {
    isLoading: false,
    email: "senayagibasan11@gmail.com",
    adi: "Sena",
    soyadi: "YAĞBASAN",
    cepTelefonu: "535313334811",
    password: "5353133348",
    username: "535313334811",
    result: null
  };

  signUp = async () => {
    let isLoading = true;
    let result = "";
    try {
      this.setState({ isLoading: true });
      let data = {
        email: this.state.email,
        adi: this.state.adi,
        soyadi: this.state.soyadi,
        cepTelefonu: this.state.cepTelefonu,
        password: this.state.password,
        username: this.state.cepTelefonu
      };
      let response = await Back4App.signUp(data);
      if (response.isSuccess) {
        console.log("Sign Up başarılı", response);
        result = JSON.stringify(response);
      } else {
        console.log(JSON.stringify(response));
        result = JSON.stringify(response);
      }
    } catch (error) {
      Logger.error("Sign up hata oluştu", error);
      result = JSON.stringify(error);
    }

    this.setState({ isLoading: !isLoading, result });
  };

  render() {
    return (
      <View style={styles.app}>
        <Button title="Kullanıcı Kaydet" onPress={() => this.signUp()} />
        {this.state.isLoading && <ActivityIndicator size="large" />}
        <Text>{this.state.result}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flexDirection: "row"
  }
});
