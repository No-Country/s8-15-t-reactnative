import React, { useState } from 'react'
import { View,Text,StyleSheet, Dimensions,Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');
const AVATAR_SIZE = 80;

export const ProfileUser = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const avatars = [
        require('../../../assets/main1.svg')
    ];
  
    const handleScroll = (event) => {
      const offsetX = event.nativeEvent.contentOffset.x;
      const index = Math.round(offsetX / width);
      setCurrentIndex(index);
    };
  

  return (
    <View style={styles.carouselContainer}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {avatars.map((avatar, index) => (
          <Image
            key={index}
            source={avatar}
            style={[
              styles.avatar,
              {
                marginLeft: index === 0 ? (width - AVATAR_SIZE) / 2 : 0,
                marginRight: index === avatars.length - 1 ? (width - AVATAR_SIZE) / 2 : 0,
                opacity: index === currentIndex ? 1 : 0.5,
              },
            ]}
          />
        ))}
      </ScrollView>

      <View style={styles.arrowContainer}>
        <MaterialIcons name="arrow-back" size={24} color="black" style={styles.arrow} />
        <MaterialIcons name="arrow-forward" size={24} color="black" style={styles.arrow} />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginHorizontal: 10,
  },
  arrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  arrow: {
    marginHorizontal: 10,
  },
});