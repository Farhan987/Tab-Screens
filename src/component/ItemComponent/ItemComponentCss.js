import { StyleSheet } from "react-native";
export const Styles = StyleSheet.create({
  redDotTextColor: {
    fontSize: 13,
    alignSelf: "flex-end",
    color: "gray"
  },
  redDotView: {
    height: 30,
    paddingLeft: 10,
    flexDirection: "row"
  },
  gap: {
    width: 12
  },
  redDot: {
    width: 10,
    height: 10,
    backgroundColor: "#d93f52",
    borderRadius: 30,
    alignSelf: "center"
  },
  redDotCancle: {
    width: 10,
    height: 10,
    backgroundColor: "#d93f52",
    borderRadius: 30,
    alignSelf: "center",
    justifyContent: "center"
  },

  redDotCancleText: {
    alignSelf: "center",
    color: "white",
    paddingBottom: 14,
    fontSize: 10
  }
});
