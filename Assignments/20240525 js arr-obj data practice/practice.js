const swiggyResponse = {
  statusCode: 0,
  data: {
    statusMessage: "done successfully",
    cards: [
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.TextBoxV2",
            text: "S K Food Plaza",
            headerStyling: {
              textColor: "text_Highest_Emphasis",
              textVariant: "header_H3_Black",
            },
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.gandalf.widgets.v2.RestaurantBlTab",
            tabs: [
              {
                id: "Order Online",
                title: "Order Online",
              },
            ],
          },
        },
      },
      {
        card: {
          card: {
            "@type":
              "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            info: {
              id: "209675",
              name: "S K Food Plaza",
              city: "Ludhiana",
              slugs: {
                restaurant: "s-k-food-plaza-chaura-bazar-chaura-bazar",
                city: "ludhiana",
              },
              uniqueId: "e51e6528-4859-48c8-8fed-e84c17dc2d76",
              cloudinaryImageId: "hpwvad9uatvfszrixvoo",
              locality: "New Shiv Puri",
              areaName: "Ludhiana Junction",
              costForTwo: "25000",
              costForTwoMessage: "₹250 for two",
              cuisines: ["Chinese", "Fast Food"],
              avgRating: 4.4,
              feeDetails: {
                restaurantId: "209675",
                fees: [
                  {
                    name: "TYPE_DISTANCE",
                    fee: 1200,
                  },
                  {
                    name: "TYPE_TIME",
                  },
                ],
                totalFee: 1200,
                title: "Delivery Charge",
                amount: "1200",
                icon: "v1648635511/Delivery_fee_new_cjxumu",
                message: "Order above 149 for discounted delivery fee",
              },
              parentId: "173449",
              avgRatingString: "4.4",
              totalRatingsString: "1K+ ratings",
              sla: {
                restaurantId: "209675",
                deliveryTime: 31,
                minDeliveryTime: 30,
                maxDeliveryTime: 35,
                lastMileTravel: 4.4,
                serviceability: "SERVICEABLE",
                stressFactor: 1,
                rainMode: "RAIN_MODE_NONE",
                longDistance: "LONG_DISTANCE_NOT_LONG_DISTANCE",
                zoneId: 852,
                slaString: "30-35 MINS",
                lastMileTravelString: "4.4 km",
                iconType: "ICON_TYPE_EMPTY",
              },
              availability: {
                nextCloseTime: "2024-05-25 22:50:00",
                visibility: true,
                opened: true,
                restaurantClosedMeta: {},
              },
              aggregatedDiscountInfo: {
                header: "Buy 1 Get 1 Free",
                shortDescriptionList: [
                  {
                    meta: "Buy 1, Get 1 Free | Use BOGO4IPL",
                    discountType: "BXGY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "40% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Buy 1, Get 1 Free | Use BOGO4IPL",
                    discountType: "BXGY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "40% off up to ₹80 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                visible: true,
              },
              badges: {},
              slugString: "s-k-food-plaza-chaura-bazar-chaura-bazar",
              isOpen: true,
              labels: [
                {
                  title: "Timings",
                  message: "null",
                },
                {
                  title: "Address",
                  message: "New Shiv Puri, Ludhiana, Punjab, India",
                },
                {
                  title: "Cuisines",
                  message: "Chinese,Fast Food",
                },
              ],
              totalRatings: 1000,
              aggregatedDiscountInfoV2: {
                header: "Buy 1 Get 1 Free",
                shortDescriptionList: [
                  {
                    meta: "Buy 1, Get 1 Free | Use BOGO4IPL",
                    discountType: "BXGY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "40% off | Use TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                descriptionList: [
                  {
                    meta: "Buy 1, Get 1 Free | Use BOGO4IPL",
                    discountType: "BXGY",
                    operationType: "RESTAURANT",
                  },
                  {
                    meta: "40% off up to ₹80 | Use code TRYNEW",
                    discountType: "Percentage",
                    operationType: "RESTAURANT",
                  },
                ],
                couponDetailsCta: "View coupon details",
              },
              type: "F",
              nudgeBanners: [
                {
                  priority: 1,
                  couponCode: "BOGO4IPL",
                  discountInfo: {
                    discountType: "BXGY",
                    value: 100,
                  },
                  lockedMessage:
                    "Add <amount> more <TagInfo> item(s) to avail the offer",
                  unlockedMessage: "Yay! 1 item worth <X> is now FREE!",
                  minItemCount: 1,
                  maxItemCount: 2,
                  type: "B1G1",
                  nudgeTagInfo: {
                    title: "Buy 1 Get 1",
                    textColor: "#ffffff",
                    backgroundColor: "#753428",
                    separatorColor: "#E44629",
                    fontName: "FONT_NAME_CONDENSED_BOLD",
                  },
                  styling: {
                    backgroundColor: "#2C1F1D",
                    textColor: "#B3FFFFFF",
                  },
                  logoCtx: {},
                },
              ],
              headerBanner: {
                url: "swiggy://webview?is_external=false&webview_url=https://www.swiggy.com/restaurant-info/209675",
              },
              expectationNotifiers: [
                {
                  text: "Order above 149 for discounted delivery fee",
                  icon: {
                    imageId: "v1648635511/Delivery_fee_new_cjxumu",
                  },
                  popup: {
                    cta: {},
                  },
                  type: "DISTANCE_FEE_NON_FOOD_LM",
                  enrichedText: "Order above 149 for discounted delivery fee",
                  halfCardPopup: {
                    halfCardPopupHeader: {},
                  },
                  trailingIcon: {},
                },
              ],
              ratingSlab: "RATING_SLAB_5",
              orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
              },
              hasBestsellerItems: true,
              cartOrderabilityNudgeBanner: {
                parameters: {},
                presentation: {},
              },
              latLong: "30.930935,75.85712899999999",
              backgroundImageOverlayInfo: {},
            },
            analytics: {},
          },
          relevance: {
            type: "RELEVANCE_TYPE_CHECK_ORDERABILITY_ON_ITEM_ADD",
            sectionId: "POP_UP_CROUTON_MENU",
          },
        },
      },
      {
        card: {
          card: {
            "@type": "type.googleapis.com/swiggy.gandalf.widgets.v2.GridWidget",
            layout: {
              rows: 1,
              columns: 5,
              horizontalScrollEnabled: true,
              itemSpacing: 12,
              lineSpacing: 10,
              widgetPadding: {},
              containerStyle: {
                containerPadding: {
                  left: 10,
                  right: 10,
                  bottom: 16,
                },
              },
              scrollBar: {},
            },
            id: "offerCollectionWidget_UX4",
            gridElements: {
              infoWithStyle: {
                "@type":
                  "type.googleapis.com/swiggy.presentation.food.v2.OfferInfoWithStyle",
                offers: [
                  {
                    info: {
                      header: "BUY 1 GET 1 FREE",
                      offerTagColor: "#E46D47",
                      logoBottom: "rng/md/ads/production/jzxfpwsvvpvm19btelmw",
                      offerIds: ["53fc2fb2-2391-459c-876b-dbc8c72b488e"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE BOGO4IPL",
                      offerType: "offers",
                      restId: "209675",
                      offerLogo: "rng/md/ads/production/jzxfpwsvvpvm19btelmw",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "40% OFF UPTO ₹80",
                      offerTagColor: "#E46D47",
                      offerIds: ["d0b75266-8b8f-42ce-b63c-f89a4f3db565"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE TRYNEW",
                      description: "ABOVE ₹149",
                      offerType: "offers",
                      restId: "209675",
                      offerLogo: "offers/generic",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "20% OFF UPTO ₹125",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/dfb04dfd-509e-4fe2-896f-75e78e398330_Kotak.png",
                      offerIds: ["686370b9-7afb-435f-a8c9-c6f29cc3ac54"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE KOTAK811",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "209675",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/dfb04dfd-509e-4fe2-896f-75e78e398330_Kotak.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹150",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/52c92297-cc3d-4ba0-884a-0b95c20d6894_HSBC.png",
                      offerIds: ["f46211eb-0271-4869-b931-c4e2fe8d5ae8"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE HSBCFEST",
                      description: "ABOVE ₹499",
                      offerType: "offers",
                      restId: "209675",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/4/30/52c92297-cc3d-4ba0-884a-0b95c20d6894_HSBC.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                  {
                    info: {
                      header: "15% OFF UPTO ₹300",
                      offerTagColor: "#E46D47",
                      logoBottom:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/5/2/91510830-7b39-403d-ba59-977874e710d7_Citi.png",
                      offerIds: ["fcc23178-93ee-4f52-b558-67e5ec8bf848"],
                      expiryTime: "1970-01-01T00:00:00Z",
                      couponCode: "USE CITIFOODIE",
                      description: "ABOVE ₹1200",
                      offerType: "offers",
                      restId: "209675",
                      offerLogo:
                        "MARKETING_BANNERS/IMAGES/OFFERS/2024/5/2/91510830-7b39-403d-ba59-977874e710d7_Citi.png",
                      descriptionTextColor: "#7302060C",
                    },
                    cta: {
                      type: "OFFER_HALF_CARD",
                    },
                  },
                ],
                habitMilestoneInfo: {
                  callout: {},
                },
                loyaltyDiscoverPresentationInfo: {
                  logoCtx: {},
                },
              },
            },
          },
        },
      },
      {
        groupedCard: {
          cardGroupMap: {
            REGULAR: {
              cards: [
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.MenuVegFilterAndBadge",
                      badges: {},
                      vegOnlyDetails: {
                        imageId: "AutoVegOnly_qkjowj",
                        title: "Showing only vegetarian options.",
                        description:
                          "Tap on the VEG ONLY button to turn off the setting",
                      },
                      offersFilter: {
                        attributes: {
                          displayText: "Buy 1 Get 1",
                        },
                      },
                      topRatedFilter: {
                        attributes: {
                          displayText: "Ratings 4.0+",
                        },
                      },
                      kidsCategoryFilter: {
                        attributes: {
                          displayText: "Kids Favourites",
                          tooltip: {
                            enabled: true,
                            displayText:
                              "Kids Favourites Filter applied. Remove this filter to see the full Menu.",
                          },
                        },
                      },
                      vegFilter: {
                        attributes: {
                          displayText: "VEG",
                        },
                      },
                      nonvegFilter: {
                        attributes: {
                          displayText: "NONVEG",
                        },
                      },
                    },
                    relevance: {
                      type: "RELEVANCE_TYPE_ON_MENU_FILTER_TOGGLED",
                      sectionId: "MENU_FILTER_TOGGLE",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Recommended",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546767",
                              name: "Noodles Special",
                              category: "Chinese",
                              description:
                                "Noodles sauteed with capsicum, spring onions, green chillies, mixed with sauces and seasoned with spices.",
                              imageId: "q5ifheuwqyu38yrqg4ey",
                              inStock: 1,
                              isVeg: 1,
                              price: 11200,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984805",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290366",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 8000,
                                        id: "16290367",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "331 ratings",
                                  ratingCountV2: "331",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546770",
                              name: "Manchurian Special",
                              category: "Chinese",
                              description:
                                "A Chinese cuisine made with crispy vegetable balls and blended in a thick gravy made with variety of sauces. The flavour of ginger and garlic is well absorbed in the gravy giving an authentic touch to dish.",
                              imageId: "lifhstcsg0qb6ha9dgsq",
                              inStock: 1,
                              isVeg: 1,
                              price: 11200,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984808",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290372",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 8000,
                                        id: "16290373",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "174 ratings",
                                  ratingCountV2: "174",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546768",
                              name: "Hakka Noodles",
                              category: "Chinese",
                              description:
                                "Soft noodles tossed with fresh, assorted vegetables in a simple and tasty dressing",
                              imageId: "l8loh6ncuewzrfw36xnz",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984806",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290368",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 9600,
                                        id: "16290369",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: "Vinay",
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "56 ratings",
                                  ratingCountV2: "56",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546773",
                              name: "Cheese Chilli",
                              category: "Chinese",
                              description:
                                "Serves 1 | Spicy chilli is spooned over, and topped with, Shredded cheese for a bit of cheese in every paneer bite.",
                              imageId: "p2srgpssaq3s6qcknwqb",
                              inStock: 1,
                              isVeg: 1,
                              price: 22400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984811",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290378",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 19200,
                                        id: "16290379",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                spiceLevel: "MEDIUMSPICY",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "34 ratings",
                                  ratingCountV2: "34",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546772",
                              name: "Gravy Manchurian",
                              category: "Chinese",
                              description:
                                "Deep-fried, assorted veggies tossed in a thick and spicy Manchurian sauce.",
                              imageId: "radn3dsdj1pgj1a4i70j",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984810",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290376",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 9600,
                                        id: "16290377",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "86 ratings",
                                  ratingCountV2: "86",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546774",
                              name: "Mushroom Chilli",
                              category: "Chinese",
                              description:
                                "Serves 1 | Delectable mushrooms cooked in a spicy and tasty chilli sauce - perfect dish to satisfy your cravings.",
                              imageId: "i0qavfoqquks24wjmyvp",
                              inStock: 1,
                              isVeg: 1,
                              price: 20800,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984812",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290380",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 16000,
                                        id: "16290381",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                spiceLevel: "MEDIUMSPICY",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546781",
                              name: "Malai Cream Chaap",
                              category: "Gravy Chaap",
                              description:
                                "A delightfully flavor with mouthwatering Creamy Malai Chaap ; served along with refreshing Chutney",
                              imageId: "qysj4tk1hhdxia3bntr4",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984818",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290392",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15200,
                                        id: "16290393",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "318 ratings",
                                  ratingCountV2: "318",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546776",
                              name: "Gravy Chaap",
                              category: "Gravy Chaap",
                              description:
                                "A rich, creamy curry of soft succulent paneer and plenty of onions in a wonderful medley of spices, herbs and tomatoes",
                              imageId: "hzermwqifjdjybmhzxd2",
                              inStock: 1,
                              isVeg: 1,
                              price: 26400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984813",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290382",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 20000,
                                        id: "16290383",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "222 ratings",
                                  ratingCountV2: "222",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546777",
                              name: "Butter Masala Chaap",
                              category: "Gravy Chaap",
                              description:
                                "A delightfully flavor with mouthwatering butter masala chaap ; served along with refreshing Chutney",
                              imageId: "uxehgqndvibgpnitjbhs",
                              inStock: 1,
                              isVeg: 1,
                              price: 29600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984814",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290384",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 18400,
                                        id: "16290385",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "138 ratings",
                                  ratingCountV2: "138",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546782",
                              name: "Haryali Cream Chaap",
                              category: "Gravy Chaap",
                              imageId: "pzrvdkxq79otwwygxyhb",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984819",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290394",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15200,
                                        id: "16290395",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546780",
                              name: "Gravy Paneer",
                              category: "Gravy Chaap",
                              imageId: "hljj4bnz1cascizlzutv",
                              inStock: 1,
                              isVeg: 1,
                              price: 33600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984817",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290390",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 17600,
                                        id: "16290391",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546778",
                              name: "Rara Chaap",
                              category: "Gravy Chaap",
                              description:
                                "Serves 1 | Veg Preperation , A delightfully flavor with mouthwatering rara chaap ; served along with refreshing Chutney.",
                              imageId: "hcskfqoq6lbkcid5qkx6",
                              inStock: 1,
                              isVeg: 1,
                              price: 29600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984815",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290386",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 18400,
                                        id: "16290387",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "64 ratings",
                                  ratingCountV2: "64",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546779",
                              name: "Kadai Chaap",
                              category: "Gravy Chaap",
                              description:
                                "A rich, creamy curry of soft succulent paneer and plenty of onions in a wonderful medley of spices, herbs and tomatoes",
                              imageId: "ieeunfz7zgq9vbrx7klc",
                              inStock: 1,
                              isVeg: 1,
                              price: 29600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984816",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290388",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 18400,
                                        id: "16290389",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546797",
                              name: "Spring Roll",
                              category: "Rolls",
                              description:
                                "Fine wrap loaded with sliced vegetables and fried till they turn crisp. Spring rolls are a delicious treat to satisfy the evening snack cravings.",
                              imageId: "hn9nnrnczjr7zm9f0kng",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984829",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290416",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 6400,
                                        id: "16290417",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "149 ratings",
                                  ratingCountV2: "149",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546796",
                              name: "Cheese Corn Roll",
                              category: "Rolls",
                              description:
                                "A fried snack having crisp exterior and soft cheesy interior with cheese & corn filling.",
                              imageId: "vswazvanbprxrpuiwmlw",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984828",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290414",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 12800,
                                        id: "16290415",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "58 ratings",
                                  ratingCountV2: "58",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546792",
                              name: "Noodles Burger",
                              category: "Burgers",
                              description:
                                "A unique layered aloo patty with a spicy creamy sauce, covered with fresh lettuce and noodles in a soft corn bun.",
                              imageId: "woxphspcxaygua8akdya",
                              inStock: 1,
                              isVeg: 1,
                              price: 6400,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "566 ratings",
                                  ratingCountV2: "566",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546795",
                              name: "Special.Sk Burger",
                              category: "Burgers",
                              imageId: "daduqynbsmmmblkaxtks",
                              inStock: 1,
                              isVeg: 1,
                              price: 9600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "148 ratings",
                                  ratingCountV2: "148",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546794",
                              name: "Cheese Burger",
                              category: "Burgers",
                              description:
                                "Juicy and indulgent burger with crumb-fried cheese burst patty, served with lettuce, tomatoes, chopped onions, mayo and crisps.",
                              imageId: "u0sayv8psg0zbhnvhwob",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "64 ratings",
                                  ratingCountV2: "64",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546791",
                              name: "Cream Burger",
                              category: "Burgers",
                              description:
                                "A veg burger with veggie patty sandwiched between fresh buns with lot of cheese & lettuce.",
                              imageId: "qnklsbzte3qsjbesterz",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              showImage: true,
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "61 ratings",
                                  ratingCountV2: "61",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546783",
                              name: "Masala Cream Chaap",
                              category: "Tandoori Chaap",
                              imageId: "vkiyl6vx8tlmnrucfrdi",
                              inStock: 1,
                              isVeg: 1,
                              price: 14400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984820",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290396",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 11200,
                                        id: "16290397",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              showImage: true,
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "108 ratings",
                                  ratingCountV2: "108",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                      type: "CATEGORY_TYPE_RECOMMENDED",
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Chinese",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546767",
                              name: "Noodles Special",
                              category: "Chinese",
                              description:
                                "Noodles sauteed with capsicum, spring onions, green chillies, mixed with sauces and seasoned with spices.",
                              imageId: "q5ifheuwqyu38yrqg4ey",
                              inStock: 1,
                              isVeg: 1,
                              price: 11200,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984805",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290366",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 8000,
                                        id: "16290367",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "331 ratings",
                                  ratingCountV2: "331",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546770",
                              name: "Manchurian Special",
                              category: "Chinese",
                              description:
                                "A Chinese cuisine made with crispy vegetable balls and blended in a thick gravy made with variety of sauces. The flavour of ginger and garlic is well absorbed in the gravy giving an authentic touch to dish.",
                              imageId: "lifhstcsg0qb6ha9dgsq",
                              inStock: 1,
                              isVeg: 1,
                              price: 11200,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984808",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290372",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 8000,
                                        id: "16290373",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "174 ratings",
                                  ratingCountV2: "174",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546768",
                              name: "Hakka Noodles",
                              category: "Chinese",
                              description:
                                "Soft noodles tossed with fresh, assorted vegetables in a simple and tasty dressing",
                              imageId: "l8loh6ncuewzrfw36xnz",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984806",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290368",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 9600,
                                        id: "16290369",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "56 ratings",
                                  ratingCountV2: "56",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546773",
                              name: "Cheese Chilli",
                              category: "Chinese",
                              description:
                                "Medium Spicy | Serves 1 | Spicy chilli is spooned over, and topped with, Shredded cheese for a bit of cheese in every paneer bite.",
                              imageId: "p2srgpssaq3s6qcknwqb",
                              inStock: 1,
                              isVeg: 1,
                              price: 22400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984811",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290378",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 19200,
                                        id: "16290379",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                spiceLevel: "MEDIUMSPICY",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "34 ratings",
                                  ratingCountV2: "34",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546772",
                              name: "Gravy Manchurian",
                              category: "Chinese",
                              description:
                                "Deep-fried, assorted veggies tossed in a thick and spicy Manchurian sauce.",
                              imageId: "radn3dsdj1pgj1a4i70j",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984810",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290376",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 9600,
                                        id: "16290377",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "86 ratings",
                                  ratingCountV2: "86",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546774",
                              name: "Mushroom Chilli",
                              category: "Chinese",
                              description:
                                "Medium Spicy | Serves 1 | Delectable mushrooms cooked in a spicy and tasty chilli sauce - perfect dish to satisfy your cravings.",
                              imageId: "i0qavfoqquks24wjmyvp",
                              inStock: 1,
                              isVeg: 1,
                              price: 20800,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984812",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290380",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 16000,
                                        id: "16290381",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                spiceLevel: "MEDIUMSPICY",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "30 ratings",
                                  ratingCountV2: "30",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Gravy Chaap",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546781",
                              name: "Malai Cream Chaap",
                              category: "Gravy Chaap",
                              description:
                                "A delightfully flavor with mouthwatering Creamy Malai Chaap ; served along with refreshing Chutney",
                              imageId: "qysj4tk1hhdxia3bntr4",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984818",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290392",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15200,
                                        id: "16290393",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "318 ratings",
                                  ratingCountV2: "318",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546776",
                              name: "Gravy Chaap",
                              category: "Gravy Chaap",
                              description:
                                "A rich, creamy curry of soft succulent paneer and plenty of onions in a wonderful medley of spices, herbs and tomatoes",
                              imageId: "hzermwqifjdjybmhzxd2",
                              inStock: 1,
                              isVeg: 1,
                              price: 26400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984813",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290382",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 20000,
                                        id: "16290383",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.3",
                                  ratingCount: "222 ratings",
                                  ratingCountV2: "222",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546777",
                              name: "Butter Masala Chaap",
                              category: "Gravy Chaap",
                              description:
                                "A delightfully flavor with mouthwatering butter masala chaap ; served along with refreshing Chutney",
                              imageId: "uxehgqndvibgpnitjbhs",
                              inStock: 1,
                              isVeg: 1,
                              price: 29600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984814",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290384",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 18400,
                                        id: "16290385",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.6",
                                  ratingCount: "138 ratings",
                                  ratingCountV2: "138",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546782",
                              name: "Haryali Cream Chaap",
                              category: "Gravy Chaap",
                              imageId: "pzrvdkxq79otwwygxyhb",
                              inStock: 1,
                              isVeg: 1,
                              price: 20000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984819",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290394",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 15200,
                                        id: "16290395",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "27 ratings",
                                  ratingCountV2: "27",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546780",
                              name: "Gravy Paneer",
                              category: "Gravy Chaap",
                              imageId: "hljj4bnz1cascizlzutv",
                              inStock: 1,
                              isVeg: 1,
                              price: 33600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984817",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290390",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 17600,
                                        id: "16290391",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "4 ratings",
                                  ratingCountV2: "4",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546778",
                              name: "Rara Chaap",
                              category: "Gravy Chaap",
                              description:
                                "Serves 1 | Veg Preperation , A delightfully flavor with mouthwatering rara chaap ; served along with refreshing Chutney.",
                              imageId: "hcskfqoq6lbkcid5qkx6",
                              inStock: 1,
                              isVeg: 1,
                              price: 29600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984815",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290386",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 18400,
                                        id: "16290387",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                                portionSize: "Serves 1",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "64 ratings",
                                  ratingCountV2: "64",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546779",
                              name: "Kadai Chaap",
                              category: "Gravy Chaap",
                              description:
                                "A rich, creamy curry of soft succulent paneer and plenty of onions in a wonderful medley of spices, herbs and tomatoes",
                              imageId: "ieeunfz7zgq9vbrx7klc",
                              inStock: 1,
                              isVeg: 1,
                              price: 29600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984816",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290388",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 18400,
                                        id: "16290389",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "2.8",
                                  ratingCount: "10 ratings",
                                  ratingCountV2: "10",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Burgers",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546792",
                              name: "Noodles Burger",
                              category: "Burgers",
                              description:
                                "A unique layered aloo patty with a spicy creamy sauce, covered with fresh lettuce and noodles in a soft corn bun.",
                              imageId: "woxphspcxaygua8akdya",
                              inStock: 1,
                              isVeg: 1,
                              price: 6400,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "566 ratings",
                                  ratingCountV2: "566",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546793",
                              name: "Double Tikki Burger",
                              category: "Burgers",
                              description:
                                "Delightfully hearty burger with a Double vegetable patty layered on a bed of fresh lettuce, onions and more.",
                              imageId: "vub61whlxs3d87b3ad8h",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.0",
                                  ratingCount: "138 ratings",
                                  ratingCountV2: "138",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546795",
                              name: "Special.Sk Burger",
                              category: "Burgers",
                              imageId: "daduqynbsmmmblkaxtks",
                              inStock: 1,
                              isVeg: 1,
                              price: 9600,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.2",
                                  ratingCount: "148 ratings",
                                  ratingCountV2: "148",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546794",
                              name: "Cheese Burger",
                              category: "Burgers",
                              description:
                                "Juicy and indulgent burger with crumb-fried cheese burst patty, served with lettuce, tomatoes, chopped onions, mayo and crisps.",
                              imageId: "u0sayv8psg0zbhnvhwob",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "64 ratings",
                                  ratingCountV2: "64",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546791",
                              name: "Cream Burger",
                              category: "Burgers",
                              description:
                                "A veg burger with veggie patty sandwiched between fresh buns with lot of cheese & lettuce.",
                              imageId: "qnklsbzte3qsjbesterz",
                              inStock: 1,
                              isVeg: 1,
                              price: 8000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "61 ratings",
                                  ratingCountV2: "61",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Tandoori Chaap",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546783",
                              name: "Masala Cream Chaap",
                              category: "Tandoori Chaap",
                              imageId: "vkiyl6vx8tlmnrucfrdi",
                              inStock: 1,
                              isVeg: 1,
                              price: 14400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984820",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290396",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 11200,
                                        id: "16290397",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.8",
                                  ratingCount: "108 ratings",
                                  ratingCountV2: "108",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546788",
                              name: "Masala Paneer Tikka",
                              category: "Tandoori Chaap",
                              description:
                                "Soft paneer cubes marinated in a seasoned masala and cooked in a tandoor.",
                              imageId: "oikwexeqklbyvf6ff79p",
                              inStock: 1,
                              isVeg: 1,
                              price: 22400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984825",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290406",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 19200,
                                        id: "16290407",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.7",
                                  ratingCount: "20 ratings",
                                  ratingCountV2: "20",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546787",
                              name: "Malai Paneer Tikka",
                              category: "Tandoori Chaap",
                              description:
                                "Flavor-packed juicy & soft paneer pieces tossed in cream - perfect to satiate your cravings.",
                              imageId: "mhbusl2ukj1pkrrvlssr",
                              inStock: 1,
                              isVeg: 1,
                              price: 22400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984824",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290404",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 19200,
                                        id: "16290405",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "5.0",
                                  ratingCount: "23 ratings",
                                  ratingCountV2: "23",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546784",
                              name: "Afgani Chaap",
                              category: "Tandoori Chaap",
                              imageId: "ptl55jq5ah6ygc8zuk9j",
                              inStock: 1,
                              price: 14400,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984821",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290398",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 11200,
                                        id: "16290399",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "NONVEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.6",
                                  ratingCount: "29 ratings",
                                  ratingCountV2: "29",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546786",
                              name: "Mushroom Tikka",
                              category: "Tandoori Chaap",
                              description:
                                "Mushroom tikka is an Indian appetizer made by marinating & grilling mushrooms with spices, herbs and yogurt.",
                              imageId: "cynkhakucuz6iuh3ttre",
                              inStock: 1,
                              isVeg: 1,
                              price: 17600,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984823",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290402",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 14400,
                                        id: "16290403",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.8",
                                  ratingCount: "9 ratings",
                                  ratingCountV2: "9",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "46413412",
                              name: "Fry Champ [2 Piece]",
                              category: "Tandoori Chaap",
                              description: "2 pcs",
                              imageId: "sfbetckfjgtl88ewmbvj",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.5",
                                  ratingCount: "3 ratings",
                                  ratingCountV2: "3",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Rolls",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546797",
                              name: "Spring Roll",
                              category: "Rolls",
                              description:
                                "Fine wrap loaded with sliced vegetables and fried till they turn crisp. Spring rolls are a delicious treat to satisfy the evening snack cravings.",
                              imageId: "hn9nnrnczjr7zm9f0kng",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984829",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290416",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 6400,
                                        id: "16290417",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {
                                text: "Bestseller",
                                textColor: "#ffffff",
                                topBackgroundColor: "#d53d4c",
                                bottomBackgroundColor: "#b02331",
                              },
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              isBestseller: true,
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.1",
                                  ratingCount: "149 ratings",
                                  ratingCountV2: "149",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546796",
                              name: "Cheese Corn Roll",
                              category: "Rolls",
                              description:
                                "A fried snack having crisp exterior and soft cheesy interior with cheese & corn filling.",
                              imageId: "vswazvanbprxrpuiwmlw",
                              inStock: 1,
                              isVeg: 1,
                              price: 24000,
                              variants: {
                                variantGroups: [
                                  {
                                    groupId: "4984828",
                                    name: "Quantity",
                                    variations: [
                                      {
                                        name: "Half",
                                        default: 1,
                                        id: "16290414",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                      {
                                        name: "Full",
                                        price: 12800,
                                        id: "16290415",
                                        inStock: 1,
                                        isVeg: 1,
                                        isEnabled: 1,
                                      },
                                    ],
                                  },
                                ],
                              },
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.4",
                                  ratingCount: "58 ratings",
                                  ratingCountV2: "58",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Fry Champ",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65350294",
                              name: "Fry Champ 6 Pcs",
                              category: "Fry Champ",
                              description:
                                "A delightfully flavor with mouthwatering fried chaap ; served along with refreshing Chutney",
                              inStock: 1,
                              isVeg: 1,
                              price: 30400,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.2",
                                  ratingCount: "8 ratings",
                                  ratingCountV2: "8",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65350293",
                              name: "Fry Champ 4pcs",
                              category: "Fry Champ",
                              description:
                                "A delightfully flavor with mouthwatering fried chaap ; served along with refreshing Chutney",
                              inStock: 1,
                              isVeg: 1,
                              price: 20800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.5",
                                  ratingCount: "43 ratings",
                                  ratingCountV2: "43",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65350292",
                              name: "Fry Champ 3pcs",
                              category: "Fry Champ",
                              description:
                                "A delightfully flavor with mouthwatering fried chaap ; served along with refreshing Chutney",
                              inStock: 1,
                              isVeg: 1,
                              price: 16000,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "4.9",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "65350291",
                              name: "Fry Champ 2pcs",
                              category: "Fry Champ",
                              description:
                                "A delightfully flavor with mouthwatering fried chaap ; served along with refreshing Chutney",
                              inStock: 1,
                              isVeg: 1,
                              price: 12800,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              offerTags: [
                                {
                                  title: "Buy 1 Get 1",
                                  textColor: "#DB6742",
                                  backgroundColor: "#FAE8E3",
                                },
                              ],
                              itemBadge: {},
                              badgesV2: {},
                              itemNudgeType: "B1G1",
                              itemLevelDiscount: "ITEM_LEVEL_DISCOUNT_B1G1",
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.2",
                                  ratingCount: "12 ratings",
                                  ratingCountV2: "12",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
                      title: "Roti",
                      itemCards: [
                        {
                          card: {
                            "@type":
                              "type.googleapis.com/swiggy.presentation.food.v2.Dish",
                            info: {
                              id: "43546798",
                              name: "Rumali Roti",
                              category: "Roti",
                              description:
                                "Aan exotic thin indian flatbread recipe made with plain flour or maida atta.",
                              imageId: "ttu4edf9jfre8z2avpml",
                              inStock: 1,
                              isVeg: 1,
                              price: 3200,
                              variants: {},
                              variantsV2: {},
                              itemAttribute: {
                                vegClassifier: "VEG",
                              },
                              ribbon: {},
                              type: "ITEM",
                              itemBadge: {},
                              badgesV2: {},
                              ratings: {
                                aggregatedRating: {
                                  rating: "3.9",
                                  ratingCount: "97 ratings",
                                  ratingCountV2: "97",
                                },
                              },
                            },
                            analytics: {},
                            hideRestaurantDetails: true,
                          },
                        },
                      ],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantLicenseInfo",
                      type: "FSSAI",
                      imageId: "fssai_final_edss9i",
                      text: ["License No. 22120028000711"],
                    },
                  },
                },
                {
                  card: {
                    card: {
                      "@type":
                        "type.googleapis.com/swiggy.presentation.food.v2.RestaurantAddress",
                      name: "S K Food Plaza",
                      area: "Ludhiana Junction",
                      completeAddress: "New Shiv Puri, Ludhiana, Punjab, India",
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
    firstOffsetRequest: true,
    isQCLink: false,
  },
  tid: "e28404d1-3473-4166-aa20-6ad6dc124ddf",
  sid: "e180f779-c9f5-4c85-9eda-4c0dc996f7a8",
  deviceId: "fb89da8b-b12e-150a-52a2-3f8dae392d5a",
  csrfToken: "uhWjCFGeu70B-LD2AtX1p1wQm8MLlL6uppFUMi_g",
};

/**
 * Print values of
 * line no:
 *
 *
 *
 * 2562
 * 840
 * 650
 * 3544
 * 10
 * 899
 * 1567
 * 587
 * 2222
 * 3333
 * 999
 * 1111
 * 2500
 * 89
 * 786
 * 1854
 */

// short cut to go on line: ctrl+ g

// swiggyResponse.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card.card.itemCards[0]
console.log(
  "testing--",
  swiggyResponse.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[4].card
    .card.itemCards[0]
);

console.log(
  "testing 1--",
  swiggyResponse.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card
    .card.itemCards[2].card.info.badgesV2
);

console.log(
  "rumali roti--",
  swiggyResponse.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[8].card
    .card.itemCards[0].card.info.name
);

/**
 * Hi My name is Ankit.
 * I went to a {famous} Restro and i ordered {name}.
 * Which is  a type of {category}
 * it was {variations.name = half} plate.
 * It costed me around {price}
 * It was a {VEG-Non}. Public gave it {rating} ratings.
 * I am suggesting you to go and try {name} and give rating more than {rating}
 *
 *
 */
