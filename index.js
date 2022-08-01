/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']);

AppRegistry.registerComponent(appName, () => App);
