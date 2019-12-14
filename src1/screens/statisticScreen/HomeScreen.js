import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Icon, Content, Badge } from "native-base";
import BoxView from "./BoxView";
import CardView from "./CardView";
import SideBar from "../../component/sideBar/sideBar";
import PopUpComponent from "../../component/popupComponent/popup";
import FreeeGifts from "../../component/FreeGiftComponent/FreeGriftComponent";
import Modal from "react-native-modal";
class SplashScreen extends Component {
  state = {
    modalVisible: false,
    modalVisible1: false
  };
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  render() {
    return (
      <React.Fragment>
        <View style={styles.Container}>
          <View style={styles.containerView}>
            <SideBar navigation={this.props.navigation} selectTab={1} />
            <View style={styles.view2}>
              <View style={styles.marginTop}></View>
              <Content>
                <View style={styles.orderTextView}>
                  <Text style={styles.orderText}>Orders</Text>
                </View>
                <BoxView
                  dataValue={1}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
                <BoxView
                  dataValue={1}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
                <BoxView
                  dataValue={0.65}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
                <BoxView
                  dataValue={0.65}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
                <BoxView
                  dataValue={0.65}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
                <BoxView
                  dataValue={0.4}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
                <BoxView
                  dataValue={0.4}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
                <BoxView
                  dataValue={0.4}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
                <BoxView
                  dataValue={0.4}
                  onGiftModalOpen={() => this.setState({ modalVisible1: true })}
                  DelayOrderPopup={() => this.setState({ modalVisible: true })}
                />
              </Content>
            </View>
            <View style={styles.view3}>
              <View style={styles.boxView}>
                <View style={styles.card}>
                  <Text
                    style={{
                      alignSelf: "center",
                      color: "#5dc074",
                      fontSize: 50
                    }}
                  >
                    Online
                  </Text>
                </View>
              </View>
              <View style={styles.bottomTabView}>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    justifyContent: "flex-end",
                    alignItem: "flex-end",
                    paddingLeft: 30
                  }}
                >
                  <Text style={{ fontSize: 10 }}>
                    Order queue Next waiting to Accept
                  </Text>
                </View>
                <View style={{ height: 10 }}></View>
                <View
                  style={{
                    flex: 1,
                    backgroundColor: "white",
                    flexDirection: "row",
                    paddingLeft: 30
                  }}
                >
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      backgrpoundColor: "green",
                      alignItems: "flex-end",
                      justifyContent: "flex-end",
                      paddingRight: 13
                    }}
                  >
                    <Badge style={styles.onlineStatus}>
                      <View
                        style={{
                          flex: 1,
                          flexDirection: "row",
                          backgrpoundColor: "green",
                          alignItems: "flex-end",
                          justifyContent: "flex-end"
                        }}
                      >
                        <View
                          style={{
                            backgroundColor: "#d93f52",
                            height: 15,
                            alignSelf: "center"
                          }}
                        ></View>
                        <View style={styles.onlineStatusView}></View>
                        <Text style={styles.onlineText}>Online</Text>
                      </View>
                    </Badge>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Modal transparent={true} isVisible={this.state.modalVisible}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <View style={styles.delayModalPopUp}>
              <PopUpComponent
                onClose={() => this.setState({ modalVisible: false })}
              />
            </View>
          </View>
        </Modal>
        <Modal transparent={true} isVisible={this.state.modalVisible1}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "white",
                // width: "50%",
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "center",
                borderRadius: 30
              }}
            >
              <FreeeGifts
                onClose={() => this.setState({ modalVisible1: false })}
              />
            </TouchableOpacity>
          </View>
        </Modal>
      </React.Fragment>
    );
  }
}
export default SplashScreen;

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
    width: 40,
    height: 40,
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
    justifyContent: "center"
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
    fontSize: 23,
    paddingLeft: 12
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
  },
  delayModalPopUp: {
    backgroundColor: "white",
    // width: "50%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 30,
    shadowOffset: { width: 100, height: 100 },
    shadowColor: "gray",
    shadowOpacity: 0.1
  },
  card: {
    width: "97%",
    alignSelf: "center",

    justifyContent: "center",
    alignItems: "center",
    minHeight: 400,

    shadowOffset: { width: 2, height: 2 },
    shadowColor: "gray",
    shadowOpacity: 0.6,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#f0f0f0",
    borderRadius: 10,
    marginTop: 7,
    padding: 20
  }
});
