// RestaurantItem.js
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

// Define the type/interface for item data
interface RestaurantItem {
  cloudinaryImageId: string;
  name: string;
  avgRating: number;
  cuisines: string[];
}

const imageBaseUrl =
  'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/';

const RestaurantItem: React.FC<{item: RestaurantItem}> = ({item}) => {
  const {cloudinaryImageId, name, avgRating, cuisines} = item;
  return (
    <View testID="restaurant-item" style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: imageBaseUrl + cloudinaryImageId,
        }}
      />
      <Text numberOfLines={1} style={styles.name}>
        {name}
      </Text>
      <Text>* {avgRating}</Text>
      <Text style={styles.cuisines}>{cuisines.join(' , ')}</Text>
    </View>
  );
};

export default RestaurantItem;
