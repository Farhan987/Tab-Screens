import React, { Component } from "react";

import { View, Text, TouchableOpacity } from "react-native";
class FreeGiftComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 40
          }}
        >
          <View style={{ width: 90 }}>
            <Text style={{ fontSize: 17 }}>{this.props.day}</Text>
          </View>
          <View style={{ width: 50 }}></View>
          <Text style={{ color: "#656565" }}>10:00 AM -10:00 PM</Text>
        </View>
      </React.Fragment>
    );
  }
}

export default FreeGiftComponent;
