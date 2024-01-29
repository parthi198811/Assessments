import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import DetailComponent from './DetailComponent';

const DetailsScreen = ({route}) => {
  const item = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image style={styles.image} source={{uri: item.image}} />
      </View>
      <View style={styles.headercontainer}>
        <Text style={styles.headertext}>{item.name}</Text>
      </View>
      <View style={styles.detailscontainer}>
        <Text style={styles.detailstext}>{item.description}</Text>
      </View>
      <View style={styles.datacontainer}>
        <DetailComponent name="Age" value={item.age} />
        <DetailComponent name="Density" value={item.density} />
        <DetailComponent name="Radius" value={item.radius} />
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
