import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  Switch,
  StyleSheet,
  View
} from 'react-native';


const SwitchComponent = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
       <View style={styles.container}>
          <Switch />
       </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SwitchComponent;