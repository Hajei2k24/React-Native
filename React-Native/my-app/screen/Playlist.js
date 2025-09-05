import React from "react";
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons"; // for back arrow
import { useNavigation } from "@react-navigation/native";

const playlistData = [
  { id: "1", title: "party favor", artist: "Billie Eilish", image: "https://i.imgur.com/X1y1cC0.png" },
  { id: "2", title: "comethru", artist: "Jeremy Zucker", image: "https://i.imgur.com/W0Jg0WZ.png" },
  { id: "3", title: "Supermarket Flowers", artist: "Ed Sheeran", image: "https://i.imgur.com/2tD1F5u.png" },
  { id: "4", title: "Eyes Blue Like The Atlantic", artist: "Sista Prod, Powfu, Alec Benjamin", image: "https://i.imgur.com/0ZqEtkA.png" },
  { id: "5", title: "Missin You Crazy", artist: "Russ", image: "https://i.imgur.com/3g7nmJC.png" },
  { id: "6", title: "Sunflower - Spider-Man: Into...", artist: "Post Malone, Swae Lee", image: "https://i.imgur.com/8QfzzgH.png" },
  { id: "7", title: "Candy Paint", artist: "Post Malone", image: "https://i.imgur.com/hdg9j3Q.png" },
];

const Playlist = () => {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.image }} style={styles.albumArt} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.artist}>{item.artist}</Text>
      </View>
      <TouchableOpacity style={styles.menuButton}>
        <Text style={styles.menuText}>⋯</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("Home")}>
        <AntDesign name="arrowleft" size={24} color="white" />
        <Text style={styles.backText}>Home</Text>
      </TouchableOpacity>

      <FlatList
        data={playlistData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: 40,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  backText: {
    color: "#fff",
    fontSize: 18,
    marginLeft: 5,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  albumArt: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  artist: {
    color: "#aaa",
    fontSize: 14,
    marginTop: 2,
  },
  menuButton: {
    paddingHorizontal: 10,
  },
  menuText: {
    color: "#fff",
    fontSize: 22,
  },
});

export default Playlist;
