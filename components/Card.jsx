import { StyleSheet, View, Text } from "react-native"
import { Colors } from "../constants/color";

const Card = () => {
    return <View style={styles.cardContainer}>
        <View style={styles.imageContainer} >
            <Text>
                Image Here
            </Text>
        </View>
        <View style={styles.textDesc} >
            <Text>
                Description Here
            </Text>
        </View>
    </View>
}

export default Card;

const styles= StyleSheet.create({
    cardContainer: {
        // flex:1,
        // elevation: 0,
        borderRadius: 4,
        overflow: 'hidden'
    },
    imageContainer: {
        backgroundColor: Colors.smoky,
    },
    textDesc: {
        backgroundColor: Colors.black
    }
})