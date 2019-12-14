import React, { Component } from "react";
import { View, StyleSheet, Text, ScrollView, TextInput } from "react-native";

import SideBar from "../../component/sideBar/sideBar";

class BussinessInformation extends Component {
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
                  <Text style={{ fontSize: 25 }}>Reviews</Text>
                </View>
              </View>
              <View style={{ flex: 8, paddingLeft: "4%", paddingRight: "4%" }}>
                <View style={styles.marginTop}></View>
                <View
                  style={{
                    backgroundColor: "white",
                    height: 450,
                    borderRadius: 10
                  }}
                >
                  <View style={styles.marginTopWhiteSpace}></View>
                  <View style={styles.InputFeildView}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.InputText}>Store Name</Text>
                      <View style={{ height: 5 }}></View>
                      <TextInput placeholder="" style={styles.InputFeild} />
                    </View>

                    <View style={{ flex: 1 }}>
                      <Text style={styles.InputText}>Phone Number</Text>
                      <View style={{ height: 5 }}></View>
                      <TextInput placeholder="" style={styles.InputFeild} />
                    </View>
                  </View>
                  <View style={styles.InputFeildView}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.InputText}>Street</Text>
                      <View style={{ height: 5 }}></View>
                      <TextInput placeholder="" style={styles.InputFeild} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.InputText}>Apt/Suite</Text>
                      <View style={{ height: 5 }}></View>
                      <TextInput placeholder="" style={styles.InputFeild} />
                    </View>
                  </View>
                  <View style={styles.InputFeildView}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.InputText}>Subrub</Text>
                      <View style={{ height: 5 }}></View>
                      <TextInput placeholder="" style={styles.InputFeild} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.InputText}>POS Code</Text>
                      <View style={{ height: 5 }}></View>
                      <TextInput placeholder="" style={styles.InputFeild} />
                    </View>
                  </View>
                  <View style={styles.InputFeildView}>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.InputText}>Banck Account Number</Text>
                      <View style={{ height: 5 }}></View>
                      <TextInput placeholder="" style={styles.InputFeild} />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.InputText}>BSB Number</Text>
                      <View style={{ height: 5 }}></View>
                      <TextInput placeholder="" style={styles.InputFeild} />
                    </View>
                  </View>
                  <View style={{ flex: 1, paddingLeft: 30 }}>
                    <Text style={styles.InputText}>Payment</Text>
                    <View style={{ height: 5 }}></View>
                    <TextInput
                      placeholder=""
                      style={[styles.InputFeild, { width: "95%" }]}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default BussinessInformation;

const styles = StyleSheet.create({
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
    height: 30,
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
  }
});
