exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://custom-chocolate.herokuapp.com'
  : 'http://localhost:3000'