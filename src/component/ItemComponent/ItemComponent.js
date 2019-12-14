import React, { Component } from "react";
import { Styles } from "./ItemComponentCss";
import { View, Text, TouchableOpacity } from "react-native";
class ItemCompoent extends Component {
  state = {};
  render() {
    return (
      <View style={Styles.redDotView}>
        <View style={Styles.redDot}></View>
        <View style={Styles.gap}></View>
        <View style={{ width: 60, alignSelf: "center" }}>
          <Text style={Styles.redDotTextColor}>
            {this.props.dataList.value}
          </Text>
        </View>
        <View style={Styles.gap}></View>
        <View style={Styles.redDotCancle}>
          <TouchableOpacity onPress={this.props.cancleFunction}>
            <Text style={Styles.redDotCancleText}>x</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ItemCompoent;
