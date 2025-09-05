import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const CustomDrawer = (props) => {
  const { navigation } = props;

  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
      {/* Profile Circle */}
      <View style={styles.profileContainer}>
        <View style={styles.profileCircle}>
          <Text style={styles.profileText}>P</Text>
        </View>
        <Text style={styles.username}>User Name</Text>
      </View>

      {/* Drawer Options */}
      <View style={styles.drawerItems}>
        <TouchableOpacity style={styles.item} onPress={() => alert("Add Account pressed")}>
          <Ionicons name="person-add" size={22} color="white" />
          <Text style={styles.itemText}>Add Account</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => alert("What's New pressed")}>
          <Ionicons name="newspaper-outline" size={22} color="white" />
          <Text style={styles.itemText}>What’s New</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => alert("Recent pressed")}>
          <MaterialIcons name="history" size={22} color="white" />
          <Text style={styles.itemText}>Recent</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.item} onPress={() => navigation.navigate("Settings")}>
          <Ionicons name="settings-outline" size={22} color="white" />
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#000",
  },

  profileContainer: {
    alignItems: "center",
    paddingVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  profileCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1DB954",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  profileText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  username: {
    color: "white",
    fontSize: 16,
    marginTop: 5,
  },

  drawerItems: {
    marginTop: 20,
  },
  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  itemText: {
    color: "white",
    fontSize: 16,
    marginLeft: 15,
  },
});


export default CustomDrawer;
