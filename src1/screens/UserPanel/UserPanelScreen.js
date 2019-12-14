import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Image } from "react-native";

import SideBar from "../../component/sideBar/sideBar";
import UserPanelComponent from "../../component/UserPanelComponents/userPanelComponent";
class UserPanelScreen extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.Container}>
          <View style={styles.containerView}>
            <SideBar selectTab={5} navigation={this.props.navigation} />
            <View style={styles.view2}>
              <View style={styles.marginTop}></View>

              <View
                style={{
                  backgroundColor: "white",
                  height: 400,
                  borderRadius: 10
                }}
              >
                <UserPanelComponent
                  Text={"Opening Hours"}
                  Clicked={() => this.props.navigation.navigate("OpeningHours")}
                />
                <View style={{ height: 0.5, backgroundColor: "#d0d0d0" }} />
                <UserPanelComponent
                  Text={"ADS"}
                  Clicked={() => this.props.navigation.navigate("")}
                />
                <View style={{ height: 0.5, backgroundColor: "#d0d0d0" }} />
                <UserPanelComponent
                  Text={"Total Earning"}
                  Clicked={() =>
                    this.props.navigation.navigate("MostOrderedItem")
                  }
                />
                <View style={{ height: 0.5, backgroundColor: "#d0d0d0" }} />
                <UserPanelComponent
                  Text={"Show Restraunt Rating"}
                  Clicked={() => this.props.navigation.navigate("ReviewScreen")}
                />
                <View style={{ height: 0.5, backgroundColor: "#d0d0d0" }} />
                <UserPanelComponent
                  Text={"Bussiness Information"}
                  Clicked={() =>
                    this.props.navigation.navigate("BussinessInformation")
                  }
                />
                <View style={{ height: 0.5, backgroundColor: "#d0d0d0" }} />
                <UserPanelComponent Text={"QR Code"} />
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default UserPanelScreen;

const styles = StyleSheet.create({
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

  view2: {
    flex: 8,
    backgroundColor: "#f3e0e7",
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowOpacity: 0.6,
    zIndex: 999,
    paddingLeft: "4%",
    paddingRight: "4%"
  },
  containerView: {
    flex: 1,
    flexDirection: "row"
  },
  marginTop: {
    height: 30,
    justifyContent: "center",
    alignSelf: "center"
  }
});
