const development = {
  database: 'postgres',
  username: 'postgres',
  password: '12345',
  host: 'postgres',
  dialect: 'postgres',
};

const testing = {
  database: 'databasename',
  username: 'username',
  password: 'password',
  host: 'postgres',
  dialect: 'postgres',
};

const production = {
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST || 'postgres',
  dialect: 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
