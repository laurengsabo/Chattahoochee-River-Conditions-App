import React from 'react';
import AppNavigator from './app.navigator';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <AppNavigator>
      <WelcomeScreen></WelcomeScreen>
    </AppNavigator>
  );
}