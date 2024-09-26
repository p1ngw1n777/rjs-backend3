const express = require('express')
const router = require('./controllers/index.js')
const cors = require('cors')


const app = express()
const port = 3001
app.use(cors());
//app.use(corsMiddleWare)
const sequelize = require('./db')
const bodyParser = require('body-parser')
const { 
  seedCategories,
  seedRoles,
  seedUsers,
  seedReviews,
  seedTransactions,
  seedProducts,
  seedAddress,
  seedWarehouses,
  seedInvoices,
} = require('./seeders/index.js')


// Включаем middleware CORS
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json())
app.use('/', router)

async function seedTables() {
    await seedRoles();
    await seedCategories();
    await seedUsers();
    await seedReviews();
    await seedTransactions();
    await seedProducts();
    await seedAddress();
    await seedWarehouses();
    await seedInvoices();
}

app.listen(port, async () => {
  console.log(`server start on ${port}`)

  try {
    await sequelize.authenticate();
    await sequelize.sync();
    await seedTables();

  } catch (error) {
    console.error('unable to connect', error);
  }
})
