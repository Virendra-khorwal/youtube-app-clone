import { ScrollView, StyleSheet, Text, View } from "react-native"
import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

const HomeScreen = () => {

    // const [videoData, setVideoData] = useState([])
    let videoData= []

    // useEffect(()=>{
    //     const options = {
    //       method: "GET",
    //       headers: {
    //         
    //       },
    //     };

    //     fetch(
    //       "https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10",
    //       options
    //     )
    //       .then((response) => response.json())
    //       .then((response) => console.log(response))
    //       .catch((err) => console.error(err));
    // }, [])

    
    return (
        <ScrollView style={styles.cardList} >
            {/* {
                videoData.map((videoItem) => 
                    <Card videoItem={videoItem} />
                )
            } */}
            <Card />
            <Card />
            <Card />
            <Card />
        </ScrollView>
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