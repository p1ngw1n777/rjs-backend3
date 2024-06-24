const express = require('express')
const router = require('./controllers/index.js')
const cors = require('cors')

const app = express()
const port = 3001

const sequelize = require('./db')
const bodyParser = require('body-parser')

// Включаем middleware CORS
app.use(cors());
app.use('/', router)
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.listen(port, async () => {
  console.log(`server start on ${port}`)

  try {
    await sequelize.authenticate();
    await sequelize.sync();

  } catch (error) {
    console.error('unable to connect', error);
  }
})
