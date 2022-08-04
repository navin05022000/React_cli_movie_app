import * as React from 'react';
import { View,  SafeAreaView } from 'react-native';
import Carousel from '../images/image';

const TollywoodScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, padding: 16 }}>
        <Carousel />
      </View>
    </SafeAreaView>
  );
};

export default TollywoodScreen;
