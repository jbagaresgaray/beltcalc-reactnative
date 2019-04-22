"use strict";
import { StyleSheet } from "react-native";

module.exports = StyleSheet.create({
  appinfo: {
    fontWeight: "300",
    fontSize: 18,
    marginLeft: 12,
    marginRight: 12
  },
  iconStyle: {
    marginRight: 16
  },
  intro: {
    paddingTop: 16,
    alignSelf: "center",
    flex: 1,
  },
  introBtn: {
    width: 200,
    height: 200,
    marginBottom: 10,
    backgroundColor: "#f3f3f3",
    borderColor: "#0a1f38",
    marginTop: 16,
    paddingTop: 0,
    paddingRight: 16,
    paddingBottom: 0,
    paddingLeft: 16,
    borderRadius: 4,
    display: "flex",
  },
  introImg: {
    maxWidth: "100%",
    width: "100%",
    height: 120
  },
  introText: {
    fontSize: 18,
    fontWeight: "600",
    paddingBottom: 10,
    color: "#b24825",
    position: "absolute",
    bottom: 0
  }
});
