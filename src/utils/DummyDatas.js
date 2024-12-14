const nearbyHotels = [
  {
    id: "1",
    name: "The pheels",
    location: "Ajah, Lagos",
    price: "25,000",
    rating: "4.5",
    image: require("../../assets/images/slider1.jpg"),
  },
  {
    id: "2",
    name: "Estabeez",
    location: "Ikoyi, Lagos",
    price: "122,000",
    rating: "4.1",
    image: require("../../assets/images/slider8.jpg"),
  },
  {
    id: "3",
    name: "Saragoza",
    location: "Pukhet, Tailand",
    price: "25,000",
    rating: "3.9",
    image: require("../../assets/images/slider3.jpg"),
  },
  {
    id: "4",
    name: "Willmart",
    location: "Izmir, Turkey",
    price: "140,000",
    rating: "4.8",
    image: require("../../assets/images/slider4.jpg"),
  },
];

const recomendedHotels = [
  {
    id: "1",
    name: "Estabeez",
    location: "Ikoyi, Lagos",
    price: "122,000",
    rating: "4.1",
    image: require("../../assets/images/slider8.jpg"),
  },
  {
    id: "2",
    name: "Willmart",
    location: "Izmir, Turkey",
    price: "140,000",
    rating: "4.8",
    image: require("../../assets/images/slider4.jpg"),
  },
  {
    id: "3",
    name: "Saragoza",
    location: "Pukhet, Tailand",
    price: "25,000",
    rating: "3.9",
    image: require("../../assets/images/slider3.jpg"),
  },
  {
    id: "4",
    name: "The pheels",
    location: "Ajah, Lagos",
    price: "25,000",
    rating: "4.5",
    image: require("../../assets/images/slider1.jpg"),
  },
];

const popularHotels = [
  {
    id: "1",
    name: "Willmart",
    location: "Izmir, Turkey",
    price: "140,000",
    rating: "4.8",
    image: require("../../assets/images/slider4.jpg"),
  },
  {
    id: "2",
    name: "The pheels",
    location: "Ajah, Lagos",
    price: "25,000",
    rating: "4.5",
    image: require("../../assets/images/slider1.jpg"),
  },
  {
    id: "3",
    name: "Estabeez",
    location: "Ikoyi, Lagos",
    price: "122,000",
    rating: "4.1",
    image: require("../../assets/images/slider8.jpg"),
  },
  {
    id: "4",
    name: "Saragoza",
    location: "Pukhet, Tailand",
    price: "25,000",
    rating: "3.9",
    image: require("../../assets/images/slider3.jpg"),
  },
];

const slidesData = [
  {
    image: require("../../assets/images/slider1.jpg"),
    textLines: [
      { text: "Last-minute", style: "sliderTextSemibold" },
      { text: "weekend", style: "sliderTextbold" },
      { text: "deals", style: "sliderText" },
    ],
  },
  {
    image: require("../../assets/images/slider8.jpg"),
    textLines: [
      { text: "Get", style: "sliderTextSemibold" },
      { text: "10% OFF", style: "sliderTextbold" },
      { text: "on your first booking", style: "sliderText" },
    ],
  },
  {
    image: require("../../assets/images/slider5.jpg"),
    textLines: [
      { text: "Planning", style: "sliderTextSemibold" },
      { text: "a new Escape?", style: "sliderTextbold" },
      { text: "Let's explore", style: "sliderText" },
    ],
  },
];

export { nearbyHotels, recomendedHotels, popularHotels, slidesData };
