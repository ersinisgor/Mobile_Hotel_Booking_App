import { hotels } from "./dummyDatas";

export const shuffleArray = array => {
  return array
    .map(item => ({ ...item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ sort, ...item }) => item);
};

const uniqueFacilities = Array.from(
  new Set(hotels.flatMap(hotel => hotel.facilities))
);

const facilityIconMap = {
  pool: "pool",
  spa: "spa",
  wifi: "wifi",
  gym: "fitness-center",
  beach: "beach-access",
  restaurant: "restaurant",
  bar: "wine-bar",
  parking: "local-parking",
  ski: "downhill-skiing",
  breakfast: "egg-alt",
  mountain_view: "area-chart",
  hot_tub: "hot-tub",
  fireplace: "fireplace",
  city_view: "location-city",
  meeting: "work",
  pet: "pets",
  lake_view: "waves",
  boat: "directions-boat",
  yoga: "accessibility-new",
  nature: "nature",
  snorkeling: "emoji-people",
  all_inclusive: "all-inclusive",
  cycling: "directions-bike",
  lake: "houseboat",
};

export const facilitiesWithIcons = uniqueFacilities.map((facility, index) => ({
  id: (index + 1).toString(),
  name: facility,
  displayName: facility
    .split("_")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" "),
  icon: facilityIconMap[facility] || "help-outline",
}));

export const facilities = [
  { displayName: "Pool", icon: "pool", id: "1", name: "pool" },
  { displayName: "Spa", icon: "spa", id: "2", name: "spa" },
  { displayName: "Wifi", icon: "wifi", id: "3", name: "wifi" },
  { displayName: "Gym", icon: "fitness-center", id: "4", name: "gym" },
  { displayName: "Beach", icon: "beach-access", id: "5", name: "beach" },
  {
    displayName: "Restaurant",
    icon: "restaurant",
    id: "6",
    name: "restaurant",
  },
  { displayName: "Bar", icon: "wine-bar", id: "7", name: "bar" },
  { displayName: "Parking", icon: "local-parking", id: "8", name: "parking" },
  { displayName: "Ski", icon: "downhill-skiing", id: "9", name: "ski" },
  { displayName: "Breakfast", icon: "egg-alt", id: "10", name: "breakfast" },
  {
    displayName: "Mountain View",
    icon: "area-chart",
    id: "11",
    name: "mountain_view",
  },
  { displayName: "Hot Tub", icon: "hot-tub", id: "12", name: "hot_tub" },
  { displayName: "Fireplace", icon: "fireplace", id: "13", name: "fireplace" },
  {
    displayName: "City View",
    icon: "location-city",
    id: "14",
    name: "city_view",
  },
  { displayName: "Meeting", icon: "work", id: "15", name: "meeting" },
  { displayName: "Pet", icon: "pets", id: "16", name: "pet" },
  { displayName: "Lake View", icon: "waves", id: "17", name: "lake_view" },
  { displayName: "Boat", icon: "directions-boat", id: "18", name: "boat" },
  { displayName: "Yoga", icon: "accessibility-new", id: "19", name: "yoga" },
  { displayName: "Nature", icon: "nature", id: "20", name: "nature" },
  {
    displayName: "Snorkeling",
    icon: "emoji-people",
    id: "21",
    name: "snorkeling",
  },
  {
    displayName: "All-inclusive",
    icon: "help-outline",
    id: "22",
    name: "all-inclusive",
  },
  {
    displayName: "Cycling",
    icon: "directions-bike",
    id: "23",
    name: "cycling",
  },
  { displayName: "Lake", icon: "houseboat", id: "24", name: "lake" },
];
