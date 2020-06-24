exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://custom-chocolate-server.herokuapp.com/'
  : 'http://localhost:3000'