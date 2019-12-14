import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";

import SideBar from "../../component/sideBar/sideBar";
import OpeningHourComponent from "../../component/OpeningHoursComponent/OpeningHoursComponent";
class OpeningHours extends Component {
  render() {
    return (
      <React.Fragment>
        <View style={styles.Container}>
          <View style={styles.containerView}>
            <SideBar selectTab={5} navigation={this.props.navigation} />
            <View style={styles.view2}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  borderTopLeftRadius: 15,
                  backgroundColor: "white"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    paddingLeft: 50
                  }}
                >
                  <Text style={{ fontSize: 25 }}>Opening Hours</Text>
                </View>
              </View>
              <View style={{ flex: 8, paddingLeft: "5%", paddingRight: "5%" }}>
                <View style={styles.marginTop}></View>
                <Text style={{ fontSize: 18, color: "#222222" }}>
                  Dinning Hours
                </Text>
                <View style={styles.marginBottom}></View>
                <View
                  style={{
                    backgroundColor: "white",
                    height: "70%",
                    borderRadius: 10
                  }}
                >
                  <OpeningHourComponent day={"Monday"} />
                  <View style={styles.gapLine}>
                    <View style={styles.Line}></View>
                  </View>
                  <OpeningHourComponent day={"Tuesday"} />
                  <View style={styles.gapLine}>
                    <View style={styles.Line}></View>
                  </View>
                  <OpeningHourComponent day={"Wensday"} />
                  <View style={styles.gapLine}>
                    <View style={styles.Line}></View>
                  </View>
                  <OpeningHourComponent day={"Thursday"} />
                  <View style={styles.gapLine}>
                    <View style={styles.Line}></View>
                  </View>
                  <OpeningHourComponent day={"Friday"} />
                  <View style={styles.gapLine}>
                    <View style={styles.Line}></View>
                  </View>
                  <OpeningHourComponent day={"Saturday"} />
                  <View style={styles.gapLine}>
                    <View style={styles.Line}></View>
                  </View>
                  <OpeningHourComponent day={"Sunday"} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default OpeningHours;

const styles = StyleSheet.create({
  Line: {
    borderWidth: 0.1,
    backgroundColor: "#cbcbcb",
    height: 1
  },
  gapLine: {
    height: 7,
    paddingLeft: 30,
    paddingRight: 30
  },
  Container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e9404e"
  },
  view2: {
    flex: 9,
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
  InputFeild: {
    borderWidth: 1,
    borderColor: "#d0d0d0",
    borderRadius: 7,
    height: 45,
    width: "90%"
  },
  InputFeildView: {
    flex: 1,
    flexDirection: "row",
    paddingLeft: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  InputText: {
    fontSize: 20
  },
  marginBottom: {
    height: 10,
    justifyContent: "center",
    alignSelf: "center"
  }
});
