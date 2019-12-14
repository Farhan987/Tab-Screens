import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { Button } from "native-base";

export default class CounterComponent extends Component {
  state = {
    counter: 0
  };
  add = () => {
    this.setState({ counter: this.state.counter + 1 });
  };
  subtract = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 });
    } else {
    }
  };
  render() {
    return (
      <View style={styles.viewStyle}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "flex-start"
          }}
        >
          <Text style={{ fontSize: 17 }}>{this.props.Name}</Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end"
          }}
        >
          <TouchableOpacity
            onPress={() => this.subtract()}
            style={{
              backgroundColor: "#fe3a4f",
              alignItems: "center",
              justifyContent: "center",
              height: 30,
              width: 30,
              borderBottomLeftRadius: 6,
              borderTopLeftRadius: 6
            }}
          >
            <Text style={{ alignSelf: "center", color: "white" }}>-</Text>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: "center",
              alignSelf: "center",
              alignItems: "center",
              flexDirection: "row",
              borderWidth: 1,
              borderColor: "red",
              height: 30
            }}
          >
            <View style={{ width: 10 }}></View>
            <Text>{this.state.counter}</Text>
            <View style={{ width: 10 }}></View>
          </View>
          <TouchableOpacity
            onPress={() => this.add()}
            style={{
              backgroundColor: "#fe3a4f",
              alignItems: "center",
              justifyContent: "center",
              height: 30,
              width: 30,
              borderBottomRightRadius: 6,
              borderTopRightRadius: 6
            }}
          >
            <Text style={{ alignSelf: "center", color: "white" }}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    height: 60,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    // paddingBottom: 10,
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
