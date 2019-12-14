import React, { Component } from "react";

import { View, Text, StyleSheet } from "react-native";

class OrderHistoryTableComponent extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <View style={{ height: 70, flexDirection: "row" }}>
          <View
            style={[
              tableBodyStyles.tableHeader,
              { justifyContent: "center", alignItems: "center" }
            ]}
          >
            {this.props.showCancle ? (
              <View
                style={{
                  backgroundColor: "#e94647",
                  width: "58%",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 30,
                  borderRadius: 30
                }}
              >
                <Text style={{ color: "white", fontSize: 11 }}>Cancle All</Text>
              </View>
            ) : (
              false
            )}
          </View>
          <View style={tableBodyStyles.tableHeader}>
            <Text style={tableBodyStyles.headerText}>Reservation</Text>
            <View style={{ height: 5 }}></View>
            <Text
              style={{
                color: this.props.statusSubHeadColor
                  ? this.props.statusSubHeadColor
                  : "green"
              }}
            >
              {this.props.statusSubHeadText}
            </Text>
          </View>
          <View style={tableBodyStyles.tableHeader}>
            <Text style={tableBodyStyles.headerText}>3:32 pm</Text>
          </View>
          <View style={{ flex: 2, justifyContent: "center" }}>
            <Text style={tableBodyStyles.headerText}>working</Text>
            <View style={{ height: 5 }}></View>
            <Text style={{ color: "#cbcbcb" }}>+61435456453</Text>
          </View>
          <View style={tableBodyStyles.tableHeader}>
            <Text style={tableBodyStyles.headerText}>1</Text>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

export default OrderHistoryTableComponent;

const tableBodyStyles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9404e"
  },
  view2: {
    flex: 7,
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
  }
});
