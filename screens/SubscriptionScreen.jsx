import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { channelDetails } from "../data/channelDetails";
import { Colors } from "../constants/color";
const shortNumbers = require("short-numbers");

const SubscriptionScreen = () => {
//   console.log(channelDetails);
  return (
    <ScrollView style={styles.outerContainer}>
        <View>
            <Text style={styles.head}>
                Subscribed Channels
            </Text>
        </View>
      {channelDetails.map((channel) => (
        <View style={styles.innerContainer}>
          <View>
            <Image
              style={styles.image}
              source={{ uri: channel.items[0].snippet.thumbnails.medium.url }}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.title}>{channel.items[0].snippet.title}</Text>
            <Text>{shortNumbers(channel.items[0].statistics.subscriberCount)} Subscribers</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    image: {
        height: 60,
        width: 60,
        borderRadius:100,
    },
    innerContainer: {
        marginVertical: 4,
        flexDirection: 'row',
        backgroundColor: Colors.smoky,
        padding:4,
        borderRadius: 4,
        // elevation: 4
    },
    textContainer: {
        marginHorizontal: 10,
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold'
    },
    outerContainer : {
        paddingHorizontal:12,
        paddingTop:4,
    },
    head: {
        fontSize: 20,
        marginBottom: 4
    }
})

export default SubscriptionScreen;
