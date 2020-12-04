import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-elements';
import Axios from 'axios';
import {ScrollView} from 'react-native-gesture-handler';

const GameDetail = ({route}) => {
  let mounted = true;
  const gameId = route.params.gameId;
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    if (mounted) {
      getData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => (mounted = false);
  }, []);

  const getData = () => {
    Axios.get(
      `https://my-json-server.typicode.com/mridhoputra/rn_myfavoritegames/games/${gameId}`,
    ).then((res) => {
      console.log('GET Response: ', res);
      setGameData(res.data);
    });
  };

  return (
    <ScrollView>
      <Image source={{uri: gameData.big_photo}} style={styles.img_banner} />
      <Image source={{uri: gameData.logo}} style={styles.logo} />
      <Text style={styles.title}>{gameData.title}</Text>
      <Text style={styles.quote}>{gameData.quote}</Text>
      <Card containerStyle={styles.card_detail}>
        <Text style={styles.detail_title}>Game Info: </Text>
        <View style={styles.detail_table}>
          <View style={styles.table_1}>
            <Text style={styles.properties}>Played Since</Text>
            <Text style={styles.properties}>Platform Used</Text>
            <Text style={styles.properties}>Genre</Text>
          </View>
          <View style={styles.table_2}>
            <Text>:</Text>
            <Text>:</Text>
            <Text>:</Text>
          </View>
          <View style={styles.table_3}>
            <Text>{gameData.played_since}</Text>
            <Text>{gameData.platform}</Text>
            <Text>{gameData.genres}</Text>
          </View>
        </View>
      </Card>
      <Card containerStyle={styles.card_screenshot}>
        <Text style={styles.screenshot_title}>Screenshot:</Text>
        <Image source={{uri: gameData.screenshot}} style={styles.screenshot} />
      </Card>
    </ScrollView>
  );
};

export default GameDetail;

const styles = StyleSheet.create({
  card_detail: {
    padding: 8,
  },
  card_screenshot: {
    padding: 0,
  },
  img_banner: {
    width: '100%',
    height: 200,
  },
  logo: {
    marginTop: -35,
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    alignSelf: 'center',
  },
  title: {
    marginTop: 4,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
  quote: {
    marginTop: 4,
    paddingHorizontal: 8,
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
    fontStyle: 'italic',
  },
  detail_title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  screenshot_title: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 8,
    marginBottom: 4,
  },
  detail_table: {
    flexDirection: 'row',
  },
  table_1: {
    flex: 0.3,
  },
  table_2: {
    flex: 0.025,
  },
  table_3: {
    flex: 0.6475,
  },
  screenshot: {
    width: '100%',
    height: 250,
  },
  properties: {
    color: 'gray',
    fontSize: 14,
  },
});
