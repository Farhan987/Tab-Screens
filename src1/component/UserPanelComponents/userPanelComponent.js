import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome";
class userPanelComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <TouchableOpacity
          style={{ height: 65, flexDirection: "row" }}
          onPress={this.props.Clicked}
        >
          <View style={{ flex: 1, justifyContent: "center", paddingLeft: 40 }}>
            <Text style={{ fontSize: 20, color: "#282b2d" }}>
              {this.props.Text}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingRight: 40
            }}
          >
            <Icon name="lock" size={30} color="#e9404e" />
          </View>
        </TouchableOpacity>
      </React.Fragment>
    );
  }
}
export default userPanelComponent;

styles = StyleSheet.create({});
