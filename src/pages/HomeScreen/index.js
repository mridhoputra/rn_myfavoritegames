import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Axios from 'axios';
import Games from '../Games';
import icon_profile from '../../assets/icon/profile.png';

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image source={icon_profile} style={styles.icon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const [gameDatas, setGameDatas] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get(
      'https://my-json-server.typicode.com/mridhoputra/rn_myfavoritegames/games',
    ).then((res) => {
      console.log('GET Response: ', res);
      setGameDatas(res.data);
    });
  };

  return (
    <ScrollView>
      {gameDatas.map((gameData) => {
        return (
          <TouchableOpacity
            key={gameData.id}
            onPress={() =>
              navigation.navigate('Game Detail', {gameId: gameData.id})
            }>
            <Games key={gameData.id} game={gameData} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    marginRight: 14,
  },
});
