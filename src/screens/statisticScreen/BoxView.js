import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Icon, Badge } from "native-base";
import GraphComponent from "../../component/GraphComponent";

class BoxView extends Component {
  state = {};
  render() {
    const data = {
      labels: ["Swim", "Bike", "Run"], // optional
      data: [0.6]
    };
    return (
      <View style={Styles.container}>
        <View style={Styles.view1}>
          <View style={{ flex: 1, justifyContent: "flex-end" }}>
            <Badge style={Styles.bigBadge}>
              <Text style={Styles.bigBadgeText}>Total Order 2019:#4</Text>
            </Badge>
          </View>
          <View style={{ height: 5 }}></View>
          <View style={{ height: 38 }}>
            <View
              style={{ flexDirection: "row", height: 15, alignItems: "center" }}
            >
              <Text style={Styles.bottomheadText}>OrderNumber</Text>
              <Text style={Styles.bottombodyText}>:#4403</Text>
            </View>
            <View
              style={{ flexDirection: "row", height: 15, alignItems: "center" }}
            >
              <Text style={Styles.bottomheadText}>Name</Text>
              <Text style={Styles.bottombodyText}> :Aravinthan</Text>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Badge style={Styles.smallBadge}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon name="print" style={Styles.badgeIcon} />
                <Text style={Styles.smallBadgeText}>print</Text>
              </View>
            </Badge>
            <View style={{ width: 5 }} />
            <Badge style={Styles.smallBadge}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Icon name="eye" style={Styles.badgeIcon} />
                <Text style={Styles.smallBadgeText}>View</Text>
              </View>
            </Badge>
            <View style={{ width: 5 }} />
            <Badge style={Styles.smallBadge}>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center"
                }}
                onPress={this.props.onGiftModalOpen}
              >
                <Icon name="gift" style={Styles.badgeIcon} />
                <Text style={Styles.smallBadgeText}>Gift</Text>
              </TouchableOpacity>
            </Badge>
            <View style={{ width: 5 }} />
            <Badge style={Styles.doneBadge}>
              <Text style={{ color: "white", fontSize: 8 }}>Done</Text>
            </Badge>
          </View>
        </View>
        <View
          style={{ flex: 3, alignSelf: "center", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={this.props.DelayOrderPopup}>
            <GraphComponent dataValue={this.props.dataValue} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default BoxView;
const Styles = StyleSheet.create({
  view1: {
    flex: 7,
    paddingLeft: 10
  },
  badgeIcon: {
    fontSize: 10,
    color: "gray"
  },
  bigBadge: {
    height: 20,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#e94046",
    backgroundColor: "white",
    borderWidth: 0.7
  },
  doneBadge: {
    height: 20,
    width: 40,
    borderRadius: 200,

    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "#d93f52"
  },
  smallBadge: {
    height: 20,

    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f3f4"
  },
  container: {
    width: "97%",
    alignSelf: "center",
    minHeight: 130,
    borderWidth: 2,
    borderColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 7,
    padding: 5,
    flexDirection: "row"
  },
  col0: { flex: 7 },
  taskName: { fontSize: 18 },
  taskDescription: { fontSize: 16 },
  bottomIcon: { fontSize: 18, color: "gray" },
  bottomheadText: {
    padding: 3,
    fontSize: 10,
    color: "gray",
    alignSelf: "flex-start",
    alignSelf: "flex-start"
  },
  bottombodyText: { padding: 3, fontSize: 10, color: "#4b4c4c" },
  editButton: {
    width: 35,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1.5
  },
  editButtonText: { fontSize: 18, color: "gray" },
  deleteButton: {
    width: 35,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderColor: "red",
    borderWidth: 1.5
  },
  deleteButtonText: { color: "red", fontSize: 15, fontWeight: "bold" },
  doneButton: {
    backgroundColor: "white",
    width: "90%",
    height: "65%",
    borderColor: "green",
    borderWidth: 1.5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  fullDelete: {
    backgroundColor: "white",
    width: "90%",
    height: "65%",
    borderColor: "red",
    borderWidth: 1.5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  doneButtonText: { color: "green", fontSize: 18 },
  fullDeleteTEXT: { color: "red", fontSize: 18 },
  col1: { flex: 3 },
  bigBadgeText: {
    alignSelf: "flex-start",
    fontSize: 9,
    color: "#e94046",
    paddingLeft: 3,
    paddingRight: 3
  },
  smallBadgeText: {
    alignSelf: "center",
    fontSize: 8,
    color: "gray",
    paddingLeft: 7,
    paddingRight: 7
  }
});
