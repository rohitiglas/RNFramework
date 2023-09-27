import React from 'react';
import {render} from '@testing-library/react-native';
import RestaurantTemplate from '../RestaurantTemplate';

describe('RestaurantTemplate', () => {
  it('renders a list of restaurants', () => {
    const restaurantData = [
      {
        info: {
          cloudinaryImageId: 'image1',
          name: 'Restaurant 1',
          avgRating: 4.5,
          cuisines: ['Cuisine A', 'Cuisine B'],
          id: '1',
        },
      },
      // Add more restaurant data objects as needed
    ];

    const {getByText} = render(
      <RestaurantTemplate restaurantData={restaurantData} />,
    );

    // Test that the component renders the restaurant names
    expect(getByText('Restaurant 1')).toBeTruthy();
    // Add more assertions as needed
  });

  it('renders no restaurants if data is empty', () => {
    const restaurantData = []; // Empty data

    const {queryByText} = render(
      <RestaurantTemplate restaurantData={restaurantData} />,
    );

    // Test that no restaurant name is rendered
    expect(queryByText('Restaurant 1')).toBeNull();
    // Add more assertions as needed
  });

  it('renders the correct number of restaurants', () => {
    const restaurantData = [
      {
        info: {
          cloudinaryImageId: 'image1',
          name: 'Restaurant 1',
          avgRating: 4.5,
          cuisines: ['Cuisine A', 'Cuisine B'],
          id: '1',
        },
      },
      {
        info: {
          cloudinaryImageId: 'image2',
          name: 'Restaurant 2',
          avgRating: 3.8,
          cuisines: ['Cuisine C', 'Cuisine D'],
          id: '2',
        },
      },
      // Add more restaurant data objects as needed
    ];

    const {getAllByTestId} = render(
      <RestaurantTemplate restaurantData={restaurantData} />,
    );

    // Test that the correct number of restaurants is rendered
    expect(getAllByTestId('restaurant-item')).toHaveLength(2); // Assuming you have a testID for each restaurant item
    // Add more assertions as needed
  });

  it('renders restaurant details correctly', () => {
    const restaurantData = [
      {
        info: {
          cloudinaryImageId: 'image1',
          name: 'Restaurant 1',
          avgRating: 4.5,
          cuisines: ['Cuisine A', 'Cuisine B'],
          id: '1',
        },
      },
      // Add more restaurant data objects as needed
    ];

    const {getByText} = render(
      <RestaurantTemplate restaurantData={restaurantData} />,
    );

    // Test that the component renders restaurant details correctly
    expect(getByText('Restaurant 1')).toBeTruthy();
    expect(getByText('* 4.5')).toBeTruthy();
    expect(getByText('Cuisine A , Cuisine B')).toBeTruthy();
    // Add more assertions as needed
  });
});
