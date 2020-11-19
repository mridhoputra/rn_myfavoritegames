/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, Text, StyleSheet, View, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Axios from 'axios';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'My Favorite Games (All Time)'}}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

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
      <Button title="About Me" onPress={() => navigation.navigate('Profile')} />
      {gameDatas.map((gameData) => {
        return <Games key={gameData.id} game={gameData} />;
      })}
    </ScrollView>
  );
};
const ProfileScreen = () => {
  return (
    <View>
      <Text>Hello</Text>
      <Text>Hellow</Text>
    </View>
  );
};

const Games = ({game}) => {
  let img_name = game.photo;
  console.log(img_name);
  return (
    <View style={styles.game_container}>
      <Image style={styles.game_img} source={require(game.photo)} />
      <View style={styles.game_detail_container}>
        <Text style={styles.game_title}>{game.title}</Text>
        <Text style={styles.game_properties}>{game.first_impression}</Text>
        <View style={styles.game_detail_table}>
          <View style={styles.game_table_1}>
            <Text style={styles.game_properties}>Played Since</Text>
            <Text style={styles.game_properties}>Platform Used</Text>
            <Text style={styles.game_properties}>Genre</Text>
          </View>
          <View style={styles.game_table_2}>
            <Text>:</Text>
            <Text>:</Text>
            <Text>:</Text>
          </View>
          <View style={styles.game_table_3}>
            <Text>{game.played_since}</Text>
            <Text>{game.platform}</Text>
            <Text>{game.genres}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  game_container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginHorizontal: 8,
    marginTop: 8,
    padding: 8,
    flexDirection: 'row',
  },
  game_img: {
    width: 75,
    height: 100,
    backgroundColor: 'gray',
  },
  game_detail_container: {
    marginLeft: 8,
    width: '100%',
  },
  game_title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  game_detail_table: {
    flexDirection: 'row',
  },
  game_table_1: {
    flex: 0.25,
  },
  game_table_2: {
    flex: 0.025,
  },
  game_table_3: {
    flex: 0.3,
  },
  game_properties: {
    color: 'gray',
    fontSize: 14,
  },
});

export default App;
