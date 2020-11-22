import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Axios from 'axios';

const GameDetail = ({route}) => {
  let mounted = true;
  const gameId = route.params.gameId;
  const [gameData, setGameData] = useState({});

  useEffect(() => {
    if (mounted) {
      getData();
    }
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
    <View>
      <Image source={{uri: gameData.big_photo}} style={styles.img_banner} />
      <Text>Game Title : {gameData.title}</Text>
    </View>
  );
};

export default GameDetail;

const styles = StyleSheet.create({
  img_banner: {
    flex: 1,
    height: 70,
  },
});
