import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import DetailComponent from './DetailComponent';
import DefaultImage from '../../resources/default.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const DetailsScreen = ({route}) => {
  const item = route.params;
  const [imageError, setImageError] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imagecontainer}>
        <Image
          resizeMode="contain"
          style={
            imageError ? [styles.image, {tintColor: 'white'}] : styles.image
          }
          onError={() => {
            setImageError(true);
          }}
          source={
            imageError
              ? require('../../resources/default.png')
              : {uri: item.image}
          }
        />
      </View>
      <View style={styles.headercontainer}>
        <Text style={styles.headertext}>{item.name}</Text>
      </View>
      <View style={styles.detailscontainer}>
        <Text style={styles.detailstext}>{item.description}</Text>
      </View>
      <View style={styles.datacontainer}>
        <DetailComponent name="Age" value={item.age} />
        {item.density && (
          <DetailComponent name="Density" value={item.density} />
        )}
        {item.radius && <DetailComponent name="Radius" value={item.radius} />}
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
