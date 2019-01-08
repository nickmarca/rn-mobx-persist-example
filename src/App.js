// @flow

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {observer} from 'mobx-react';

import countStore from './CountStore';

type Props = {};
export class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>

        <TouchableOpacity onPress={countStore.add}>
          <Text>Click Here to Add 1</Text>
        </TouchableOpacity>


        <Text>
          {countStore.count}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default observer(App);
