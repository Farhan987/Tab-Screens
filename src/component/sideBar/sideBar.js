import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

class SideBar extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={sideBarStyles.view1}>
          <View style={sideBarStyles.marginTop}></View>
          <View style={sideBarStyles.EEView}>
            <Text style={sideBarStyles.EEText}>E E</Text>
          </View>
          <View style={sideBarStyles.gapBetween}></View>
          <View style={sideBarStyles.IconView}>
            {this.props.selectTab === 1 ? (
              <TouchableOpacity
                style={sideBarStyles.IconButton}
                onPress={() => this.props.navigation.navigate("HomeScreen")}
              >
                <Image
                  style={sideBarStyles.IconImage}
                  source={require("../../icons/white/home.png")}
                ></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("HomeScreen")}
              >
                <Image
                  style={sideBarStyles.IconImage}
                  source={require("../../icons/gray/home.png")}
                ></Image>
              </TouchableOpacity>
            )}
          </View>
          <View style={sideBarStyles.gapBetween}></View>
          <View style={sideBarStyles.IconView}>
            {this.props.selectTab === 2 ? (
              <TouchableOpacity
                style={sideBarStyles.IconButton}
                onPress={() => this.props.navigation.navigate("EditMenuScreen")}
              >
                <Image
                  style={sideBarStyles.IconImage}
                  source={require("../../icons/white/edit.png")}
                ></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("EditMenuScreen")}
              >
                <Image
                  style={sideBarStyles.IconImage}
                  source={require("../../icons/gray/edit.png")}
                ></Image>
              </TouchableOpacity>
            )}
          </View>
          <View style={sideBarStyles.gapBetween}></View>
          <View style={sideBarStyles.IconView}>
            {this.props.selectTab === 3 ? (
              <TouchableOpacity
                style={sideBarStyles.IconButton}
                onPress={() => this.props.navigation.navigate("TabViewScreen")}
              >
                <Image
                  style={sideBarStyles.IconCircle}
                  source={require("../../icons/white/time.png")}
                ></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("TabViewScreen")}
              >
                <Image
                  style={sideBarStyles.IconCircle}
                  source={require("../../icons/gray/time.png")}
                ></Image>
              </TouchableOpacity>
            )}
          </View>
          <View style={sideBarStyles.gapBetween}></View>
          <View
            style={sideBarStyles.IconView}
            onPress={() => this.props.navigation.navigate("OrderHistoryScreen")}
          >
            {this.props.selectTab === 4 ? (
              <TouchableOpacity style={sideBarStyles.IconButton}>
                <Image
                  style={sideBarStyles.IconImage}
                  source={require("../../icons/white/deadline.png")}
                ></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("OrderHistoryScreen")
                }
              >
                <Image
                  style={sideBarStyles.IconImage}
                  source={require("../../icons/gray/deadline.png")}
                ></Image>
              </TouchableOpacity>
            )}
          </View>
          <View style={sideBarStyles.gapBetween}></View>
          <View style={sideBarStyles.IconView}>
            {this.props.selectTab === 5 ? (
              <TouchableOpacity
                style={sideBarStyles.IconButton}
                onPress={() =>
                  this.props.navigation.navigate("UserPanelScreen")
                }
              >
                <Image
                  style={sideBarStyles.IconImage}
                  source={require("../../icons/white/user.png")}
                ></Image>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("UserPanelScreen")
                }
              >
                <Image
                  style={sideBarStyles.IconImage}
                  source={require("../../icons/gray/user.png")}
                ></Image>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default SideBar;

sideBarStyles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9404e"
  },
  IconView: {
    height: 50,
    justifyContent: "center",
    alignItems: "center"
  },
  Icon: {
    color: "#ec7b8f"
  },
  view1: {
    flex: 1,
    backgroundColor: "#e9404e"
  },
  view2: {
    flex: 4,
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowOpacity: 0.6,
    zIndex: 999
  },
  IconButton: {
    backgroundColor: "#ea5f75",
    width: 45,
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7
  },
  view3: {
    flex: 5,
    backgroundColor: "#fcf6f6"
  },
  bigBadge: {
    height: 20,
    width: 20,
    borderRadius: 25,
    justifyContent: "flex-start",
    alignItems: "center",
    borderColor: "#e94046",
    backgroundColor: "white",
    borderWidth: 1
  },

  onlineStatus: {
    height: 20,
    borderRadius: 25,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderColor: "#65ce83",
    backgroundColor: "white",
    borderWidth: 1
  },
  bigBadgeText: {
    alignSelf: "center",
    fontSize: 12,
    color: "#e94046"
  },
  onlineText: {
    alignSelf: "center",
    fontSize: 10,
    color: "#65ce83"
  },
  containerView: {
    flex: 1,
    flexDirection: "row"
  },
  gapBetween: {
    height: 20
  },
  EEView: {
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  EEText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 23
  },
  marginTop: {
    height: 35,
    justifyContent: "center",
    alignSelf: "center"
  },
  orderTextView: {
    height: 30,
    justifyContent: "center",
    paddingLeft: 20
  },
  IconImage: {
    width: 30,
    height: 34
  },
  IconCircle: {
    width: 34,
    height: 34
  },
  orderText: {
    color: "black",
    fontSize: 23
  },
  boxView: {
    flex: 8,
    justifyContent: "center",
    padding: 30
  },
  bottomTabView: {
    flex: 1,
    backgroundColor: "white"
  },
  onlineStatusView: {
    width: 6,
    height: 6,
    backgroundColor: "#65ce83",
    borderRadius: 30,
    alignSelf: "center"
  }
});
