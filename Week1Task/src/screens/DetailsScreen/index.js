import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './styles';
import DetailComponent from './DetailComponent';
import DefaultImage from '../../resources/default.png';

const DEFAULT_IMAGE = Image.resolveAssetSource(DefaultImage).uri;

const DetailsScreen = ({navigation, route}) => {
  const {item} = route.params;
  const [imageError, setImageError] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      </ScrollView>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            Alert.alert('Are you sure you want to delete the item?', '', [
              {
                text: 'No',
                onPress: () => {},
              },
              {
                text: 'Yes',
                onPress: () => {
                  navigation.navigate({
                    name: 'Home',
                    params: {item_id: item.id},
                    merge: true,
                  });
                },
              },
            ]);
          }}>
          <Image
            style={styles.icon}
            source={{
              uri: 'https://static-00.iconduck.com/assets.00/delete-icon-1863x2048-6g3nd3xr.png',
            }}
          />
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;
