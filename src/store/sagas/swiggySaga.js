// sagas.js
import {takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_DATA_REQUEST,
  fetchDataSuccess,
  fetchDataFailure,
} from '../actions/swiggyAction';

const restaurant = [
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
  {
    info: {
      id: '742582',
      name: 'Shyam Bhature Wala',
      cloudinaryImageId: 'b479fc8b7385750394f896b2a0fc8b3f',
      locality: 'Bajghera',
      areaName: 'Old Gurgaon (Zone 6)',
      costForTwo: '₹300 for two',
      cuisines: ['North Indian', 'Beverages'],
      avgRating: 2.8,
      veg: true,
      feeDetails: {
        restaurantId: '742582',
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
      parentId: '16682',
      avgRatingString: '2.8',
      totalRatingsString: '7',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 16:00:00',
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
      isNewlyOnboarded: true,
      restaurantOfferPresentationInfo: {},
    },
    analytics: {
      context: 'seo-data-a03d3313-a353-4ff2-9809-711f4721d02d',
    },
    cta: {
      link: 'https://www.swiggy.com/restaurants/shyam-bhature-wala-bajghera-old-gurgaon-zone-6-gurgaon-742582',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '159379',
      name: 'Steamed & Fried',
      cloudinaryImageId: 'vwiiasgcc9rfcgsyz9nr',
      locality: 'Huda Market',
      areaName: 'Sector 31',
      costForTwo: '₹200 for two',
      cuisines: ['Chinese', 'Thai', 'Japanese'],
      avgRating: 4.1,
      feeDetails: {
        restaurantId: '159379',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4600,
      },
      parentId: '195650',
      avgRatingString: '4.1',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '21 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 23:59:00',
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
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
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
      link: 'https://www.swiggy.com/restaurants/steamed-and-fried-huda-market-sector-31-gurgaon-159379',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '581819',
      name: 'Om Bhatura Co.',
      cloudinaryImageId: 'c09fba602747bb3799ac7ccedfea53a4',
      locality: 'Main Huda Market',
      areaName: 'Sector 31',
      costForTwo: '₹250 for two',
      cuisines: ['North Indian', 'Chaat', 'Snacks'],
      avgRating: 4.2,
      veg: true,
      feeDetails: {
        restaurantId: '581819',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4600,
      },
      parentId: '252070',
      avgRatingString: '4.2',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 21,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '21 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 19:30:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
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
      link: 'https://www.swiggy.com/restaurants/om-bhatura-co-main-huda-market-sector-31-gurgaon-581819',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '45481',
      name: 'Huda Gymkhana Club',
      cloudinaryImageId: '42dbf57314f930c13246aa0572c64464',
      locality: 'Huda Gymkhana Club',
      areaName: 'Sector 4',
      costForTwo: '₹350 for two',
      cuisines: ['North Indian', 'Chinese'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '45481',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4600,
      },
      parentId: '103944',
      avgRatingString: '4.0',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 26,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '26 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 23:00:00',
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
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
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
      link: 'https://www.swiggy.com/restaurants/huda-gymkhana-club-huda-gymkhana-club-sector-4-gurgaon-45481',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '517835',
      name: 'Royal Amritsar',
      cloudinaryImageId: 'mm74ctm432jb5dlpcdkk',
      locality: 'Huda City',
      areaName: 'Sector 31',
      costForTwo: '₹300 for two',
      cuisines: ['North Indian', 'Biryani'],
      avgRating: 4,
      feeDetails: {
        restaurantId: '517835',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4600,
      },
      parentId: '14837',
      avgRatingString: '4.0',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-28 00:00:00',
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
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
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
      link: 'https://www.swiggy.com/restaurants/royal-amritsar-huda-city-sector-31-gurgaon-517835',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '23893',
      name: 'South Store',
      cloudinaryImageId: 'reb6iyg2xmgbhtjiqxko',
      locality: 'DLF Colony',
      areaName: 'Sector 14',
      costForTwo: '₹300 for two',
      cuisines: ['South Indian', 'Snacks'],
      avgRating: 4.1,
      veg: true,
      feeDetails: {
        restaurantId: '23893',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4600,
      },
      parentId: '9012',
      avgRatingString: '4.1',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 3.5,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '3.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 22:30:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹199',
        discountTag: 'FLAT DEAL',
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
      link: 'https://www.swiggy.com/restaurants/south-store-dlf-colony-sector-14-gurgaon-23893',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '390078',
      name: 'NH1 Bowls - Highway To North',
      cloudinaryImageId: '94654fdf308764cd0faf83dba35bcdc3',
      locality: 'Old DLF Colony',
      areaName: 'Sector 14',
      costForTwo: '₹250 for two',
      cuisines: ['North Indian', 'Punjabi', 'Home Food'],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: '390078',
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
      parentId: '22452',
      avgRatingString: '4.4',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 2.5,
        serviceability: 'SERVICEABLE',
        slaString: '12-22 mins',
        lastMileTravelString: '2.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-28 02:00:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
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
      link: 'https://www.swiggy.com/restaurants/nh1-bowls-highway-to-north-old-dlf-colony-sector-14-gurgaon-390078',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '760016',
      name: 'Kulcha Lal Paratha Das',
      cloudinaryImageId: '74fc9e19e93652a8c0d5642bc8d673b8',
      locality: 'Old Gurgaon (Zone 6)',
      areaName: 'Old railway road (Sector 7)',
      costForTwo: '₹300 for two',
      cuisines: ['North Indian', 'Indian', 'Beverages'],
      avgRating: 4,
      veg: true,
      feeDetails: {
        restaurantId: '760016',
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
      parentId: '121579',
      avgRatingString: '4.0',
      totalRatingsString: '20+',
      sla: {
        deliveryTime: 20,
        lastMileTravel: 1.9,
        serviceability: 'SERVICEABLE',
        slaString: '20 mins',
        lastMileTravelString: '1.9 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 23:59:00',
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
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
      link: 'https://www.swiggy.com/restaurants/kulcha-lal-paratha-das-old-zone-6-old-railway-road-sector-7-gurgaon-760016',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '2278',
      name: 'French Omelette',
      cloudinaryImageId: 'mohinuaaj7jm4h0mbauf',
      locality: 'Sector 7',
      areaName: 'Old Railway Road',
      costForTwo: '₹100 for two',
      cuisines: ['Indian', 'Continental'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '2278',
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
      parentId: '394',
      avgRatingString: '3.8',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 19,
        lastMileTravel: 1.1,
        serviceability: 'SERVICEABLE',
        slaString: '19 mins',
        lastMileTravelString: '1.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 22:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹95',
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
      link: 'https://www.swiggy.com/restaurants/french-omelette-sector-7-old-railway-road-gurgaon-2278',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '480666',
      name: 'Shudh Vaishno Rasoi',
      cloudinaryImageId: 'wztx0kbjthvs0ficnpem',
      locality: 'Subhash Nagar',
      areaName: 'Sector 12',
      costForTwo: '₹200 for two',
      cuisines: ['North Indian', 'Tandoor'],
      avgRating: 3.9,
      veg: true,
      feeDetails: {
        restaurantId: '480666',
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
      parentId: '187468',
      avgRatingString: '3.9',
      totalRatingsString: '100+',
      sla: {
        deliveryTime: 17,
        lastMileTravel: 0.7,
        serviceability: 'SERVICEABLE',
        slaString: '17 mins',
        lastMileTravelString: '0.7 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 16:00:00',
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: 'v1695133679/badges/Pure_Veg111.png',
            description: 'pureveg',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: 'pureveg',
                  imageId: 'v1695133679/badges/Pure_Veg111.png',
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: '50% OFF',
        subHeader: 'UPTO ₹95',
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
      link: 'https://www.swiggy.com/restaurants/shudh-vaishno-rasoi-subhash-nagar-sector-12-gurgaon-480666',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '453029',
      name: 'Thalairaj Biryani',
      cloudinaryImageId: 'jeat6mid8f8ezmldslkl',
      locality: 'Old DLF Colony',
      areaName: 'Sector 14',
      costForTwo: '₹300 for two',
      cuisines: ['Biryani'],
      avgRating: 4.4,
      feeDetails: {
        restaurantId: '453029',
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
      parentId: '433875',
      avgRatingString: '4.4',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 18,
        lastMileTravel: 2.5,
        serviceability: 'SERVICEABLE',
        slaString: '18 mins',
        lastMileTravelString: '2.5 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-28 01:00:00',
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
        header: '40% OFF',
        subHeader: 'UPTO ₹80',
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
      link: 'https://www.swiggy.com/restaurants/thalairaj-biryani-old-dlf-colony-sector-14-gurgaon-453029',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '443494',
      name: 'EatFit',
      cloudinaryImageId: '6126c9b45de2cb222405c1af8a321e74',
      locality: 'ISLAMPUR',
      areaName: 'Sohna Road',
      costForTwo: '₹250 for two',
      cuisines: [
        'Chinese',
        'Healthy Food',
        'Tandoor',
        'Pizzas',
        'North Indian',
        'Thalis',
        'Biryani',
      ],
      avgRating: 4,
      feeDetails: {
        restaurantId: '443494',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4600,
      },
      parentId: '76139',
      avgRatingString: '4.0',
      totalRatingsString: '1K+',
      sla: {
        deliveryTime: 23,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '23 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'brand',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'brand',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: 'EVERY ITEM',
        subHeader: '@ ₹159',
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
      link: 'https://www.swiggy.com/restaurants/eatfit-islampur-sohna-road-gurgaon-443494',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '11672',
      name: 'Pizza Hut',
      cloudinaryImageId: '2b4f62d606d1b2bfba9ba9e5386fabb7',
      locality: 'Huda Market',
      areaName: 'Sector 4',
      costForTwo: '₹350 for two',
      cuisines: ['Pizzas'],
      avgRating: 3.8,
      feeDetails: {
        restaurantId: '11672',
        fees: [
          {
            name: 'BASE_DISTANCE',
            fee: 4600,
          },
          {
            name: 'BASE_TIME',
          },
          {
            name: 'ANCILLARY_SURGE_FEE',
          },
        ],
        totalFee: 4600,
      },
      parentId: '721',
      avgRatingString: '3.8',
      totalRatingsString: '5K+',
      sla: {
        deliveryTime: 28,
        lastMileTravel: 3,
        serviceability: 'SERVICEABLE',
        slaString: '28 mins',
        lastMileTravelString: '3.0 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-28 01:00:00',
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
        header: '50% OFF',
        subHeader: 'UPTO ₹100',
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
      link: 'https://www.swiggy.com/restaurants/pizza-hut-huda-market-sector-4-gurgaon-11672',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
  {
    info: {
      id: '42958',
      name: 'Faasos - Wraps & Rolls',
      cloudinaryImageId: 'af33b81798b11deba338e94b7585d348',
      locality: 'Huda Complex',
      areaName: 'Sector 12',
      costForTwo: '₹200 for two',
      cuisines: [
        'Kebabs',
        'Fast Food',
        'Snacks',
        'North Indian',
        'American',
        'Healthy Food',
        'Desserts',
        'Beverages',
      ],
      avgRating: 4.2,
      feeDetails: {
        restaurantId: '42958',
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
      parentId: '21809',
      avgRatingString: '4.2',
      totalRatingsString: '10K+',
      sla: {
        deliveryTime: 22,
        lastMileTravel: 2.1,
        serviceability: 'SERVICEABLE',
        slaString: '22 mins',
        lastMileTravelString: '2.1 km',
        iconType: 'ICON_TYPE_EMPTY',
      },
      availability: {
        nextCloseTime: '2023-09-27 23:59:00',
        opened: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: 'guiltfree/GF_Logo_android_3x',
            shortDescription: 'options available',
            fontColor: '#7E808C',
          },
        ],
      },
      isOpen: true,
      type: 'F',
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {
            badgeObject: [
              {
                attributes: {
                  description: '',
                  fontColor: '#7E808C',
                  iconId: 'guiltfree/GF_Logo_android_3x',
                  shortDescription: 'options available',
                },
              },
            ],
          },
        },
      },
      aggregatedDiscountInfoV3: {
        header: '₹125 OFF',
        subHeader: 'ABOVE ₹249',
        discountTag: 'FLAT DEAL',
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
      link: 'https://www.swiggy.com/restaurants/faasos-wraps-and-rolls-huda-complex-sector-12-gurgaon-42958',
      text: 'RESTAURANT_MENU',
      type: 'WEBLINK',
    },
    widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
  },
];

export function* fetchDataSaga() {
  try {
    const response = yield call(
      axios.get,
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4594965&lng=77.0266383&is-seo-homepage-enabled=true',
    ); // Example API URL
    yield put(fetchDataSuccess(restaurant));
  } catch (error) {
    yield put(fetchDataFailure(error));
  }
}
