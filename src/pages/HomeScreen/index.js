import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import Axios from 'axios';
import Games from '../Games';
const HomeScreen = ({navigation}) => {
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
      <Button
        title="About Me"
        onPress={() => navigation.navigate('GameDetail', {gameId: 1})}
      />
      {gameDatas.map((gameData) => {
        return (
          <TouchableOpacity
            key={gameData.id}
            onPress={() =>
              navigation.navigate('GameDetail', {gameId: gameData.id})
            }>
            <Games key={gameData.id} game={gameData} />
          </TouchableOpacity>
        );
      })}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
