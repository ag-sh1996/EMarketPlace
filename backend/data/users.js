import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    lastname: 'Patel',
    mobile:'9999999988',
    SSN:'643-09-876',
    address:'502 SE 3rd Street',
    city:'Lees Summit',
    postalCode: '64063',
    country: 'USA1',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
      name: 'Seller ',
      lastname: 'Patel',
      mobile:'9999999988',
      SSN:'643-09-876',
      address:'416 SE 3rd Street',
      city:'Lees Summit',
      postalCode: '64064',
      country: 'USA2',
      email: 'seller@email.com',
      password: bcrypt.hashSync('123456', 10),
      isSeller: true,
  },
  {
    name: 'John ',
      lastname: 'Doe',
      mobile:'9999999988',
      SSN:'643-09-876',
      address:'416 SE 3rd Street',
      city:'Lees Summit',
      postalCode: '64065',
      country: 'USA3',
      email: 'john@email.com',
      password: bcrypt.hashSync('123456', 10),
  },
  {
      name: 'Jane ',
      lastname: 'Doe',
      mobile:'9444999988',
      SSN:'643-09-876',
      address:'416 SE 4th Street',
      city:'Lees Summit',
      postalCode: '64066',
      country: 'USA4',
      email: 'jane@email.com',
      password: bcrypt.hashSync('123456', 10),
  },
];

export default users;