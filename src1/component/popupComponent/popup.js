import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default class Popup extends Component {
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
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            Push next orders
          </Text>
        </View>

        {/* small text */}
        <View style={styles.viewStyle2}>
          <Text style={{ color: "#C1C1C1", fontSize: 16 }}>
            How long would you like to pause the next order
          </Text>
        </View>

        {/* badge1*/}
        <View style={styles.badgeOutterViewStyle}>
          <View style={styles.badgeViewStyle}>
            <View style={styles.badgeStyle}>
              <Text style={{ color: "#B6E099" }}>5 min</Text>
            </View>
          </View>
          <View style={[styles.badgeViewStyle, { alignItems: "center" }]}>
            <View style={styles.badgeStyle}>
              <Text style={{ color: "#B6E099" }}>5 min</Text>
            </View>
          </View>
          <View style={{ width: 30 }} />
          <View style={[styles.badgeViewStyle, { alignItems: "center" }]}>
            <View style={styles.badgeStyle}>
              <Text style={{ color: "#B6E099" }}>5 min</Text>
            </View>
          </View>
          <View style={[styles.badgeViewStyle, { alignItems: "flex-end" }]}>
            <View style={styles.badgeStyle}>
              <Text style={{ color: "#B6E099" }}>5 min</Text>
            </View>
          </View>
        </View>

        <View style={{ height: 10 }} />
        {/* badge2*/}
        <View style={styles.badgeOutterViewStyle}>
          <View style={styles.badgeViewStyle}>
            <View style={styles.badgeStyle}>
              <Text style={{ color: "#B6E099" }}>5 min</Text>
            </View>
          </View>
          <View style={[styles.badgeViewStyle, { alignItems: "center" }]}>
            <View style={styles.badgeStyle}>
              <Text style={{ color: "#B6E099" }}>5 min</Text>
            </View>
          </View>
          <View style={{ width: 30 }} />
          <View style={[styles.badgeViewStyle, { alignItems: "center" }]}>
            <View style={styles.badgeStyle}>
              <Text style={{ color: "#B6E099" }}>5 min</Text>
            </View>
          </View>
          <View style={[styles.badgeViewStyle, { alignItems: "flex-end" }]}>
            <View style={styles.badgeStyle}>
              <Text style={{ color: "#B6E099" }}>5 min</Text>
            </View>
          </View>
        </View>

        {/* button */}

        <View style={styles.nextButtonViewStyle}>
          <TouchableOpacity
            style={styles.nextButtonStyle}
            onPress={this.props.onClose}
          >
            <Text style={{ color: "white" }}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 220,

    alignSelf: "center",
    justifyContent: "center",
    alignSelf: "center",
    width: "50%"
  },
  crossButtonViewStyle: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-end"
  },
  crossButtonStyle: {
    height: 33,
    width: 33,
    backgroundColor: "#FF0036",
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
    alignSelf: "center"
  },
  viewStyle2: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "90%",
    alignSelf: "center"
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
