import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

import {data} from '../data/exploreVideo'

import {X_RAPIDAPI_KEY} from '@env'

const HomeScreen = () => {
  // const [videoData, setVideoData] = useState([])
  // let videoData = items;
  // console.log(data.snippet)

  const renderItem = ({item}) => (
    <Card videoItem={item} />
  )

  useEffect(()=>{
      const options = {
        method: "GET",
        headers: {
          // "X-RapidAPI-Key": X_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      fetch(
        "https://youtube-v31.p.rapidapi.com/captions?part=snippet&videoId=M7FIvfx5J10",
        options
      )
        .then((response) => response.json())
        .then((response) => console.log(response))
        .catch((err) => console.error(err));
  }, [])

  return (
    <FlatList style={styles.listContainer} keyExtractor={(item, index) => {item.id.videoId}} data={data} renderItem={renderItem} />
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
    cardList: {
        flex: 1,
        paddingHorizontal: 14,
        marginTop: 10,

    },
    listContainer : {
      paddingHorizontal: 10,
    }
})