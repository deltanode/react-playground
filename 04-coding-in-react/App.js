/**
 * Topics:
 * - Different ways to add CSS in react
 * - React Fragment
 * - Config Driven UI
 * - Props
 * - Keys
 * - Virtual DOM
 * - Reconciliation
 *
 * Creating "food ordering app" :
 * - Viewing JSON Data of swiggy.com (i.e using Network tab in console & chrome extension: JSON Viewer)
 *
 * Layout:
 * - Header
 *   - Logo
 *   - Nav Item (Right Side)
 *   - Cart
 * - Body
 *   - Search Bar
 *   - Restraunt List
 *     - Restraunt Card
 *       - Image
 *       - Name
 *       - Rating
 *       - Cuisines
 * - Footer
 *   - Links
 *   - Copyright
 */

import React from "react"
import ReactDOM from "react-dom/client"

// *********************************** Data Start***********************************
// Sample Data (Object)
const restaurantData = {
  imageId: "bdcd233971b7c81bf77e1fa4471280eb",
  name: "KFC",
  cuisines: ["Burger", "Biryani", "American"],
  approxDeliveryTime: "45"
}

// Sample Data (Array of object)
const restaurantDataArray = [
  {
    imageId: "bdcd233971b7c81bf77e1fa4471280eb",
    name: "KFC",
    cuisines: ["Burger", "Biryani", "American"],
    approxDeliveryTime: "45"
  },
  {
    imageId: "f1yfdmo6psso8tu6toly",
    name: "Burger king",
    cuisines: ["Burger", "American"],
    approxDeliveryTime: "15"
  }
]

//Config Driven UI - Mock Data from API (swiggy.com)
const restaurantDataList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "68318",
      name: "Chaayos Chai+Snacks=Relax",
      uuid: "5ded5137-3cf4-4722-b8c1-164f4d5a0b3a",
      city: "2",
      area: "Sector 14",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "0a6f66d75eb042123e34d89bef7189ce",
      cuisines: ["Bakery", "Beverages", "Chaat", "Desserts", "Home Food", "Italian", "Maharashtrian", "Snacks", "Street Food", "Sweets"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 31,
      minDeliveryTime: 31,
      maxDeliveryTime: 31,
      slaString: "31 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant: "chaayos-block-c-old-dlf-colony-sector-14-sector-14",
        city: "gurgaon"
      },
      cityState: "2",
      address: "Shop No-79, Huda Market, DLF Colony, Near Om Sweets, Sector 14, Gurugram ,Haryana,122001",
      locality: "DLF Colony",
      parentId: 281782,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "20% off up to ₹50 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6180828~p=1~eid=00000186-dff2-53f8-0029-747f00600131",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "68318",
        deliveryTime: 31,
        minDeliveryTime: 31,
        maxDeliveryTime: 31,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "56478",
      name: "Om Sweets & Snacks (Sector 8)",
      uuid: "a5493bd8-7328-438c-9b43-87c413bedef9",
      city: "2",
      area: "Sector 8",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "bztjesdzq7j9fmji3zv6",
      cuisines: ["Sweets", "North Indian", "South Indian", "Chinese", "Snacks", "Desserts", "Bakery"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "om-sweets-snacks-sector-8-old-gurgaon-zone-6",
        city: "gurgaon"
      },
      cityState: "2",
      address: "Opposite Water Tank, Arjun Nagar, Sector 8, Gurgaon",
      locality: "Arjun Nagar",
      parentId: 676,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "56478",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "29688",
      name: "The Chinese Kitchen",
      uuid: "2400d6eb-31f2-4af4-98bd-5d5f738e99f0",
      city: "2",
      area: "Sector 15",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "zap50mkkcek77334dx9r",
      cuisines: ["Chinese", "Thai", "Snacks", "Japanese"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 2.4000000953674316,
      slugs: {
        restaurant: "the-chinese-kitchen-sector-15-sector-14",
        city: "gurgaon"
      },
      cityState: "2",
      address: "shop no 56-57 , Huda market sector 15 part 2 gurgaon",
      locality: "Huda Market",
      parentId: 4326,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6092778~p=4~eid=00000186-dff2-53f8-0029-748000600462",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "2.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "29688",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 2.4000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "651214",
      name: "McDonald's",
      uuid: "f78bb688-db2e-47a7-94dd-8db3a55f1a48",
      city: "2",
      area: "Sector 77",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "1293a58ab5610f4c730c3d8cb6ac1b65",
      cuisines: ["American", "Fast Food"],
      tags: [],
      costForTwo: 40000,
      costForTwoString: "₹400 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 2.799999952316284,
      slugs: {
        restaurant: "mcdonalds-sector-14-sector-14",
        city: "gurgaon"
      },
      cityState: "2",
      address: "Unit No. SCF -77, Sector 14 Market, HUDA, Gurgaon",
      locality: "Huda Market",
      parentId: 630,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "2.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "651214",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 2.799999952316284,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "3.9",
      totalRatings: 100,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "368569",
      name: "Hong's Kitchen",
      uuid: "524ee25e-fb90-4465-af15-f85584d0ad50",
      city: "2",
      area: "Sector 43",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "ggdsj9t731qdv8kvotja",
      cuisines: ["Chinese", "Asian", "Tibetan"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 43,
      minDeliveryTime: 43,
      maxDeliveryTime: 43,
      slaString: "43 MINS",
      lastMileTravel: 7.400000095367432,
      slugs: {
        restaurant: "hongs-kitchen-rof-portico-dlf-phase-4",
        city: "gurgaon"
      },
      cityState: "2",
      address: "Ground Floor, New Shop No. GF 19 & 20,Old Shop No. GF 25, 26 & 27,ROF Portico, Sector-43, Sushant Lok-1",
      locality: "Sushant Lok",
      parentId: 9547,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6101069~p=7~eid=00000186-dff2-53f8-0029-74810060073b",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "7.4 kms",
      hasSurge: false,
      sla: {
        restaurantId: "368569",
        deliveryTime: 43,
        minDeliveryTime: 43,
        maxDeliveryTime: 43,
        lastMileTravel: 7.400000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "567076",
      name: "Call Chotu - Your Everyday Food Genie",
      uuid: "6a040fb4-7e9c-4948-9526-0aad001cf77f",
      city: "2",
      area: "Udyog Vihar",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "yjpxbqk009sqm53q9w6y",
      cuisines: ["North Indian", "Chinese", "Street Food", "Biryani", "Mughlai", "Fast Food", "Pastas"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 42,
      minDeliveryTime: 42,
      maxDeliveryTime: 42,
      slaString: "42 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "call-chotu-–-your-everyday-food-genie-palam-vihar-palam-vihar-2",
        city: "gurgaon"
      },
      cityState: "2",
      address: " Shop No.-18, 1st Floor, Neo Mart, Vakil Market, DLF Phase-IV, Khasra No.-36/2/5, Village Chakarpur, Gurgaon, Gurugram, Haryana-122001",
      locality: "5th Phase",
      parentId: 10614,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "20% off",
        shortDescriptionList: [
          {
            meta: "20% off | Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "20% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "20% OFF",
        shortDescriptionList: [
          {
            meta: "Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "20% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6116610~p=10~eid=00000186-dff2-53f8-0029-748200600a37",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "567076",
        deliveryTime: 42,
        minDeliveryTime: 42,
        maxDeliveryTime: 42,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 100,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "509144",
      name: "Imperfecto Patio",
      uuid: "f36b1d6e-1795-47c8-b7df-fcc49b3add56",
      city: "2",
      area: "Sector 51",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "zsxafggjjndgrh5d0jzz",
      cuisines: ["Indian"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: "40 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "imperfecto-patio-jalvayu-towers-jalvayu-towers",
        city: "gurgaon"
      },
      cityState: "2",
      address: "M2K, Corporate Park Block N, Mayfield Garden, Sector 51 Gurgaon.122003",
      locality: "Mayfeild Garden",
      parentId: 239216,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "Flat ₹150 off",
        shortDescriptionList: [
          {
            meta: "Flat ₹150 off on orders above ₹499",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "Flat ₹150 off on orders above ₹499 | Use code FLAT150",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "₹150 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLAT150",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "Flat ₹150 off on orders above ₹499 | Use code FLAT150",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6116719~p=13~eid=00000186-dff2-53f8-0029-748300600d04",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "509144",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.0",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "11672",
      name: "Pizza Hut",
      uuid: "4f4dde4a-a977-4ac1-a3a0-bf036dcf9632",
      city: "2",
      area: "Sector 4",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "qezelbltnms5l0tsgtk0",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 2.9000000953674316,
      slugs: {
        restaurant: "pizza-hut-delivery-old-gurgaon-zone-6",
        city: "gurgaon"
      },
      cityState: "2",
      address: "SCF No # 37, HUDA Market,Sector-4 Gurgaon,Haryana",
      locality: "Huda Market",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FREE DELIVERY",
        shortDescriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "",
        shortDescriptionList: [
          {
            meta: "Free Delivery",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FREE DELIVERY",
            discountType: "FREE_DELIVERY",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "2.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "11672",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 2.9000000953674316,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "3.5",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "577132",
      name: "Layla's Shawarma & Middle Eastern Kitchen",
      uuid: "904e2908-c890-4567-baf4-3e62e546c009",
      city: "2",
      area: "DLF Phase 4",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "zdmcwurxdlkf8pemy1xa",
      cuisines: ["Middle Eastern"],
      tags: [],
      costForTwo: 80000,
      costForTwoString: "₹800 FOR TWO",
      deliveryTime: 39,
      minDeliveryTime: 39,
      maxDeliveryTime: 39,
      slaString: "39 MINS",
      lastMileTravel: 6.900000095367432,
      slugs: {
        restaurant: "layla's-shawarma-&-middle-eastern-kitchen-dlf-phase-4-dlf-phase-4",
        city: "gurgaon"
      },
      cityState: "2",
      address: "SF 88 FIRST FLOOR GALLERIA MARKET DLF PHASE 4, Gurgaon, Gurugram,Haryana-122002",
      locality: "Galleria Market",
      parentId: 124062,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "15% off",
        shortDescriptionList: [
          {
            meta: "15% off | Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "15% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "15% OFF",
        shortDescriptionList: [
          {
            meta: "Use PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "15% off | Use code PARTY",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6082361~p=16~eid=00000186-dff2-53f8-0029-74840060103c",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "6.9 kms",
      hasSurge: false,
      sla: {
        restaurantId: "577132",
        deliveryTime: 39,
        minDeliveryTime: 39,
        maxDeliveryTime: 39,
        lastMileTravel: 6.900000095367432,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.3",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "667520",
      name: "The Chicken Folks",
      uuid: "903e8317-ca6c-4aa8-b45f-2c7b5ba111a7",
      city: "2",
      area: "Old Gurgaon (Zone 6)",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "0bd4ec56e8f95c57ec9a8c288f72bd5b",
      cuisines: ["Snacks"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 44,
      minDeliveryTime: 44,
      maxDeliveryTime: 44,
      slaString: "44 MINS",
      lastMileTravel: 1.7000000476837158,
      slugs: {
        restaurant: "the-chicken-folks-old-gurgaon-(zone-6)-old-gurgaon-(zone-6)",
        city: "gurgaon"
      },
      cityState: "2",
      address: "H.No 549/11, Nidha's Apartment, Shivpuri, Sector 7, Gurugram, Haryana, 122001",
      locality: "Shivpuri",
      parentId: 400330,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6116956~p=19~eid=00000186-dff2-53f8-0029-748500601371",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "667520",
        deliveryTime: 44,
        minDeliveryTime: 44,
        maxDeliveryTime: 44,
        lastMileTravel: 1.7000000476837158,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.8",
      totalRatings: 20,
      new: true
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "30364",
      name: "The Millionaire Express",
      uuid: "868ca544-0576-4a5e-8a4b-f23db1c95f3f",
      city: "2",
      area: "DLF Phase 4",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "w98hmtsyvwe4aebwdlve",
      cuisines: ["Italian", "Desserts", "Continental", "Beverages"],
      tags: [],
      costForTwo: 25000,
      costForTwoString: "₹250 FOR TWO",
      deliveryTime: 47,
      minDeliveryTime: 47,
      maxDeliveryTime: 47,
      slaString: "47 MINS",
      lastMileTravel: 6.300000190734863,
      slugs: {
        restaurant: "the-millionaire-express-sushant-lok-jalvayu-towers",
        city: "gurgaon"
      },
      cityState: "2",
      address: "KHASRA NO 48/1, Near Shanti Bharat Gas, Vakil Market, CHAKKARPUR, DLF PHASE 4",
      locality: "Chakkarpur",
      parentId: 4341,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6098076~p=22~eid=00000186-dff2-53f8-0029-748600601667",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "6.3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "30364",
        deliveryTime: 47,
        minDeliveryTime: 47,
        maxDeliveryTime: 47,
        lastMileTravel: 6.300000190734863,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.2",
      totalRatings: 100,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "125878",
      name: "Burger King",
      uuid: "36c9ddaf-4e28-421e-98fa-534b984a61f9",
      city: "2",
      area: "Sector 4",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "cchf34lzjd5unhgbgedu",
      cuisines: ["Burgers", "American"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 34,
      minDeliveryTime: 34,
      maxDeliveryTime: 34,
      slaString: "34 MINS",
      lastMileTravel: 2,
      slugs: {
        restaurant: "burger-king-dreamz-mall-old-gurgaon-zone-6",
        city: "gurgaon"
      },
      cityState: "2",
      address: "UGF-2 & FF-1, GURGAON DREAMZ, SECTOR-4,7 CROSSING OLD RAILWAY ROAD, GURGAON-122001",
      locality: "Old Railway Road",
      parentId: 166,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "40% off",
        shortDescriptionList: [
          {
            meta: "40% off | Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "40% OFF",
        shortDescriptionList: [
          {
            meta: "Use SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "40% off up to ₹80 | Use code SWIGGYIT",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "2 kms",
      hasSurge: false,
      sla: {
        restaurantId: "125878",
        deliveryTime: 34,
        minDeliveryTime: 34,
        maxDeliveryTime: 34,
        lastMileTravel: 2,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.2",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "449194",
      name: "Baozi Momos",
      uuid: "2918eb0c-95fa-472c-89ef-7df61fb4685e",
      city: "2",
      area: "Sector 7",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "v5tuodflayiity8afpz7",
      cuisines: ["Chinese", "Tandoor", "Pastas"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 33,
      minDeliveryTime: 33,
      maxDeliveryTime: 33,
      slaString: "33 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "baozi-momos-old-gurgaon-(zone-6)-old-gurgaon-(zone-6)",
        city: "gurgaon"
      },
      cityState: "2",
      address: "96/9,M C No.534/11,  SHIVPURI,GURUGRAM,HARYANA,  Gurgaon, Gurugram, , Haryana,",
      locality: "Shivpuri",
      parentId: 41667,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6049409~p=25~eid=00000186-dff2-53f8-0029-74870060192e",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "449194",
        deliveryTime: 33,
        minDeliveryTime: 33,
        maxDeliveryTime: 33,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 20,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "45481",
      name: "Huda Gymkhana Club",
      uuid: "a7438ac3-9299-4ac9-a7f1-83a23fb373e6",
      city: "2",
      area: "Sector 4",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "qjpsvfs4ptfpavwtbw1y",
      cuisines: ["North Indian", "Chinese"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: "40 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "huda-gymkhana-club-sector-4-old-gurgaon-zone-6",
        city: "gurgaon"
      },
      cityState: "2",
      address: "Huda Gymkhana Club, Sector 4, Gurgaon",
      locality: "Huda Gymkhana Club",
      parentId: 103944,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "FLAT125 off",
        shortDescriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "₹125 OFF",
        shortDescriptionList: [
          {
            meta: "Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "FLAT125 off | Use FLATDEAL",
            discountType: "Flat",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      ribbon: [
        {
          type: "PROMOTED"
        }
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=6092787~p=28~eid=00000186-dff2-53f8-0029-748800601c52",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "45481",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: true,
      avgRating: "3.9",
      totalRatings: 1000,
      new: false
    },
    subtype: "basic"
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "93960",
      name: "The Burger Club",
      uuid: "e238acbc-299d-4056-8944-1219de0bd833",
      city: "2",
      area: "Sector 14",
      totalRatingsString: "500+ ratings",
      cloudinaryImageId: "f1yfdmo6psso8tu6toly",
      cuisines: ["American", "Beverages", "Desserts"],
      tags: [],
      costForTwo: 20000,
      costForTwoString: "₹200 FOR TWO",
      deliveryTime: 35,
      minDeliveryTime: 35,
      maxDeliveryTime: 35,
      slaString: "35 MINS",
      lastMileTravel: 3,
      slugs: {
        restaurant: "the-burger-club-sector-14-kompally-test-area",
        city: "gurgaon"
      },
      cityState: "2",
      address: "DLF phase 4shop no 95, 1st and 2nd, huda market sector 14 gurgaon",
      locality: "Huda Market",
      parentId: 2285,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹120 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹120 | Use code GUILTFREE",
            discountType: "Percentage",
            operationType: "RESTAURANT"
          }
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: ""
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: ""
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: ""
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: []
      },
      lastMileTravelString: "3 kms",
      hasSurge: false,
      sla: {
        restaurantId: "93960",
        deliveryTime: 35,
        minDeliveryTime: 35,
        maxDeliveryTime: 35,
        lastMileTravel: 3,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY"
      },
      promoted: false,
      avgRating: "4.0",
      totalRatings: 500,
      new: false
    },
    subtype: "basic"
  }
]

// *********************************** Data  END***********************************

const Logo = () => <img alt="Logo" src="https://seeklogo.com/images/F/food-logo-59E5A73AFD-seeklogo.com.png" />

const NavComponent = () => {
  return (
    <div className="nav-items">
      <ul>
        <li>Home </li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  )
}
const HeaderComponent = () => {
  return (
    <div className="header-container">
      <div className="header container">
        <Logo />
        <NavComponent />
      </div>
    </div>
  )
}

/* 
const RestrauntCard1 = props => {
  // console.log(props)                  // Output: {style: {color: 'red'}, restaurant: {restaurant: {imageId: 'bdcd233971b7c81bf77e1fa4471280eb', name: 'KFC', cuisines: Array(3), approxDeliveryTime: '45'}}}
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.restaurant.imageId} alt="restaurant image" />
      <h2 style={props.style}>{props.restaurant.name}</h2>
      <h3 style={props.style}>{props.restaurant.cuisines.join(", ")}</h3>
      <h4>{props.restaurant.approxDeliveryTime} minutes</h4>
    </div>
  )
}
*/

/* 
const RestrauntCard = ({ imageId, name, cuisines, approxDeliveryTime, style }) => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + imageId} alt="restaurant image" />
      <h2 style={style}>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{approxDeliveryTime} minutes</h4>
    </div>
  )
}
 */

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, deliveryTime }) => {
  return (
    <div className="restaurant-card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="restaurant image" />
      <h2 style={{ color: "red" }}>{name.slice(0, 19)}</h2>
      <h3>{cuisines.join(", ").slice(0, 20)}</h3>
      <h4>{deliveryTime} minutes</h4>
    </div>
  )
}

const RestaurantList = () => {
  return (
    <div className="restaurant-list container">
      {/* <RestrauntCard style={{ color: "red" }} restaurant={restaurantData} /> */}
      {/* <RestrauntCard style={{ color: "red" }} {...restaurantData} /> */}

      {/* <RestrauntCard {...restaurantDataArray[1]} /> */}

      {/* {restaurantDataArray.map(restaurantDataObj => {
          return <RestrauntCard restaurant={restaurantDataObj} style={{ color: "red" }} />
      })} */}

      {/* {restaurantDataArray.map(restaurantDataObj => {
          return <RestrauntCard {...restaurantDataObj} style={{ color: "red" }} />
      })} */}

      {restaurantDataList.map(restaurantDataObj => {
        return <RestrauntCard {...restaurantDataObj.data} key={restaurantDataObj.data.uuid} />
      })}
    </div>
  )
}

const BodyComponent = () => {
  return (
    <>
      <RestaurantList />
    </>
  )
}

const FooterComponent = () => {
  return (
    <div className="container" style={{ textAlign: "center", padding: "2rem", boxShadow: "5px 0px 5px rgba(185, 181, 181, 0.2)" }}>
      Footer @ Copyright 2023
    </div>
  )
}

const AppLayout = () => {
  return (
    // <></>
    <React.Fragment>
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </React.Fragment>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
