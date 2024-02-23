import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import MapView, {Callout, Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {LocationHelper} from '@helpers';
import IconM from 'react-native-vector-icons/dist/MaterialCommunityIcons';

const MapScreen = () => {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    LocationHelper.getCurrentLocation(location => {
      setCurrentLocation(location);
    });

    LocationHelper.watchLocation(location => {
      setCurrentLocation(location);
    });
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        showsUserLocation={true}
        showsMyLocationButton={true}
        style={styles.map}
        region={{
          latitude: currentLocation
            ? currentLocation?.coords.latitude
            : 37.78825,
          longitude: currentLocation
            ? currentLocation?.coords.longitude
            : -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}>
        <Marker
          title="Test"
          coordinate={{
            latitude: currentLocation?.coords.latitude,
            longitude: currentLocation?.coords.longitude,
          }}>
          <MyCustomMarker {...Marker} />
          <Callout>
            <Text>Test</Text>
          </Callout>
        </Marker>
      </MapView>
    </View>
  );
};

export default MapScreen;

export const MyCustomMarker = () => {
  return (
    <View>
      <IconM name="motorbike" color={'blue'} size={40} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
