const products = [
  {
    name: 'Airpods Wireless Bluetooth Headphones',
    image: '/images/airpods.jpg',
    description:
      'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
    brand: 'Apple',
    conditionType: 'New',
    category: 'Electronics',
    price: 89.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
    isApproved: true
  },
  {
    name: 'iPhone 13 Pro 256GB Memory',
    image: '/images/phone.jpg',
    description:
      'Introducing the iPhone 13 Pro. A transformative triple-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
    brand: 'Apple',
    conditionType: 'Old',
    category: 'Electronics',
    price: 599.99,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
    isApproved: true
  },
  {
    name: 'Cannon EOS 80D DSLR Camera',
    image: '/images/camera.jpg',
    description:
      'Characterized by versatile imaging specs, the Canon EOS 80D further clarifies itself using a pair of robust focusing systems and an intuitive design',
    brand: 'Cannon',
    conditionType: 'New',
    category: 'Electronics',
    price: 929.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
    isApproved: true
  },
  {
    name: 'Sony Playstation 5',
    image: '/images/playstation.jpg',
    description:
      'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
    brand: 'Sony',
    category: 'Electronics',
    conditionType: 'New',
    price: 399.99,
    countInStock: 11,
    rating: 5,
    numReviews: 12,
    isApproved: true
  },
  {
    name: 'Logitech G-Series Gaming Mouse',
    image: '/images/mouse.jpg',
    description:
      'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
    brand: 'Logitech',
    category: 'Electronics',
    conditionType: 'Old',
    price: 49.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 10,
    isApproved: true
  },
  {
    name: 'Amazon Echo Dot 3rd Generation',
    image: '/images/alexa.jpg',
    description:
      'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
    brand: 'Amazon',
    category: 'Electronics',
    conditionType: 'Old',
    price: 29.99,
    countInStock: 0,
    rating: 4,
    numReviews: 12,
    isApproved: true
  },
  {
    name: 'Tshirt',
    image: '/images/Tshirt.jpg',
    description:
      'Dry fit For GYM',
    brand: 'Adidas',
    category: 'Clothing',
    conditionType: 'Old',
    price: 35.99,
    countInStock: 5,
    rating: 4,
    numReviews: 10,
    isApproved: true
  },
  {
    name: 'Jeans',
    image: '/images/Jeans.jpg',
    description:
      'Fadded Jeans',
    brand: 'Levis',
    category: 'Clothing',
    conditionType: 'Old',
    price: 35.99,
    countInStock: 5,
    rating: 4.4,
    numReviews: 1,
    isApproved: true
  },
  {
    name: 'Skirt',
    image: '/images/Skirt.jpg',
    description:
      'Black Skirt',
    brand: 'Forever 21',
    category: 'Clothing',
    conditionType: 'New',
    price: 34,
    countInStock: 5,
    rating: 4.8,
    numReviews: 2,
    isApproved: true
  },
  {
    name: 'Joggers',
    image: '/images/Joggers.jpg',
    description:
      'Grey Cotton Joggers',
    brand: 'Forever 21',
    category: 'Clothing',
    conditionType: 'New',
    price: 90,
    countInStock: 67,
    rating: 4.8,
    numReviews: 2,
    isApproved: true
  },
  {
    name: 'Red lipstick',
    image: '/images/lipstick.jpg',
    description:
      'Red lipstick Matte',
    brand: 'MAC',
    category: 'Cosmetics',
    conditionType: 'New',
    price: 100,
    countInStock: 5,
    rating: 4.8,
    numReviews: 0,
    isApproved: true
  },

  {
  name: 'Gucci Perfume',
  image: '/images/Perfume.jpg',
  description:
    'Gucci Perfume Milf Fragrance.',
  brand: 'MAC',
  category: 'Cosmetics',
  conditionType: 'Old',
  price: 90,
  countInStock: 15,
  rating: 0,
  numReviews: 8,
  isApproved: true
},
{
  name: 'Gucci Perfume',
  image: '/images/Perfume.jpg',
  description:
    'Gucci Perfume Milf Fragrance.',
  brand: 'MAC',
  category: 'Cosmetics',
  conditionType: 'Old',
  price: 90,
  countInStock: 15,
  rating: 0,
  numReviews: 8,
  isApproved: true
},
{
  name: 'Face Powder',
  image: '/images/facepowder.jpg',
  description:
    'FacePowder for Brown skin and SPF 50++ ',
  brand: 'NARS',
  category: 'Cosmetics',
  conditionType: 'New',
  price: 150,
  countInStock: 12,
  rating: 4,
  numReviews: 8,
  isApproved: true
},

{
name: 'Curious Minds',
image: '/images/Curious_Minds.jpg',
description:
  'Interesting Facts For Curious Minds: 1572 Random But Mind-Blowing Facts About History, Science, Pop Culture And Everything In Between Paperback – July 18, 2022 ',
brand: 'Penguins Books',
category: 'Books',
conditionType: 'New',
price: 30,
countInStock: 12,
rating: 3,
numReviews: 3,
isApproved: true
},

{
  name: 'Atomic Habits',
  image: '/images/AtomicHabits.jpg',
  description:
    'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones Hardcover – October 16, 2018 ',
  brand: 'Penguins Books',
  category: 'Books',
  conditionType: 'New',
  price: 90,
  countInStock: 2,
  rating: 3,
  numReviews: 3,
  isApproved: false
  },
];

export default products;