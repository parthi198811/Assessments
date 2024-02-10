import {Alert, Button, SafeAreaView, ScrollView, Text} from 'react-native';
import React, {Component} from 'react';
import styles from './styles';
import * as Sentry from '@sentry/react-native';

export class ErrorBoundary extends Component {
  state = {error: false, errorMessage: null, errorInfo: ''};

  static getDerivedStateFromError(error) {
    return {error: true};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      errorMessage: error,
      errorInfo: errorInfo.componentStack,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <SafeAreaView style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Error</Text>
            <Text style={styles.error}>
              {this.state.errorMessage?.toString()}
            </Text>
            <Text style={styles.errorInfo}>{this.state.errorInfo}</Text>
          </ScrollView>
          <Button
            title="Send Report"
            onPress={() => {
              Sentry.captureException(this.state.errorMessage);
              Alert.alert('Error reported successfully.');
            }}
          />
        </SafeAreaView>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
