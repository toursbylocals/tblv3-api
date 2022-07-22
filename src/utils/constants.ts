export const ENV = {
  DEV: 'development',
  STAGING: 'staging',
  TEST: 'test',
  PROD: 'production'
} as const

export const SQUADS = {
  QEM: 'qem',
  GATOUREX: 'gatourex',
  GCSTOUREX: 'gcstourex',
  ACSTOURES: 'acstourex',
  LOGISTICS: 'logistics',
  MARKETING: 'marketing',
  ACCOUNTING: 'accounting',
  CUSTOMERSUPPORTOPERATIONS: 'customersupportoperations',
  SUPPLIERSSUPPORTOPERATIONS: 'suppliersupportoperations',
  AGENTS: 'agents',
  AFFILIATES: 'affiliates',
  SUPPLIER: 'supplier',
  CUSTOMER: 'customer',
  GUIDEAPPLICANT: 'guideapplicant',
  ACCOUNTMANAGERS: 'accountmanagers',
  LEGAL: 'legal',
  PCA: 'pca',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const ROLES = {
  OWNER: 'owner',
  ADMIN: 'admin',
  USER: 'user',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const LANGUAGES = {
  ENGLISH: 'english',
  SPANISH: 'spanish',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const MEDIA_SUPPORTED = {
  MP4: 'mp4',
  JPEG: 'jpeg',
  JPG: 'jpg',
  PNG: 'png',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const CATEGORY = {
  CITY: 'city',
  CYCLING: 'cycling',
  ADVENTRUE: 'adventure',
  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const TRAIT = {
  HIKING: 'hiking',
  HISTORY: 'history',
  DIVING: 'diving',

  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
} as const

export const PRODUCT_TYPE = {
  CUSTOM_TOUR: 'CUSTOM_TOUR',
  SHORE_EX: 'SHORE_EX',
  TICKETS: 'TICKETS',
  TRANSPORTATION: 'TRANSPORTATION',
  TOUR: 'TOUR',

  all() {
    return Object.values(this).filter((status) => typeof status !== 'function')
  }
}

// export const PROMO_CODE = {
//   COUPON_CODE: 'promocode',
//   DISCOUNT: 'discount',
//   FREE_TICKET: 'freeticket',
//   FREE_TRANSPORTATION: 'freetransportation',
//   FREE_ADDON: 'freeaddon',
//   FREE_REGULAR_TOUR: 'freeregulartour',

//   all() {
//     return Object.values(this).filter((status) => typeof status !== 'function')
//   }
// }

/* 
CURRENT TBL CATEGORIES:
City
Cycling
Food and Wine
Water - Kayak, Rafting, Sailing
Museums / Culture
Diving
Adventure / Active
Fishing
Hiking and Walking
Horseback Riding
Nature and Wildlife
Youth and Family
Volunteer
Other
Shore Excursion
After Dark
Day Trip / Out of Town
First Time Visitor
Local Experience
Shopping
Religious Heritage

CURRENT TBL TRAITS:
History
Art & Culture
Food & Drink
Outdoors / Nature
Local Events
Classes & Workshops
Highlights
Shopping
People
Religion
Architecture
Jewish Heritage
Other Religious Heritage
Periods
Historical Events
Archeology
History Museums
Ethnic
Day Trip / Out Of Town
Layover
Photography
Home Dinners
Restaurants
Food Markets
Tasting
Street Food
Picnic
Wineries
Craft Beer
Day Trip / Out of Town
Photography
Safari
Beach
Hiking / Trekking
Wild Areas
Bike
Water Sports
Fishing
Winter Sports
National Parks
Animal Watching
Visit Local Communities
Scenic Roads
Outdoor Sports
Day Trip / Out of Town
Music
Seasonal/Festival
Concert
Comedy
Day Trip / Out of Town
Animal Riding
Cooking
Craftsmanship
Music
Art Workshop
Floral
Martial Arts
Dance
Sports
Language
Drinks
Day Trip / Out Of Town
Animal Watching
Museums Must See
History
Art
Architecture
Music
TV & Movies
Landscape
Markets
Views / Vistas
Day Trip / Out Of Town
Archeology
Local Market
Mall
Boutiques
Day Trip / Out Of Town
Beach
Genealogy
Local Communities
Day Trip / Out Of Town
Cocktails
Heritage
Sacred Sites
Service
Jewish Heritage
Day Trip / Out Of Town
Fashion
Vintage
Contemporary
Religious
Monuments
Day Trip / Out Of Town
Art & Culture
Architecture
History
Food Casual
Food Traditional
Views / Vistas
Outdoors
Local Expert
Events
Workshops
Music
Movie
Literature
Festival
Event
Camping
Photography
Cooking
Market
Dinner
BBQ
Restaurant
Picnic
Food
Drink
Hiking
Countryside
Mountain
Culture
Bike
Artisan
Chef
Grower
Musician
Historian
Wine
Sommelier
Tasting
Horse Riding
Coffee
Bird Watching
Hot Air Balloon
Mountain Climbing
Pilgrim
After Dark
Family
Buddhist Heritage
Protestant Heritage
Catholic Heritage
Islamic Heritage
Military History
Beer
Chocolate
Boat Ride
Shops
National Parks
Museums
Whiskey
Local Flora
Local Fauna
Adventure
Monuments
Royalty
Eco Tourism
Sacred Sites
City
Small Town/Village
Nature
Forest
Must See
Nice to See
Public Transportation
Private Transportation
Walking
Bike
Step On
Other
Accommodation
People
Religion
Shopping
TV & Movies
Literature
Paintings & Sculptures
Events
Art Museums
Street Art
Music
Day Trip / Out Of Town
History
Art & Culture
Architecture
Food Casual
Food Traditional
LGBTQ Focus
Outdoor / Nature
Ghost Tour
Local Events
Classes & Workshops
Heritage
Landscape
Pub/Bars
Scenic road
Sports
Tea
UNESCO Heritage Site
Water Appreciation (lakes-waterfalls)
Yes
No
Not yet reviewed
*/
