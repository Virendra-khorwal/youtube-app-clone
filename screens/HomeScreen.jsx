import { StyleSheet, Text, View } from "react-native"
import Card from "../components/Card";

const HomeScreen = () => {
    return (
        <View style={styles.cardList} >
            <Card />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        paddingHorizontal: 14,
        marginTop: 10,
    }
})