import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {List} from 'react-native-paper';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUserLarge} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {integrants} from '../data';

const IntegrantList = () => {
  const navigation = useNavigation();

  const IntegrantItem = ({name, icon, summary, rm, image}) => {
    const handleItemClick = () => {
      navigation.navigate('IntegrantDetails', {
        integrant: {name, icon, summary, rm, image},
      });
    };

    return (
      <TouchableOpacity onPress={handleItemClick} style={styles.listItem}>
        <View style={styles.itemContainer}>
          <Image source={image} style={styles.image} />
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Image
          source={require('../assets/images/banner.png')}
          style={styles.banner}
          resizeMode="cover"
        />
        {integrants.map(prop => (
          <IntegrantItem key={prop.id} {...prop} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: 20,
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  listItem: {
    width: '94%',
    alignSelf: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    marginBottom: 10,
    elevation: 7,
    shadowColor: 'black',
  },
});

export default IntegrantList;
