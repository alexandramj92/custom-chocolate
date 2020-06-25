require('dotenv').config()
const express = require('express')
const path = require('path')
const cloudinary = require('cloudinary')
const formData = require('express-form-data')
// const cors = require('cors')
// const { CLIENT_ORIGIN } = require('./config')


const app = express()
app.use(formData.parse())
app.use(express.static(path.join(__dirname, 'client/build')));


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET
})


  
// app.use(cors({ 
//   origin: CLIENT_ORIGIN 
// })) 


app.get('/wake-up', (req, res) => res.send('👌'))

app.post('/image-upload', (req, res) => {

  const values = Object.values(req.files)
  const promises = values.map(image => cloudinary.uploader.upload(image.path))
  
  Promise
    .all(promises)
    .then(results => res.json(results))
    .catch((err) => res.status(400).json(err))
})



app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}




app.listen(process.env.PORT || 8080, () => console.log('👍'))