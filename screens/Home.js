import React, { Component } from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();
let customFont = {
  "AppleGaramond-Bold": require("../assets/AppleGaramond-BoldItalic.ttf"),
  "AppleGaramond-Light": require("../assets/AppleGaramond-Light.ttf"),
  Game: require("../assets/GameOfSquids.ttf"),
  good: require("../assets/goodtimesrg.ttf"),
};

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      fontLoaded: false,
    };
  }
  loadFonts = async () => {
    await Font.loadAsync(customFont);
    this.setState({ fontLoaded: true });
  };
  componentDidMount() {
    this.loadFonts();
  }
  render() {
    if (this.state.fontLoaded) {
      SplashScreen.hideAsync();
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.textTitle}>RAVA FINANÇAS</Text>
          </View>
          <View style={styles.uperContainer}>
            <Image
              source={require("../assets/changa.png")}
              style={styles.imageContainer}
            />
            <Text style={styles.textContainer}>
              {
                "O que é educação financeira? \n A educação financeira é o processo de adquirir conhecimentos e habilidades para tomar decisões conscientes e responsáveis em relação ao dinheiro, gerenciando recursos de forma eficiente, estabelecendo metas financeiras e compreendendo os princípios básicos de economia, investimentos, orçamento e planejamento financeiro. Em resumo, é aprender a lidar melhor com o dinheiro para alcançar uma vida financeira mais saudável e sustentável."
              }
            </Text>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#96cc7f",
  },
  title: {
    backgroundColor: "white",
    width: 420,
    height: 80,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  textTitle: {
    color: "#669E4F",
    fontFamily: "good",
    fontSize: 40,
  },
  uperContainer: {
    flexDirection: "row",
    backgroundColor: "rgba(0,0,0,0.3)",
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 20,
    justifyContent: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  imageContainer: {
    resizeMode: "contain",
    width: 130,
    height: 130,
    marginHorizontal: 10,
  },
  textContainer: {
    fontFamily: "AppleGaramond-Bold",
    fontSize: 17.5,
    color: "black",
  },
});
