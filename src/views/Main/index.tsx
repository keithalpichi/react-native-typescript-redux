import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28
  },
  emoji: {
    fontSize: 56
  }
})

class Main extends Component {
  public static navigationOptions = {
    title: "Main Page"
  }

  public render(): JSX.Element {
    return (
      <View style={styles.view}>
        <Text style={styles.title}>react-native-typescript-redux</Text>
        <Text style={styles.emoji}>🌊</Text>
        <Text>A quick start boilerplate for React-Native, Typescript, Redux, and React-Navigation Mobile Apps.</Text>
      </View>
    )
  }
}

export default Main
