import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@navigation';
import {Provider} from 'react-redux';
import {store, persistentStore} from '@redux/store';
import ErrorBoundary from './components/ErrorBoundary';
import * as Sentry from '@sentry/react-native';
import {PersistGate} from 'redux-persist/integration/react';
import DataHelper from './helpers/DataHelper';

Sentry.init({
  dsn: 'https://98087846d15d9c41d4e3c64b6a6b835b@o4506724963778560.ingest.sentry.io/4506724966465536',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (store && !isLoading) {
      DataHelper.setStore(store);
    }
  });

  return (
    <Provider store={store}>
      <PersistGate
        persistor={persistentStore}
        onBeforeLift={() => {
          setIsLoading(false);
        }}>
        <ErrorBoundary>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  );
};

export default Sentry.wrap(App);
