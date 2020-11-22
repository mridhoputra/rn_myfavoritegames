import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const Games = ({game}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri: `${game.photo}`}} />
      <View style={styles.detail_container}>
        <Text style={styles.title}>{game.title}</Text>
        <Text style={styles.properties}>{game.first_impression}</Text>
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
            <Text>{game.played_since}</Text>
            <Text>{game.platform}</Text>
            <Text>{game.genres}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Games;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginHorizontal: 8,
    marginTop: 4,
    marginBottom: 4,
    padding: 8,
    flexDirection: 'row',
  },
  img: {
    width: 75,
    height: 100,
    backgroundColor: 'gray',
  },
  detail_container: {
    marginLeft: 8,
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detail_table: {
    flexDirection: 'row',
  },
  table_1: {
    flex: 0.35,
  },
  table_2: {
    flex: 0.025,
  },
  table_3: {
    flex: 0.6475,
  },
  properties: {
    color: 'gray',
    fontSize: 14,
  },
});
