const { seedCategories } = require('./categoriesSeeder');
const { seedRoles } = require('./rolesSeeder')
const { seedUsers } = require('./usersSeeder')
const { seedReviews } = require('./reviewsSeeder')
const { seedTransactions } = require('./transactionsSeeder');
const { seedProducts } = require('./productsSeeder');
const { seedAddress } = require('./addressdeliveriesSeeders');
const { seedWarehouses } = require('./warehousesSeeders');
const { seedInvoices } = require('./invoicesSeeder');

module.exports = {
  seedCategories,
  seedRoles,
  seedUsers,
  seedReviews,
  seedTransactions,
  seedProducts,
  seedAddress,
  seedWarehouses,
  seedInvoices,
};