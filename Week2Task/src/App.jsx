import React, {useEffect, useState} from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Navigation from '@navigation';
import {Provider} from 'react-redux';
import {store, persistentStore} from '@redux/store';
import ErrorBoundary from '@components/ErrorBoundary';
import * as Sentry from '@sentry/react-native';
import {PersistGate} from 'redux-persist/integration/react';
import {DataHelper, PersistentHelper, PermissionHelper} from '@helpers';
import {THEME_KEY} from '@constants';
import {SettingsContextProvider} from '@contexts/SettingsContext';
import {Platform} from 'react-native';
import {
  initializeSslPinning,
  addSslPinningErrorListener,
} from 'react-native-ssl-public-key-pinning';

Sentry.init({
  dsn: 'https://98087846d15d9c41d4e3c64b6a6b835b@o4506724963778560.ingest.sentry.io/4506724966465536',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(false);

  const initializePinning = async () => {
    await initializeSslPinning({
      'dummyapi.online': {
        includeSubdomains: true,
        publicKeyHashes: [
          'vhM4/VqeRGHEnZXEviILvWosdQ2e0dq496owXiqsfRo=',
          '47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=',
        ],
      },
    });
  };

  useEffect(() => {
    initializePinning();

    PersistentHelper.getValue(THEME_KEY).then(value => {
      setTheme(value == 'true' ? true : false);
    });

    Platform.OS == 'android'
      ? PermissionHelper.requestPermissionForAndroid()
      : PermissionHelper.requestNotificationPermissionForiOS();
  }, []);

  useEffect(() => {
    const subscription = addSslPinningErrorListener(error => {
      console.log('SSLPinningErrorListener', error);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    if (store && !isLoading) {
      DataHelper.setStore(store);
    }
  }, [isLoading]);

  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistentStore}
        onBeforeLift={() => {
          setIsLoading(false);
        }}>
        <ErrorBoundary>
          <SettingsContextProvider value={{themeValue: theme, setTheme}}>
            <NavigationContainer theme={theme ? DarkTheme : DefaultTheme}>
              <Navigation />
            </NavigationContainer>
          </SettingsContextProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default Sentry.wrap(App);
