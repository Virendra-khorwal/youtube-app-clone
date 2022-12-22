import { StyleSheet, View, Text, Image } from "react-native";
import { Colors } from "../constants/color";
import { Shadow } from "react-native-shadow-2";

const Card = ({ videoItem }) => {
  // const {snippet} = {...videoItem}
  // console.log(id);
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{ uri: videoItem.snippet.thumbnails.high.url }}
        />
      </View>
      <View style={styles.cardFooter}>
        <View style={styles.channelAvatar}></View>
        <View style={styles.descContainer}>
          <Text style={styles.textDesc}>{videoItem.snippet.title}</Text>
          <Text style={styles.channelTitle}>
            {videoItem.snippet.channelTitle}
          </Text>
        </View>
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
    fontWeight: "bold",
  },
  descContainer: {
    padding: 4,
    marginLeft:4,
  },
  image: {
    height: 200,
  },
  channelTitle: {
    marginVertical: 6,
  },
  cardFooter: {
    flexDirection: "row",
    paddingVertical: 8,
    backgroundColor: Colors.white,
    paddingHorizontal: 4,
  },
  channelAvatar: {
    width: 50,
    height: 50,
    backgroundColor: Colors.black,
    borderRadius: 50,
  },
});
