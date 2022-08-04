import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const images = [
  'https://nettv4u.com/imagine/19-02-2018/sketch-telugu-movie-posters-4.jpg',
  'https://i.pinimg.com/originals/19/d5/ef/19d5efd0cde19ccbdf2b3f2b039d1a69.jpg',
  'https://static.toiimg.com/photo/msid-91119051/91119051.jpg?49676'
]
function Carousel() {
  return (
    <View>
      <ScrollView pagingEnabled horizontal>
        {
          images.map((image, index) => (
            <Image
              key={index}
              source={{ uri: image }}
              style={{ height:300, width:380, resizeMode:'stretch' }} />
          ))
        }
      </ScrollView>

      <View style={{ flexDirection: 'row', position:"relative", bottom: 0 }}>
        <Text style={{ color: 'black' }}>                                       ⬤      ⬤      ⬤</Text>
      </View>
    </View>
  )
}

export default Carousel;