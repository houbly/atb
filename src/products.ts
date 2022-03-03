const products = [
  {
    id: '0000001',
    name: 'Face Mask',
    thumbnail:
      'https://images.unsplash.com/photo-1589091683318-a10f065d844a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 2.5,
    groupDiscount: {
      groupQuantity: 2,
      groupPrice: 4,
      description: '2 for £4',
    },
  },
  {
    id: '0000002',
    name: 'Toilet Paper',
    thumbnail:
      'https://images.unsplash.com/photo-1633002161416-8e2fafa0996b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    price: 0.65,
    groupDiscount: {
      groupQuantity: 6,
      groupPrice: 3.25,
      description: '6 for the price of 5',
    },
  },
  {
    id: '0000003',
    name: 'Toilet Paper Deluxe',
    thumbnail:
      'https://images.unsplash.com/photo-1584937248081-634bb38393fc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
    price: 1,
  },
];

export default products;
