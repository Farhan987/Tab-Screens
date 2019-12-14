import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Button, Textarea } from "native-base";
import CounterComponent from "./CounterComponent";
export default class FreeGiftComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.crossButtonViewStyle}>
          <TouchableOpacity
            style={styles.crossButtonStyle}
            onPress={this.props.onClose}
          >
            <Text style={{ color: "white", marginBottom: 2 }}>x</Text>
          </TouchableOpacity>
        </View>

        {/* large text */}
        <View style={styles.viewStyle1}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Free Gifts</Text>
        </View>
        <View style={{ height: 20 }}></View>
        <View style={{ borderWidth: 0.3, backgroundColor: "gray" }}></View>
        <CounterComponent Name={"Mini Bun"} />
        <View style={{ borderWidth: 0.3, backgroundColor: "gray" }}></View>
        <CounterComponent Name={"Toasters"} />
        <View style={{ borderWidth: 0.3, backgroundColor: "gray" }}></View>
        <CounterComponent Name={"Chips"} />
        <View style={{ borderWidth: 0.3, backgroundColor: "gray" }}></View>
        <CounterComponent Name={"Biig Bun"} />
        <View
          style={{ height: 50, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#fe3a4f",
              height: 40,
              width: "30%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 50
            }}
            onPress={this.props.onClose}
          >
            <Text style={{ color: "white" }}>Confirm</Text>
          </TouchableOpacity>
        </View>
        <View style={{ height: 10 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 360,

    paddingLeft: 30,
    alignSelf: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "40%",
    backgroundColor: "white",
    borderRadius: 30
  },
  crossButtonViewStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  crossButtonStyle: {
    height: 30,
    width: 30,
    backgroundColor: "#fe3a4f",
    borderRadius: 30,
    marginTop: -13,
    zIndex: 99,
    justifyContent: "center",
    alignItems: "center"
  },
  viewStyle1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    width: "90%",
    alignSelf: "flex-start"
  },
  viewStyle2: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "flex-start",
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  badgeOutterViewStyle: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
    flexDirection: "row"
  },
  badgeViewStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start"
  },
  badgeStyle: {
    height: "80%",
    width: "65%",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#C6E7B2",
    justifyContent: "center",
    alignItems: "center"
  },
  nextButtonViewStyle: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  nextButtonStyle: {
    height: 40,
    width: 100,
    backgroundColor: "#FF0036",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
