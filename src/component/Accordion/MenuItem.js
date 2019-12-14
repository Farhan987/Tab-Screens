import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  FlatList,
  StyleSheet,
  ScrollView
} from "react-native";
// import { Colors } from "./Colors";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class MenuItem extends Component {
  render() {
    return (
      <View>
        <View style={[styles.childRow, styles.button]}>
          <View
            style={{
              flex: 1,

              width: "100%",
              justifyContent: "flex-end"
            }}
          >
            <Text style={{ color: "gray" }}> SubItem</Text>
            <View
              style={{
                height: 4
              }}
            ></View>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              flexDirection: "row",
              color: "gray"
            }}
          >
            <Text style={{ color: "gray", fontSize: 13 }}>
              Time: 03:00 Am to 05:00 PM
            </Text>
            <View style={{ width: 7 }}></View>
            <Text style={{ color: "gray", fontSize: 13 }}>|</Text>
            <View style={{ width: 7 }}></View>
            <Text style={{ color: "gray", fontSize: 13 }}>Price Edit</Text>
            <View style={{ width: 7 }}></View>
            <Text style={{ color: "gray", fontSize: 13 }}>|</Text>
            <View style={{ width: 7 }}></View>
            <Text style={{ color: "gray", fontSize: 13 }}>Unavailable</Text>
          </View>
          <View style={styles.childHr} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    width: "100%",
    height: 70,

    alignItems: "center",
    paddingLeft: 35,
    paddingRight: 35,
    fontSize: 12
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: "gray"
  },
  itemActive: {
    fontSize: 12,
    color: "green"
  },
  itemInActive: {
    fontSize: 12,
    color: "gray"
  },
  btnActive: {
    borderColor: "green"
  },
  btnInActive: {
    borderColor: "gray"
  },
  row: {
    flexDirection: "row",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    justifyContent: "space-between",
    height: 56,
    paddingLeft: 25,
    paddingRight: 18,
    alignItems: "center",
    backgroundColor: "white"
  },
  childRow: {
    backgroundColor: "white"
  },
  parentHr: {
    height: 1,
    color: "white",
    width: "100%"
  },
  childHr: {
    height: 0.4,
    backgroundColor: "gray",
    width: "100%"
  },
  colorActive: {
    borderColor: "green"
  },
  colorInActive: {
    borderColor: "gray"
  }
});
