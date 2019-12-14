import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity
} from "react-native";

import SideBar from "../../component/sideBar/sideBar";
import TableComponent from "../../component/OrderHistoryComponent/OrderHistoryTableComponent";
import TableReservationHeader from "../../component/OrderHistoryComponent/OrderHistoryTableHeader";
import OderHistoryPicking from "../../component/OrderHistoryComponent/OrderHistoryPickingComponent";
import OderHistoryPickingHeader from "../../component/OrderHistoryComponent/OrderHistoryPickingHeader";
class OrderHistory extends Component {
  state = { selectDate: false, showAll: false, clicked: 1 };
  toggleData = data => {
    this.setState({ clicked: data });
  };
  render() {
    return (
      <React.Fragment>
        <View style={styles.Container}>
          <View style={styles.containerView}>
            <SideBar navigation={this.props.navigation} selectTab={4} />
            <View style={styles.view2}>
              <View
                style={{
                  flex: 1.4,
                  borderTopLeftRadius: 15,
                  backgroundColor: "white"
                }}
              >
                <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    paddingLeft: 50,
                    flexDirection: "row",
                    paddingRight: 50
                  }}
                >
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 22 }}>Opening History</Text>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      alignItems: "center",
                      justifyContent: "flex-end",
                      flexDirection: "row"
                    }}
                  >
                    {this.state.showAll ? (
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showAll: false });
                        }}
                      >
                        <View style={styles.radioButtonUnfilled}></View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity>
                        <View
                          style={[
                            styles.radioButtonUnfilled,
                            {
                              borderColor: "red",
                              alignItems: "center",
                              justifyContent: "center"
                            }
                          ]}
                        >
                          <View style={styles.radioButtonFilled}></View>
                        </View>
                      </TouchableOpacity>
                    )}
                    <View style={{ width: 10 }}></View>
                    <Text style={{ fontSize: 17, color: "#656565" }}>
                      Show All
                    </Text>
                    <View style={{ width: 30 }}></View>

                    <View style={{ width: 10 }}></View>
                    {this.state.showAll ? (
                      <TouchableOpacity>
                        <View
                          style={[
                            styles.radioButtonUnfilled,
                            {
                              borderColor: "red",
                              alignItems: "center",
                              justifyContent: "center"
                            }
                          ]}
                        >
                          <View style={styles.radioButtonFilled}></View>
                        </View>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ showAll: true });
                        }}
                      >
                        <View style={styles.radioButtonUnfilled}></View>
                      </TouchableOpacity>
                    )}
                    <View style={{ width: 10 }}></View>
                    <Text style={{ fontSize: 17, color: "#656565" }}>
                      Select a Date
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.5,
                    // justifyContent: "center",
                    paddingLeft: 50,
                    flexDirection: "row"
                  }}
                >
                  <View>
                    <TouchableOpacity onPress={() => this.toggleData(1)}>
                      {this.state.clicked === 1 ? (
                        <Text style={{ fontSize: 18, color: "red" }}>
                          Picking
                        </Text>
                      ) : (
                        <Text style={{ fontSize: 18, color: "#d0d0d0" }}>
                          Picking
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: 30 }}></View>
                  <View>
                    <TouchableOpacity onPress={() => this.toggleData(2)}>
                      {this.state.clicked === 2 ? (
                        <Text style={{ fontSize: 18, color: "red" }}>
                          Dinner
                        </Text>
                      ) : (
                        <Text style={{ fontSize: 18, color: "#d0d0d0" }}>
                          Dinner
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: 30 }}></View>
                  <View>
                    <TouchableOpacity onPress={() => this.toggleData(3)}>
                      {this.state.clicked === 3 ? (
                        <Text style={{ fontSize: 18, color: "red" }}>
                          Table Reservation
                        </Text>
                      ) : (
                        <Text style={{ fontSize: 18, color: "#d0d0d0" }}>
                          Table Reservation
                        </Text>
                      )}
                    </TouchableOpacity>
                  </View>
                </View>
                <View
                  style={{
                    flex: 0.3,
                    // justifyContent: "center",
                    paddingLeft: 50,
                    flexDirection: "row",
                    alignItems: "flex-end"
                  }}
                >
                  {this.state.clicked === 1 ? (
                    <View style={[styles.bottomLine, { width: 70 }]}></View>
                  ) : (
                    <View style={{ width: 50 }}></View>
                  )}
                  <View style={{ width: 35 }}></View>
                  {this.state.clicked === 2 ? (
                    <View style={[styles.bottomLine, { width: 65 }]}></View>
                  ) : (
                    <View style={{ width: 50 }}></View>
                  )}
                  <View style={{ width: 35 }}></View>
                  {this.state.clicked === 3 ? (
                    <View style={styles.bottomLine}></View>
                  ) : (
                    <View style={{ width: 50 }}></View>
                  )}
                </View>
              </View>
              <View style={{ flex: 8, paddingLeft: "5%", paddingRight: "5%" }}>
                <View style={styles.marginTop}></View>

                <View style={styles.marginBottom}></View>
                <View
                  style={{
                    backgroundColor: "white",
                    height: "80%",
                    borderRadius: 10
                  }}
                >
                  {this.state.clicked === 3 ? (
                    <TableReservationHeader />
                  ) : (
                    false
                  )}
                  {this.state.clicked === 3 ? (
                    <ScrollView>
                      <TableComponent
                        showCancle={true}
                        statusSubHeadText="Waiting"
                        statusSubHeadColor="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <TableComponent
                        showCancle={false}
                        statusSubHeadText="Complete"
                        statusSubHeadColor="#5dc074"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <TableComponent
                        showCancle={false}
                        statusSubHeadText="Cancle"
                        statusSubHeadColor="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>

                      <TableComponent
                        showCancle={true}
                        statusSubHeadText="Waiting"
                        statusSubHeadColor="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <TableComponent
                        showCancle={false}
                        statusSubHeadText="Complete"
                        statusSubHeadColor="#5dc074"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <TableComponent
                        showCancle={false}
                        statusSubHeadText="Cancle"
                        statusSubHeadColor="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <TableComponent
                        showCancle={false}
                        statusSubHeadText="Waiting"
                        statusSubHeadColor="red"
                      />
                    </ScrollView>
                  ) : (
                    false
                  )}
                  {this.state.clicked === 1 ? (
                    <OderHistoryPickingHeader />
                  ) : (
                    false
                  )}
                  {this.state.clicked === 1 ? (
                    <ScrollView>
                      <OderHistoryPicking
                        StatusSubHeader={"on going order"}
                        colorStatus="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <OderHistoryPicking
                        StatusSubHeader={"Complete "}
                        colorStatus="green"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <OderHistoryPicking
                        StatusSubHeader={"Cancle"}
                        colorStatus="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <OderHistoryPicking
                        StatusSubHeader={"on going order"}
                        colorStatus="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <OderHistoryPicking
                        StatusSubHeader={"Complete"}
                        colorStatus="green"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <OderHistoryPicking
                        StatusSubHeader={"Cancle"}
                        colorStatus="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <OderHistoryPicking
                        StatusSubHeader={"Cancle"}
                        colorStatus="red"
                      />
                      <View style={styles.gapLine}>
                        <View style={styles.lineColor}></View>
                      </View>
                      <OderHistoryPicking
                        StatusSubHeader={"Cancle"}
                        colorStatus="red"
                      />
                    </ScrollView>
                  ) : (
                    false
                  )}
                </View>
              </View>
            </View>
          </View>
        </View>
      </React.Fragment>
    );
  }
}
export default OrderHistory;

const styles = StyleSheet.create({
  lineColor: {
    borderWidth: 0.4,
    backgroundColor: "#d0d0d0"
  },
  gapLine: {
    height: 5,
    paddingLeft: "3%",
    paddingRight: "3%"
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
    width: 150,
    height: 1
  }
});
