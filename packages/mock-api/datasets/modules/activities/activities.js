const faker = require('faker');

module.exports = Array.from(new Array(85), (_, i) => ({
  activity_name: faker.name.firstName(),
  last_name: faker.name.lastName(),
  phone: faker.phone.phoneNumber(),
  id: i + 1,
}));
