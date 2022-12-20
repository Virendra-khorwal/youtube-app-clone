import { StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "../constants/color";
import { Shadow } from "react-native-shadow-2";

const Card = ({ videoItem }) => {
  //   console.log(videoItem.snippet.thumbnails.default.url);
  return (
      <View style={styles.cardContainer}>
        <View style={styles.imageContainer}>
          {/* <Image
          style={styles.image}
          source={{ uri: videoItem.snippet.thumbnails.default.url }}
        /> */}
          <Image
            style={styles.image}
            source={{
              uri: "https://images.unsplash.com/photo-1660032356057-efd3e1eb045c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
            }}
          />
        </View>
        <View style={styles.descContainer}>
          {/* <Text style={styles.textDesc}>{videoItem.snippet.title}</Text> */}
          <Text style={styles.textDesc}>Video Title</Text>
        </View>
      </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    // flexDirection: "column",
    // elevation: 0,
    borderRadius: 4,
    overflow: "hidden",
    marginVertical: 6,
    // justifyContent: 'center'?
    // alignItems: 'center'

    // elevation: 2,
  },
  imageContainer: {
    backgroundColor: Colors.smoky,
  },
  textDesc: {
    // color: Colors.white,
  },
  descContainer: {
    backgroundColor: Colors.white,
    padding: 4,
 
  },
  image: {
    height: 200,
  },
});
