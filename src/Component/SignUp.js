import React, { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Input, Card, ListItem, Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import Back4App from "../Business/Back4App";
import { Logger, Config, Errors, Response } from "../Toolbox/index";

export default class SignUp extends Component {
  state = {
    isLoading: false,
    email: "senayagibasan@gmail.com",
    adi: "Sena",
    soyadi: "YAĞBASAN",
    cepTelefonu: "5353133348",
    password: "5353133348",
    username: "5353133348"
  };

  signUp = async () => {
    try {
      let data = {
        email: this.state.email,
        adi: this.state.adi,
        soyadi: this.state.soyadi,
        cepTelefonu: this.state.cepTelefonu,
        password: this.state.password,
        username: this.state.cepTelefonu
      };
      let response = await Back4App.signUp(data);
      if (response.isSuccess) console.log("Sign Up başarılı", response);
      else console.log(JSON.stringify(response));
    } catch (error) {
      Logger.error("Sign up hata oluştu", error);
    }
  };

  render() {
    return (
      <View style={styles.app}>
        <Button title="Kullanıcı Kaydet" onPress={() => this.signUp()} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  app: {
    flex: 1
  }
});
