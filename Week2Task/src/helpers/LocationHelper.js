import Geolocation from 'react-native-geolocation-service';

class LocationHelper {
  getCurrentLocation = callback => {
    Geolocation.getCurrentPosition(
      position => {
        console.log(position);
        callback(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
    );
  };

  watchLocation = callback => {
    Geolocation.watchPosition(
      position => {
        console.log(position);
        callback(position);
      },
      error => {
        console.log(error.code, error.message);
      },
      {
        enableHighAccuracy: true,
        useSignificantChanges: true,
        interval: 500,
      },
    );
  };
}

export default new LocationHelper();
