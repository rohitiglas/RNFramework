import React, {FC} from 'react';
import {View, FlatList} from 'react-native';
import RestaurantItem from '../../organism/RestaurantItem/RestaurantItem';
import styles from './styles';

interface RestaurantItemProps {
  cloudinaryImageId: string;
  name: string;
  avgRating: number;
  cuisines: string[];
  id: string;
}

interface ItemProps {
  info: RestaurantItemProps;
}

interface RestaurantTemplateProps {
  restaurantData: ItemProps[]; // Replace YourItemType with the type of your data
}

const RestaurantTemplate: FC<RestaurantTemplateProps> = ({restaurantData}) => {
  const renderItem = ({item}: {item: ItemProps}) => (
    <RestaurantItem testID="restaurant-item" item={item.info} />
  );
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={restaurantData}
        renderItem={renderItem}
        keyExtractor={item => item.info.id}
      />
    </View>
  );
};

export default RestaurantTemplate;
