exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? 'https://react-image-upload.herokuapp.com'
  : 'http://localhost:3000'