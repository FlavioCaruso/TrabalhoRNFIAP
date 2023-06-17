import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const IntegrantDetails = ({route}) => {
  const {integrant} = route.params;

  return (
    <View style={styles.container}>
      <Image resizeMode="cover" style={styles.image} source={integrant.image} />
      <View style={styles.card}>
        <Text style={styles.name}>{integrant.name}</Text>
        <Text style={styles.rm}>RM: {integrant.rm}</Text>
        <Text style={styles.summary}>{integrant.summary}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 300,
    marginBottom: 20,
    borderRadius: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  rm: {
    fontSize: 16,
    marginBottom: 10,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 8,
    elevation: 2,
    shadowColor: 'black',
  },
  summary: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default IntegrantDetails;
