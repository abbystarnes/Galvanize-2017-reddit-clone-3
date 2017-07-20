module.exports = {

  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone',
      connection: 'postgres://localhost/reddit-clone'
    }
  },

  test: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_URL || 'reddit-clone-test',
    }
  }

};
