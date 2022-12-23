import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native"
import Card from "../components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

import {data} from '../data/exploreVideo'

import {X_RAPIDAPI_KEY} from '@env'

const HomeScreen = () => {
  const [videoData, setVideoData] = useState([])

  const renderItem = ({item}) => (
    <Card videoItem={item} />
  )

  useEffect(()=>{
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": X_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
        },
      };

      fetch(
        "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50",
        options
      )
        .then((response) => response.json())
        .then((response) => setVideoData(response.items))
        .catch((err) => console.error(err));
  }, [])

  if(!videoData) return <Text>Loading...</Text>

  return (
    <FlatList style={styles.listContainer}  data={videoData} renderItem={renderItem} />
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