import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, Text, View } from "react-native";
import { primaryColor } from "../constants/Colors";
import Layout from "../constants/Layout";

interface PrizeHeaderParams {
  taskCount: number
  point: number
}

export default function PrizeHeader(params: PrizeHeaderParams) {
  return (
    <View>
      <View style={styles.container}>
        <Image source={require("../assets/images/prize_bg.png")} style={styles.headerBg} />
        <Text style={styles.headerTitie}>做任务 享免费排队加速</Text>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={["rgba(255, 255, 255, 0.3)", "rgba(255, 255, 255, 0)"]} style={styles.headerSubtitleBg}>
          <Text style={styles.headerSubTitle}>{`今日还可以完成${params.taskCount}个任务`}</Text>
        </LinearGradient>
        <PointView point={params.point} />
      </View>
      <View style={styles.label}>
        <Text style={styles.labelTite}>每日任务</Text>
        <Text style={styles.labelSubTite}>任务于每日00:00点更新</Text>
      </View>
    </View>
  );
}

function PointView(params: { point: number }) {
  return (
    <View style={styles.pointView}>
      <View>
        <Text style={styles.pointTitle}>{params.point}</Text>
        <Text style={styles.pointSubTitle}>已获得免排队积分</Text>
      </View>
      <Image source={require("../assets/images/ic_nav.png")} style={styles.pointNav} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Layout.window.width / 1.5 + 48
  },
  headerBg: {
    width: Layout.window.width,
    height: Layout.window.width / 1.5,
    resizeMode: "contain"
  },
  headerTitie: {
    position: "absolute",
    fontSize: 26,
    color: "white",
    marginTop: 80,
    marginLeft: 15
  },
  headerSubTitle: {
    fontSize: 14,
    color: "white"
  },
  headerSubtitleBg: {
    position: "absolute",
    height: 30,
    marginTop: 137,
    marginLeft: 15,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  },
  pointView: {
    backgroundColor: "white",
    marginHorizontal: 15,
    paddingHorizontal: 20,
    borderRadius: 12,
    height: 96,
    width: Layout.window.width - 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    marginTop: Layout.window.width / 1.5 - 48
  },
  pointTitle: {
    color: primaryColor,
    fontSize: 32,
    fontWeight: "bold",
    fontStyle: "italic"
  },
  pointSubTitle: {
    color: primaryColor,
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5
  },
  pointNav: {
    width: 66,
    height: 66,
  },
  label: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    alignItems: "center",
  },
  labelTite: {
    fontSize: 16,
    fontWeight: "bold"
  },
  labelSubTite: {
    fontSize: 14,
    color: "#B2B2B2"
  }
})