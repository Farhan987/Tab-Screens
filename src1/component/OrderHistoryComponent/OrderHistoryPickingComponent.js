import React, { Component } from "react";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import ItemComponent from "../../component/ItemComponent/ItemComponent";
class OrderHistoryPickingComponent extends Component {
  state = {
    data: "",
    expanded: false,
    summeryList2: [
      { _id: 0, value: "1X chicken" },
      { _id: 1, value: "1X burgur" },
      { _id: 2, value: "1X twister" },
      { _id: 3, value: "1X chicken" },
      { _id: 4, value: "1X Nudget" }
    ]
  };

  onClick = index => {
    const temp = this.state.data.slice();
    temp[index].value = !temp[index].value;
    this.setState({ data: temp });
  };

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };
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
            <TouchableOpacity
              style={{
                backgroundColor: "#e94647",
                width: 30,
                alignItems: "center",
                justifyContent: "center",
                height: 30,
                padding: 4,
                borderRadius: 50
              }}
              onPress={() => this.toggleExpand()}
            >
              <Icon
                name={
                  this.state.expanded
                    ? "keyboard-arrow-down"
                    : "keyboard-arrow-right"
                }
                style={{
                  width: 25,
                  alignSelf: "center",
                  paddingTop: 2,

                  paddingLeft: 3
                }}
                size={20}
                color={"white"}
              />
            </TouchableOpacity>
          </View>
          <View style={[tableBodyStyles.tableHeader, { flex: 2 }]}>
            <Text style={tableBodyStyles.headerText}>Pickup</Text>
            <View style={{ height: 5 }}></View>
            <Text style={{ fontSize: 14, color: this.props.colorStatus }}>
              {this.props.StatusSubHeader}
            </Text>
          </View>
          <View style={tableBodyStyles.tableHeader}>
            <Text style={tableBodyStyles.headerText}>#4350</Text>
          </View>
          <View style={[tableBodyStyles.tableHeader, { flex: 1.5 }]}>
            <Text style={tableBodyStyles.headerText}>3:32 pm</Text>
          </View>
          <View style={tableBodyStyles.tableHeader}>
            <Text style={tableBodyStyles.headerText}>$43.50</Text>
          </View>
          <View style={[tableBodyStyles.tableHeader, { flex: 2 }]}>
            <Text style={tableBodyStyles.headerText}>working</Text>
            <View style={{ height: 5 }}></View>
            <Text style={{ color: "#cbcbcb" }}>+61435456453</Text>
          </View>
        </View>
        <View>
          <View style={styles.parentHr} />
          {this.state.expanded && (
            <ScrollView>
              <View style={{ flex: 1, paddingLeft: 90 }}>
                {this.state.summeryList2.map(data => (
                  <ItemComponent
                    cancleFunction={() => {
                      const array = this.state.summeryList2.filter(
                        element => element._id !== data._id
                      );
                      this.setState({ summeryList2: array });
                    }}
                    dataList={data}
                  />
                ))}
              </View>
            </ScrollView>
          )}
        </View>
      </React.Fragment>
    );
  }
}

export default OrderHistoryPickingComponent;

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

    justifyContent: "center",
    alignItems: "flex-start"
  },
  headerText: {
    fontSize: 16,
    color: "#656565"
  },
  //
  grayColor: {
    height: 3,
    paddingLeft: "5%",
    paddingRight: "5%",
    backgroundColor: "white"
  },
  lineColor: {
    borderRadius: 0.3,
    borderColor: "gray",
    height: 0.2,
    backgroundColor: "gray"
  },
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
