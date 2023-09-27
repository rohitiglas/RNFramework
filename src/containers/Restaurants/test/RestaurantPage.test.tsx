import React from 'react';
import {render} from '@testing-library/react-native';
import {FormikProvider} from 'formik'; // Import FormikProvider
import {useRestaurantPageData} from '../hooks/useRestaurantPageData'; // Adjust the import path as needed
import {RestaurantPage} from '../RestaurantPage'; // Import your component

// Mock the useRestaurantPageData hook to provide test data
jest.mock('../hooks/useRestaurantPageData', () => ({
  useRestaurantPageData: jest.fn(),
}));

describe('RestaurantPage', () => {
  it('renders RestaurantTemplate with provided data', () => {
    // Define mock data for your test
    const mockData = [
      {
        info: {
          id: '565266',
          name: 'Om Bikaner Sweets & Snacks',
          cloudinaryImageId: 'eu55r6igxo77ahgumivy',
          locality: 'Sinda Chowk',
          areaName: 'Sector 12 A',
          costForTwo: '₹200 for two',
          cuisines: ['Snacks', 'Chinese', 'South Indian'],
          avgRating: 3.4,
          veg: true,
          feeDetails: {
            restaurantId: '565266',
            fees: [
              {
                name: 'BASE_DISTANCE',
                fee: 3800,
              },
              {
                name: 'BASE_TIME',
              },
              {
                name: 'ANCILLARY_SURGE_FEE',
              },
            ],
            totalFee: 3800,
          },
          parentId: '151508',
          avgRatingString: '3.4',
          totalRatingsString: '100+',
          sla: {
            deliveryTime: 20,
            lastMileTravel: 2.3,
            serviceability: 'SERVICEABLE',
            slaString: '20 mins',
            lastMileTravelString: '2.3 km',
            iconType: 'ICON_TYPE_EMPTY',
          },
          availability: {
            nextCloseTime: '2023-09-27 21:16:00',
            opened: true,
          },
          badges: {},
          isOpen: true,
          type: 'F',
          badgesV2: {
            entityBadges: {
              imageBased: {},
              textBased: {},
              textExtendedBadges: {},
            },
          },
          aggregatedDiscountInfoV3: {
            header: '10% OFF',
            subHeader: 'UPTO ₹40',
          },
          orderabilityCommunication: {
            title: {},
            subTitle: {},
            message: {},
            customIcon: {},
          },
          differentiatedUi: {
            displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
            differentiatedUiMediaDetails: {
              mediaType: 'ADS_MEDIA_ENUM_IMAGE',
              lottie: {},
              video: {},
            },
          },
          reviewsSummary: {},
          displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
          restaurantOfferPresentationInfo: {},
        },
        analytics: {
          context: 'seo-data-a03d3313-a353-4ff2-9809-711f4721d02d',
        },
        cta: {
          link: 'https://www.swiggy.com/restaurants/om-bikaner-sweets-and-snacks-sinda-chowk-sector-12-a-gurgaon-565266',
          text: 'RESTAURANT_MENU',
          type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
      },
    ];

    // Mock the useRestaurantPageData hook to return your mock data
    useRestaurantPageData.mockReturnValue({formik: {}, data: mockData});

    // Render the RestaurantPage component within the FormikProvider
    const page = render(
      <FormikProvider>
        <RestaurantPage />
      </FormikProvider>,
    );

    expect(page).toMatchSnapshot();
  });

  // Add more test cases as needed
});
