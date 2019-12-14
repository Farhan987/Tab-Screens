import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";

class OrderHistory extends Component {
  state = { selectDate: false, showAll: true, clicked: 1 };
  toggleData = data => {
    this.setState({ clicked: data });
  };
  render() {
    return (
      <React.Fragment>
        <View style={{ height: 50, flexDirection: "row" }}>
          <View style={styles.tableHeader}></View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Status</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Time</Text>
          </View>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text style={styles.headerText}>Customer Details</Text>
          </View>
          <View style={styles.tableHeader}>
            <Text style={styles.headerText}>Table Number</Text>
          </View>
        </View>
        <View style={{ borderWidth: 0.2, backgroundColor: "#d0d0d0" }}></View>
      </React.Fragment>
    );
  }
}
export default OrderHistory;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9404e"
  },
  view2: {
    flex: 5,
    backgroundColor: "#f3e0e7",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowOpacity: 0.6,
    zIndex: 999
  },
  containerView: {
    flex: 1,
    flexDirection: "row"
  },
  marginTop: {
    height: 40,
    justifyContent: "center",
    alignSelf: "center"
  },
  marginTopWhiteSpace: {
    height: 20,
    justifyContent: "center",
    alignSelf: "center"
  },

  tableHeader: {
    flex: 1,

    justifyContent: "center"
  },
  headerText: {
    fontSize: 16,
    color: "#656565"
  },
  radioButtonUnfilled: {
    height: 15,
    width: 15,
    borderWidth: 1,
    borderColor: "#656565",
    borderRadius: 10
  },
  radioButtonFilled: {
    backgroundColor: "red",
    height: 4,
    width: 4,
    borderRadius: 10,
    padding: 3
  },
  bottomLine: {
    backgroundColor: "red",
    borderWidth: 1,
    borderColor: "red",
    width: 170,
    height: 1
  }
});
