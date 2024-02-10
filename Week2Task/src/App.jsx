import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@navigation';
import {Provider} from 'react-redux';
import store from '@redux/store';
import ErrorBoundary from './components/ErrorBoundary';
import * as Sentry from '@sentry/react-native';

Sentry.init({
  dsn: 'https://98087846d15d9c41d4e3c64b6a6b835b@o4506724963778560.ingest.sentry.io/4506724966465536',
  // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
  // We recommend adjusting this value in production.
  tracesSampleRate: 1.0,
});

const App = () => {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </Provider>
    </ErrorBoundary>
  );
};

export default Sentry.wrap(App);
