import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons"; // ✅ Import icons

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Drawer*/}
      <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
        <Ionicons name="menu" size={32} color="white" />
      </TouchableOpacity>

      {/* Playlist*/}
      <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Playlist")}>
        <Text style={styles.boxText}>Playlist</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", justifyContent: "center", alignItems: "center" },
  menuIcon: {
    position: "absolute",
    top: 40,
    left: 20,
    padding: 10,
  },
  box: {
    width: 200,
    height: 100,
    backgroundColor: "#1DB954",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 15,
  },
  boxText: { color: "white", fontSize: 18, fontWeight: "bold" },
});

export default Home;
