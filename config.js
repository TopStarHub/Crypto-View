const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config({ path: './server/config/local.env' })
}

module.exports = {
  PORT: process.env.PORT || 5000,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV,
  INITIAL_CHIPS_AMOUNT: 100000,
  }
