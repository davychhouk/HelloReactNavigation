import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends Component {
  static navigationOptions = (props: Props) => ({
    header: null
  });

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Shop"
          onPress={() => navigation.navigate('Shop')}
        />
        <Button
          title="Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' }
});

export default Home;
